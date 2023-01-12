import React from "react";
import { HashLink } from "react-router-hash-link";
import style from "../../CSS/Homepage/LandingArea.module.css";
import Donia from "../../Images/DoniaWalid.png"


const LandingArea = () =>{
    return <div className={style.landing}>
            <div className={style.content}>
                <div className="row" style={{margin:0}}>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className={style.welcomeMsg}>
                                <h1>Hello, I'm Donia Walid.</h1>
                                <p>Junior FrontEnd develeoper</p>
                                <HashLink
                                to="/contact"
                                >
                                <button className={style.contact_btn}>Contact me</button>
                                </HashLink>
                            </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className={style.myPicture}>
                            <img src={Donia}/>
                        </div>
                    </div>
                </div>
        </div>
    </div>
}

export default LandingArea;