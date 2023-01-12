import React from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./CSS/App.css"
//components
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "./Components/HomePage/Home";
import Contact from "./Components/HomePage/Contactme/Contact";
import WithNavbarAndFooter from "./WithNavbarAndFooter";
import Aboutme from "./Components/HomePage/About me/Aboutme";
import Projects from './Components/Projects/Projects';





const App =() => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact element={<WithNavbarAndFooter/>}>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<Aboutme/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
