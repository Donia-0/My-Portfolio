import React from "react";
import style from "../../CSS/Layout/Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faGoogle,
    faInstagram,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";




const Footer = () =>{
    return <div className={style.footer}>
                <div className={style.social}>
                    <a href="https://www.facebook.com/profile.php?id=100006739065582&mibextid=ZbWKwL">
                    <FontAwesomeIcon className={style.icon} icon={faFacebookF}/>
                    </a>
                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2F_doniawalid_%3Figshid%3DYmMyMTA2M2Y%253D%26fbclid%3DIwAR2Xlh9Kz_66AZWQgSY7sxjkW_mFdv-XkfmxsHuwOouDS7tGzrqkFGv2x5s&h=AT3Rrvph3sjhGWpgNAILWGvrq-G9K2emtZCLjYi_U5C0A1R8sBQvG8xAP8yyI5ER0PMe-JpBJL4CraQ9hDKBItAlwQ5bI_l_mMmzJb5nBnhgTOfZs-orZmUzefqXbLTIkV8lCA">
                    <FontAwesomeIcon className={style.icon} icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/doniawalid">
                    <FontAwesomeIcon className={style.icon} icon={faLinkedinIn} />
                    </a>
                </div>
        {/* <a href="doniawalid288@gmail.com">
        <FontAwesomeIcon className={style.icon} icon={faGoogle} />
        </a> */}
    

    </div>
}

export default Footer;