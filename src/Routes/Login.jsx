import "./styles/Login.css";
export const Login = () => {
    return (
        <div style={{ borderTop: "1px solid lightgray" }}>
            <p className="login-top-para">For a short time only: free shipping on all orders</p>
            <div className="main-container">
                <div className="inside-container">
                    <div className="create-account">
                        <div className="inside-account">
                            <p>CREATE AN ACCOUNT</p>
                            <div className="field-set">
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
                                    <input type="text" placeholder="first name *" required />
                                    <input type="text" placeholder="last name *" required />
                                    <input type="email" placeholder="email address *" required />
                                    <input type="text" placeholder="password *" required />
                                    <input type="text" placeholder="confirm password *" required />
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
                                <button className="register-btn">REGISTER</button>
                            </div>
                        </div>
                    </div>
                    <div className="registered-account">
                        <div className="inside-register">
                            <p className="top-para-register">ALREADY REGISTERED?</p>
                            <p>If you have an account with us, please log in.</p>
                            <div className="input-content">
                                <input type="email" placeholder="email address *" required />
                                <input type="text" placeholder="password *" required />
                                <br />
                                <span>* required fields</span>
                                <a href="#">Forgot Your Password?</a>
                                <br />
                                <button className="login-btn">LOGIN</button>
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