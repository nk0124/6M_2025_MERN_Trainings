import ContantCard from "./components/ContactCard";
import Div from "./components/Div";
import Employee from "./components/Employee";
import Intro from "./components/Intro"
import Productcart from "./components/Productcart";
import Shoppingcart from "./components/Shoppingcart";
import Student from "./components/Student";
import Weather from "./components/Weather";

function App() {
  return (
    <>
     {/* <h1>Helo world</h1> */}
     {/* <Intro/>
     <Intro/> */}
     {/* <Employee ename="Raj Kumar"  Position="Project Manager" Department="Project Manager" />
     <Employee ename="Neha" Position="HR" Department="IT"/>
     <Employee ename="Rahul"  Position="Project Manager" Department="Project Manager"/>
     <Student/>
     <Student/> */}
     <h1>Shopping Cart</h1>
     <Shoppingcart name="Laptop" price="999.99"  quantity="1" />
     <br />
     <Shoppingcart name="Headphones" price="199.99"  quantity="2" />
     <Productcart name="Smartphone X"  price="1000" description="A powerful smartphone with a stunning display"/>
     <Productcart name="Wireless Headphones"  price="199"  description="Noise-cancelling headphones with rich sound quality"/>
     <Productcart name="Gaming Laptop" price="1599" description="A high-perfomance laptop for gaming enthusiasts"/>
     <ContantCard name="Ravi Kumar" phone="8767xxxx56"  email="ravi@gmail.com" />
     <ContantCard name="Sakshi" phone="758765xxxx"  email="sakshi12@gmail.com" />
     <ContantCard name="Noor" phone="8765xxxx45" email="noor23@gmail.com" />
     <ContantCard name="Mehak" phone="87656xxxx" email="mehak@gmail.com" />
     <Weather city="New York" temperature={22} humidity={65} condition="Sunny" />
     <Weather city="London" temperature={18} humidity={80} condition="Cloudy" />
     <Weather city="Tokyo" temperature={25} humidity={70} condition="Rainy" />
     <Div/>
    </>
  )
}

export default App;