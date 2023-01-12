import React,{useState} from "react";
import style from "../../../CSS/Homepage/Contact.module.css";
import Input from "./Input";


const Contact =() =>{
    const [form,SetForm] = useState({
        userName:"",
        email:"",
        phone:"",
        message:""
    })
    const onInputChange = (e) =>{
        const value = e.target.value;
        SetForm({
            ...form,
            [e.target.name]: value,
        })
    };

    const onFormSubmit = (event) =>{
        console.log(form);
        event.preventDefault();
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)

        })
    }


    return( 
            <div className={style.contact}>
                <div className={style.contactHeader}>
                    For any requirs Contact me
                </div>
                <div className={style.formContainer}>
                <form className=" needs-validation"
                    onSubmit={onFormSubmit}
                >
                    {/* <div className="col-md-6"> */}
                        <Input
                        value={form.userName}
                        name="userName"
                        labelName="User Name"
                        type="text" required
                        onChange={onInputChange}
                        
                        />
                    {/* </div> */}
                    {/* <div className="col-md-6"> */}
                    <Input
                        value={form.email}
                        name="email"
                        labelName="Email"
                        type="email" required
                        onChange={onInputChange}
                    />
                    {/* </div> */}
                    {/* <div className="col-md-6">/ */}
                    <Input
                        value={form.phone}
                        name="phone"
                        labelName="Phone Number"
                        type="text" required
                        onChange={onInputChange}
                    />
                    {/* </div> */}
                    <div className="col-lg-12">
                    <label className={style.formlabel} style={{ padding: "4px", color: "brown", fontWeight: "bold" }}>Message </label>
                    </div>
                    {/* <div className="col-lg-6"> */}
                    <textarea style={{width:"100%"}}
                        value={form.message}
                        onChange={onInputChange}
                        name="message"
                        rows="6"
                        required
                    ></textarea>
                    {/* </div> */}
                    <div className="col-12">
                    <button className={`btn btn-primary ${style.submitbtn}`} type="submit">Submit form</button>
                    </div>
                </form>
                </div>

            </div>
    )
}

export default Contact;