import React from "react";
import style from "../../CSS/Projects/Projects.module.css";

const ProjectCard = ({img,title,text,info,link}) =>{
    return <div className="col-lg-6">
                <div className={`card ${style.card}`}>
                    <a href={link}>
                    <img src={img}  className={style.card_img} />
                    </a>
                    <div className={`card-body ${style.card_body}`}>
                        <h5 className="card-title">{title}</h5>
                        <p className={`Card-text ${style.Card_text}`}>{text}</p>
                        <p className="card-text"><small className="text-muted">{info}</small></p>
                    </div>
                </div>
            </div>
}

export default ProjectCard;