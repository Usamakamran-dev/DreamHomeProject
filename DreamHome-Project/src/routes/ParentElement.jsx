import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

function ParentElement(){
    return(
        <div>
            <Navbar/>
            <Outlet/>
            <FooterSection></FooterSection>
        </div>
    )}
export default ParentElement;