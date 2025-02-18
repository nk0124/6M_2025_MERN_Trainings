import { Link } from "react-router-dom";

function MainPage(){
    return(
        <>
        <Link to="/colors">1.colors</Link><br />
        <Link to="/contactcard">2.Contact-card</Link><br />
        <Link to="/div">3.Div</Link><br />
        <Link to="/array">4.Simple Array</Link><br />
        <Link to="/mapping">5.Mapping Employees</Link><br />
        <Link to="/intro">6.Intro</Link><br />
        <Link to="/productcart">7.Productcart</Link><br />
        <Link to="/restaurantlist">8.RestauranList</Link><br />
        <Link to="/shoppingtable">10.ShoppingTable</Link><br />
        <Link to="/student">11. Student</Link><br />
        <Link to="/weather">12.Weather</Link><br />
        </>
    )
}

export default MainPage;