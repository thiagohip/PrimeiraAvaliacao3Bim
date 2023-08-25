import {Routes, Route} from "react-router-dom"
import {HomePage, PageLayout} from "../pages"

export function RouteSoftware(){
    return(
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                <Route path="" element={<HomePage/>}/>
            </Route>
        </Routes>
    )
}