import { CircularProgress, LinearProgress } from "@mui/material";
import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { SkillBars } from "react-skillbars";
import style from "../../../CSS/Homepage/Skills.module.css"
import Progress_bar from "./Progress_bar";


const Skills = (skills) =>{    
    // const SKILLS = [
    //     {type: "HTML", level: 99},
    //     {type: "CSS", level: 98},
    //     {type: "JavaScript", level: 87},
    //     {type: "jQuery", level: 92},
    //     {type: "BootStrap", level: 90},
    //     {type: "Photoshop", level: 100},
    //     {type: "Angular.js", level: 16},
    //     {type: "React.js", level: 25},
    //     {type: "PHP", level: 36},
    //     {type: "Ruby", level: 11}
    //   ];
    //     const [skills,setSkills] = useState();
        
      
   return (
            <div className={style.Skills}>
                <h3>My Skills</h3>
                <div className="row" style={{margin:"0"}}>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Progress_bar bgcolor="green" progress='90'  height={30} skill="HTML"/>
                         <Progress_bar bgcolor="#99ff66" progress='90'  height={30} skill="bootstrap"/>
                         <Progress_bar bgcolor="#99ccff" progress='80'  height={30} skill="React.js"/>
                         <Progress_bar bgcolor="coral" progress='75' height={30} skill="Problem Solving"/>
                         <Progress_bar bgcolor="brown" progress='60' height={30} skill="SQL"/>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">        
                        <Progress_bar bgcolor="orange" progress='85'  height={30} skill="CSS"/>
                        <Progress_bar bgcolor="#ff00ff" progress='70'  height={30} skill="Java Script"/>
                        <Progress_bar bgcolor="red" progress='60'  height={30} skill="Redux"/>
                        <Progress_bar bgcolor="blueviolet" progress='90' height={30} skill="OOP"/>
                        <Progress_bar bgcolor="cadetblue" progress='50' height={30} skill="Testing"/>
                    </div>
                </div>
             
            </div>
         )
}


export default Skills;