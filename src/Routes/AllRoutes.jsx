import { Kids } from "./Kids"
import { Life } from "./Life"
import { Men } from "./Men"
import { Women } from "./Women"
import {Route, Routes} from "react-router-dom"
import { Login } from "./Login"

export const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="/women" element={<Women/>}/>
            <Route path="/men" element={<Men/>}/>
            <Route path="/kids" element={<Kids/>}/>
            <Route path="/life" element={<Life/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}