# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project layout

Two sibling Node packages, each with its own `package.json` and `node_modules`. There is no root install:

- `Server/` - Express + Mongoose REST API, ES modules (`"type": "module"`, so relative imports need the `.js` suffix).
- `Web/`    - Create React App client (React 18, React Router v7, MUI v5, Axios, SweetAlert).

UI strings and many code comments are in Hebrew; keep that in mind when grepping.

## Common commands

Server (run from `Server/`):
- `npm install`
- `npm start`   - runs `nodemon app.js` on port 3000. No test script is defined.

Web (run from `Web/`):
- `npm install`
- `npm start`   - CRA dev server, defaults to port 3000 (see port-collision note below).
- `npm test`    - CRA Jest in watch mode. Single file: `npm test -- --testPathPattern=<name>`.
- `npm run build`

## Port-collision warning

The API hardcodes port 3000 (`Server/app.js`). CRA also defaults to 3000 and will prompt to switch to 3001. Accept the switch: the Web client's Axios `baseUrl` is hardcoded to `http://localhost:3000` in `Web/src/Project/api.js`, so the API must stay on 3000 and the Web dev server must move.

## Server environment variables

`Server/.env` must define:

- `LOCAL_URI` - MongoDB connection string (used by `mongoose.connect` in `Server/app.js`).
- `SECRET`    - JWT signing/verification secret (used by `checkAuth` in `Server/api/middlewares.js` and by `login`/`signIn` in `Server/api/controllers/Advertiser.js`).

The repo `README.md` lists these as `MONGO_URI` and `JWT_SECRET`; those names are wrong - the code reads `LOCAL_URI` and `SECRET`.

## Architecture

```
                            +-------------------+
        Browser  ---HTTP--->|  Web (CRA, React) |
                            |  Web/src/         |
                            |   Components/*    |
                            |   Project/api.js  |  (single Axios module, baseUrl hardcoded)
                            +---------+---------+
                                      |
                                      | axios -> http://localhost:3000
                                      v
+-----------------------------------------------------------------------+
|                       Server/app.js (Express)                         |
|  body-parser, cors, static('uploads')                                 |
|                                                                       |
|   /Advertiser  -> routers/Advertiser.js  -> controllers/Advertiser.js |
|   /City        -> routers/City.js        -> controllers/City.js       |
|   /Category    -> routers/Category.js    -> controllers/Category.js   |
|   /Apartment   -> routers/Apartment.js   -> controllers/Apartment.js  |
|                                                                       |
|   middlewares.js: checkAuth (JWT), checkCodeExsist, upload (multer)   |
+-----------------------------+-----------------------------------------+
                              |
                              | mongoose
                              v
                +-------------+--------------+
                |  MongoDB (LOCAL_URI)       |
                |                            |
                |  Advertiser ---+           |
                |  City  --------+           |
                |  Category -----+           |
                |                |           |
                |                v           |
                |   Apartment (refs above)   |
                |                            |
                |   + each of Advertiser/    |
                |     City/Category holds    |
                |     arrApartment: [oid]    |
                |     (denormalized back-    |
                |      reference, kept in    |
                |      sync by the Apartment |
                |      controller)           |
                +----------------------------+
```

### Layering

`api/routers/*.js` -> `api/controllers/*.js` -> `api/models/*.js`. Cross-cutting concerns live in `api/middlewares.js`. Auth-protected routes wrap the controller in `checkAuth` (expects `Authorization: Bearer <jwt>`, verified with `process.env.SECRET`).

### Domain model

Four entities: Advertiser (account), City, Category, Apartment. Apartment references the other three by `ObjectId`. City, Category, and Advertiser each hold a denormalized `arrApartment: [ObjectId]` back-reference. The Apartment controller's `create` and `remove` manually `$push`/`$pull` the apartment id into all three of those arrays in sequence (`Server/api/controllers/Apartment.js`). Any new code path that creates or deletes an Apartment must keep these arrays in sync or `populate`-based listings will go stale.

### Misspelled field: `codeAdverticer`

The Apartment schema field is `codeAdverticer` (not `codeAdvertiser`). It is used in the model, in `Apartment.populate({ path: 'codeAdverticer', ... })`, and in ownership checks like `app.codeAdverticer != codeAdvertiser` inside `remove`/`update`. Route params and URLs still use the correctly-spelled `codeAdvertiser`. Do not "clean up" the model-side spelling as a drive-by - it is a coordinated rename across model, controllers, and existing DB documents.

### Image uploads

`multer` writes uploads to `Server/uploads/` (jpg/png only, 2 MB limit; see `middlewares.js`). `Server/app.js` serves that folder at the root with `express.static("uploads")`, so an uploaded `foo.jpg` is reachable at `http://localhost:3000/foo.jpg` - not `/uploads/foo.jpg`.

## Web architecture

- Entry: `Web/src/index.js` -> `App` -> `<Main>` (`Web/src/Project/Components/Main.jsx`) mounts `BrowserRouter`, `<Nav>`, `<Routing>`.
- All HTTP calls go through `Web/src/Project/api.js` (single Axios module). Add new endpoints here rather than calling `axios` from components.
- Routes registered in `Web/src/Project/Components/Routing.jsx`: `""`, `login`, `category`, `advertiser`, `city`, `apartment`.
- Redux: `react-redux` and `redux` are in `package.json` and `Web/src/Project/Redux/Store.js` and `Action.js` exist, but both files are empty. State today is local `useState`; Redux is not wired up.
- There is a stray unused `Web/src/Login.jsx` at the top of `src/`. The component actually mounted by the router is `Web/src/Project/Components/Login.jsx`.

### Known UX behaviors worth knowing before editing

- `Login.jsx` calls `nav('/homePage')` on success, but no `homePage` route is registered in `Routing.jsx` - successful login currently renders a blank page. Pre-existing bug.
- On a 404 from `/Advertiser/login`, the Login component automatically calls `/Advertiser/signIn` to register the user. This is intentional try-login-then-register UX, not a bug.
