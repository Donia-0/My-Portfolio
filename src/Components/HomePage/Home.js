import React from "react";
import Navbar from './../Layout/Navbar';
import Aboutme from "./About me/Aboutme";
import LandingArea from "./LandingArea";
import Skills from "./myskills/Skills";


const Home = () =>{
    return <div>
        {/* <Navbar/> */}
        <LandingArea/>
        <Aboutme/>
        <Skills/>
    </div>
}

export default Home;