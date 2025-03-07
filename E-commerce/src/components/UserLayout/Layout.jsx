import {Outlet} from "react-router-dom";
import Header from "../UserLayout/Header";
import Footer from "../UserLayout/Footer";
export default function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>  
        <Footer/>
        </>
    )
}