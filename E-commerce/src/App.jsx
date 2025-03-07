import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/UserLayout/Layout";
import Login from "./components/UserPanel/Login";
import Register from "./components/UserPanel/Register"
import ViewCategory from"./components/UserPanel/ViewCategory";
import ViewBrands from "./components/UserPanel/ViewBrands";
import ViewProduct from "./components/UserPanel/ViewProduct";
import AddToCart from "./components/UserPanel/AddToCart";
import Coupons from "./components/UserPanel/Coupons";
import Order from "./components/UserPanel/Order";
import TrackOrder from "./components/UserPanel/TrackOrder";
import UpdateProfile from "./components/UserPanel/UpdateProfile";
import About from "./components/MainPage.jsx/About";
import AddEnquiry from "./components/UserPanel/AddEnguiry";
import { ToastContainer } from "react-toastify";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        {/* Master - Parent route */}
        {/* user panel routing */}
     <Route path="/" element={<Layout/>}>
      <Route path="/" element={<About/>}/>
      <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/updateprofile" element={<UpdateProfile/>}/>
       <Route path="/viewcategory" element={<ViewCategory/>}/>
       <Route path="/viewbrands" element={<ViewBrands/>}/>
       <Route path="/viewproduct" element={<ViewProduct/>}/>
       <Route path="/addtocart" element={<AddToCart/>}/>
       <Route path="/Coupons" element={<Coupons/>}/>
       <Route path="/order" element={<Order/>}/>
       <Route path="/trackorder" element={<TrackOrder/>}/>
       <Route path="/enquiry" element={<AddEnquiry/>}/>
     </Route>
    </Routes>
    <ToastContainer></ToastContainer>
    </BrowserRouter>
    </>
  )
}

export default App
