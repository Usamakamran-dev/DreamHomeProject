import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function AdminParent(){
    return(
        <>
        <Sidebar/>
        <Outlet/>
        </>
    )}
    export default AdminParent;