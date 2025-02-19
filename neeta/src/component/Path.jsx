import { Link } from "react-router-dom";

export default function Path(){
    return(
        <>
        <Link to="/color"> 1. Color </Link><br/>
        <Link to="/intro">2. Intro </Link><br/>
        <Link to="/about">3. about</Link><br />
        <Link to="/zomato">4.Zomato</Link>
        </>
    )
}