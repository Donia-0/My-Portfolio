import React from "react";
import style from "../../../CSS/Homepage/Contact.module.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({
    type,
    placeholder,
    name,
    value,
    labelName,
    err,
    onChange,
    rows,
    id,
    icon
}
) => {
    return (
        <div className={style.input} >
            <div className="col-lg-12 col-md-12 col-sm-12">
                {/* <FontAwesomeIcon icon={icon} className={style.highlight} style={{ color: "rgb(160, 88, 65)", position: "relative", top: "30px", right: "7px" }} /> */}
                <label className={`form-label ${style.formlabel}`} style={{ padding: "4px", color: "brown",fontWeight: "bold" }}>{labelName}</label>
            </div>
            <input
                value={value}
                onChange={onChange}
                name={name}
                id={id}
                className="form-control"
                // className={classnames('form-control', {
                //     'is-invalid': err,
                // })}
                type={type} required
                rows={rows}
                placeholder={placeholder}
            />
            {/* {err && (
                <div className={`invalid-feedback ${style.error_text}`}>{err}</div>
            )} */}
        </div>
    )
}

export default Input;