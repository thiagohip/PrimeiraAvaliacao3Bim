import {Routes, Route} from "react-router-dom"
import {HomePage, DownloadPage, PageLayout} from "../pages"

export function RouteSoftware(){
    return(
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                <Route path="" element={<HomePage/>}/>
                <Route path="download" element={<DownloadPage/>}/>
            </Route>
        </Routes>
    )
}