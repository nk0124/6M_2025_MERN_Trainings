import { Link } from "react-router-dom";

function NavBar(){
    return(
        <>
        <Link to="/home"> 1. Home </Link><br/>
        <Link to="/about">2. About </Link><br/>
        <Link to="/contact">3. Contact</Link><br />
        <Link to="/zomato">4.Zomato</Link>
        </>
    )
}
 export default NavBar;