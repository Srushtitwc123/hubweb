import React from "react";
import "./App.css";

import Empower from "./component/Empower";
import Flip from "./component/Flip";

import brand from "./component/Brands"
import Brands from "./component/Brands";
import Card1 from "./component/Card1";
import Cardvertical from "./component/Cardvertical"
import Apply from "./component/Apply";
import Success from "./component/Success"
import Test from "./component/Test"
import FAQ from "./component/FAQ"
import Inter from "./component/Inter"
import Footer from "./component/Footer"
import { Accordion } from "@szhsin/react-accordion";
import Home from "./component/Home";





function App() {
  return (
    <div className="overflow-hidden">
   <Home/>
      <Flip/> 
     <Empower/> 
     <Brands/> 
    <Card1/> 
     <Cardvertical/> 
     <Apply/> 
      <Success/>  
     <Test/> 
     
  <FAQ/> 
     
     <Inter/> 
     <Footer/> 

   
   
    
    </div>
    
  );
}

export default App;
