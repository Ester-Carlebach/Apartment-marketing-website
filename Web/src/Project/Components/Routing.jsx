// // npm i react-router
// // npm i react-router-dom

import { Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { Login } from "./Login"
import { Category } from "./Category"
import { Advertisers } from "./Advertisers"
import { City } from "./City"
import { Apartment } from "./Apartment"

export const Routing = () => {

    return <>
        <Routes>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="category" element={<Category></Category>}></Route>
            <Route path="advertiser" element={<Advertisers></Advertisers>}></Route>
            <Route path="city" element={<City></City>}></Route>
            <Route path="apartment" element={<Apartment></Apartment>}></Route>


        </Routes>
    </>
}