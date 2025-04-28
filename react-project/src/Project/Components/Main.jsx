import { BrowserRouter } from "react-router-dom"
import { Login } from "./Login"
import { Routing } from "./Routing"
import { Nav } from "./Nav"

export const Main = () => {
    return <>
        <BrowserRouter>
            <Nav></Nav>
            <Routing></Routing>
        </BrowserRouter>
    </>
}