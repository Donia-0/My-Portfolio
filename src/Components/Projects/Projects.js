import React from "react";
import style from "../../CSS/Projects/Projects.module.css"
import ProjectCard from "./ProjectCard";
import p1 from "../../Images/Medical Record.png"
import p2 from "../../Images/Portfolio.png"
import p3 from "../../Images/Insititute.png"
import p4 from "../../Images/Plants boutique.png"



const Projects = () =>{
    return <div>
        <header>My Projects</header>
        <div className="row" style={{margin:0}}>
            <ProjectCard
            img={p1}
            link="https://github.com/Donia-0/Medical-Record-System"
            title="Medical Record System"
            text="my graduation Project"
            info="Made by:  HTML | CSS | JS | bootstrap | ReactJs | React-bootstrap."
            />
            <ProjectCard
            img={p4}
            link="https://github.com/Donia-0/Plants-Boutique"
            title="Plants Boutique"
            text="An e-commerce project for selling plants."
            info="Made by:  HTML | CSS | JS | bootstrap | ReactJs."
            />
            <ProjectCard
            img={p2}
            title="My Portfolio"
            info="Made by:  HTML | CSS | JS | bootstrap | ReactJs."
            />
             <ProjectCard
            img={p3}
            title="Educational Institute"
            text="A freelance project made for educational courses"
            info="Made by:  HTML | CSS | JS | bootstrap | ReactJs | React-bootstrap | MUI."
            />     
        </div>
    </div>
}

export default Projects