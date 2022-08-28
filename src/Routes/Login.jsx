import { useContext } from "react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "./styles/Login.css";
import { validation } from "./Validation";
export const Login = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        pwd: "",
        confirmPwd: ""

    })
    const {toggleAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleSubmit = () => {
        setErrors(validation(values));
        console.log(values);
        alert("registration successful")
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin=()=>{
        alert("Login successfully");
        navigate("/life");
    }

    return (
        <div style={{ borderTop: "1px solid lightgray" }}>
            <p className="login-top-para">For a short time only: free shipping on all orders</p>
            <div className="main-container">
                <div className="inside-container">
                    <div className="create-account">
                        <div className="inside-account">
                            <p>CREATE AN ACCOUNT</p>
                            <div className="field-set">
                                <form onSubmit={handleSubmit}>
                                    <span>Please enter the following information to create your account</span>
                                    <br />
                                    <div className="radio-div">
                                        <span>
                                            <input type="radio" />
                                            <label>Ms.</label>
                                        </span>
                                        <span>
                                            <input type="radio" />
                                            <label>Mrs.</label>
                                        </span>
                                        <span>
                                            <input type="radio" />
                                            <label>Mr.</label>
                                        </span>
                                    </div>
                                    <div className="input-content" >
                                        <select>
                                            <option value="">academic title</option>
                                            <option></option>
                                            <option value="Dr.">Dr.</option>
                                            <option value="Prof.">Prof.</option>
                                            <option value="Prof.Dr.">Prof. Dr.</option>
                                        </select>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="first name *"
                                                name="firstName"
                                                value={values.firstName}
                                                onChange={handleChange}
                                            />
                                            {errors.firstName && <p>{errors.firstName}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="last name *"
                                                name="lastName"
                                                value={values.lastName}
                                                onChange={handleChange}
                                            />
                                            {errors.lastName && <p>{errors.lastName}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="email address *"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && <p>{errors.email}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="password *"
                                                name="pwd"
                                                value={values.pwd}
                                                onChange={handleChange}
                                            />
                                            {errors.pwd && <p>{errors.pwd}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="confirm password *"
                                                name="confirmPwd"
                                                value={values.confirmPwd}
                                                onChange={handleChange}
                                            />
                                            {errors.pwd && <p>{errors.pwd}</p>}
                                        </div>
                                    </div>
                                    <div className="para-content">
                                        <div className="checkbox-para">
                                            <input type="checkbox" />
                                            From now on I will receive the Mytheresa Newsletter with selected fashion offers. If I do not wish to receive the newsletter, I can unsubscribe at any time free of charge at
                                            privacy@mytheresa.com.
                                        </div>

                                        <span>
                                            I agree that Mytheresa may insert analytical web beacons into the newsletter and create a personalized user profile based on my purchase and usage behavior, including sending a notification when I have placed something in the shopping cart. Further details can be found in our Privacy Policy, clause 5. I understand that I can revoke my consent at any time by emailing
                                            privacy@mytheresa.com.
                                        </span>
                                        <br />
                                        <br />
                                        * required fields
                                    </div>
                                    <br />
                                    <button className="register-btn" onSubmit={handleSubmit}>REGISTER</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="registered-account">
                        <div className="inside-register">
                            <p className="top-para-register">ALREADY REGISTERED?</p>
                            <p>If you have an account with us, please log in.</p>
                            <div className="input-content">
                                <form onSubmit={handleLogin}>
                                    <input type="email" placeholder="email address *" required />
                                    <input type="text" placeholder="password *" required />
                                    <br />
                                    <span>* required fields</span>
                                    <a href="#">Forgot Your Password?</a>
                                    <br />
                                    <button className="login-btn" onSubmit={handleLogin} onClick={toggleAuth}>LOGIN</button>
                                </form>
                            </div>
                            <p>
                                At Mytheresa, we keep your information secure. As a result, it will be necessary for you to log in to your account before you are able to place an order or change the information on your account. You will be asked to log in to complete your order even if you have already been greeted on the website.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}