import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function ParentElement(){
    return(
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )}
export default ParentElement;