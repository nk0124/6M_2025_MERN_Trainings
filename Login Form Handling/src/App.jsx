
import Zomato from "./components/zomato/Zomato";
//npm i react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Colors from "./components/Colors";
import Path from "./components/Path";
import About from "./components/pages/About";
import Intro from "./components/Intro"
import Contact from "./components/pages/Contact";
import Courses from "./components/pages/Courses";
import Layout from "./components/layouts/Layout";
import Error from "./components/pages/Error";
import Student from "./components/Student";
import CartTable from "./components/CartTable"
import AdminLayout from "./components/admin/layouts/AdminLayout";
import Counter from "./components/pages/Counter";
import Login from "./components/pages/Login";
import MyRegister from "./components/auth/MyRegister";
//npm i bootstrap
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App(){
  return(
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Path/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/intro" element={<Intro/>}/>
        <Route path="/zomato" element={<Zomato/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/courses" element={<Courses/>}/>
        
        <Route path="/login" element={<Login></Login>}/>
      </Route>
      <Route path="/admin" element={<AdminLayout/>}>
        <Route path="/admin/student" element={<Student/>}/>
        <Route path="/admin/cart" element={<CartTable/>}/>
        <Route path="/admin/register" element={<MyRegister/>}/>
      </Route>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/color" element={<Colors/>}/>
      <Route path="/*" element={<Error/>} />
    </Routes>
   </BrowserRouter>
   </>
  )
}
export default App

