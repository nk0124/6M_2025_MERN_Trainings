
//npm i react-router-dom
import Zomato from "./component/zomato/Zomato";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Colors from "./component/Colors"
import Path from "./component/Path"
import About from "./component/pages/About";
import Intro from "./component/Intro"
//npm i bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./component/Home";
import Contact from "./component/Contact";
import NavBar from "./component/NavBar";
import Download from "./component/zomato/Download";
import PdfDownLoad from "./component/zomato/PdfDownload";
function App(){
  return(
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/zomato" element={<Zomato/>}/>
      <Route path="/csvdownload" element={<Download/>}/>
      <Route path="/pdfdownload" element={<PdfDownLoad/>}/>
    </Routes>
   </BrowserRouter>
   
   </>
  )
}
export default App

