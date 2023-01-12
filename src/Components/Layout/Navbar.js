import React from "react";
import style from "../../CSS/Layout/Navbar.module.css"
import { HashLink } from "react-router-hash-link";


const Navbar = () =>{
    return ( 
            <div className={style.navbar_container}>
                <nav className={`navbar navbar-expand-lg  ${style.navbar}`}>
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className={`nav-item${style.nav_item}`}>
                            <HashLink
                                className={`nav-link  ${style.nav_link}`}
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </HashLink>
                            </li>
                            <li className={`nav-item${style.nav_item}`}>
                                <HashLink
                                   className={`nav-link  ${style.nav_link}`}
                                   aria-current="page"
                                   to="/projects"
                                >
                                    Projects
                                </HashLink>
                            </li>
                            <li className={`nav-item${style.nav_item}`}>
                                <HashLink
                                    className={`nav-link  ${style.nav_link}`}
                                    aria-current="page"
                                    to="#about"
                                    >
                                        About me
                                    </HashLink>
                            </li>
                            <li className={`nav-item${style.nav_item}`}>
                                <HashLink
                                    className={`nav-link  ${style.nav_link}`}
                                    aria-current="page"
                                    to="/contact"
                                    >
                                        Contact
                                    </HashLink>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
    )
}


export default Navbar;