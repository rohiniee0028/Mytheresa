import {IoMdInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import "./styles/Address.css";

export const Address = () => {

 const handleBilling = ()=>{
    alert("added billing address, you can proceed now")
 }

    return (
        <div style={{ borderTop: "1px solid #dfdfdf" }}>
            <div className="address-section">
                <div className="left-address">
                    <p className="ship-head">SHIPPING ADDRESS</p>
                    <p className="pls-enter">Please enter your shipping address in the form below.</p>
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
                    <form className="form-address">
                        <input type="name" placeholder="first name *" required />
                        <input type="last name" placeholder="last name *" required />
                        <input type="company" placeholder="company" />
                        <input type="email" placeholder="email *" required/>
                        <input type="address" placeholder="address *" required />
                        <input type="state" placeholder="state *" required />
                        <input type="pin" placeholder="pin code *" required/>
                        <input type="city" placeholder="city *" required/>
                        <input type="country" placeholder="country *" required/>
                        <input type="mobile no." placeholder="mobile no. *" required/>
                    </form>
                    <p className="pls-enter">* required fields</p>
                    <p className="ship-head">BILLING ADDRESS</p>
                    <p className="pls-enter">If your billing address differs from your shipping address, please click "add billing address".</p>
                    <button className="billing-btn" onClick={handleBilling}>ADD BILLING ADDRESS</button>
                    <br/>
                    <br/>
                    <br/>
                    <button className="back-btn">BACK TO SHOPPING BAG</button>
                </div>

                <div className="right-shipping">
                    <p className="ship-head">SHIPPING METHOD</p>
                    <div className="high-vol">
                        <span className="pls-enter">Due to a high volume of orders, delays of up to 2 days may occur. We apologize for any inconvenience this may cause.</span>
                    </div>
                    <div className="express">
                        <div>
                            <input type="radio" />
                            Express
                            <IoMdInformationCircleOutline style={{marginLeft:"10px"}}/>
                        </div>
                        <div>₹ 0.00</div>
                    </div>
                    <div>
                        <p className="ship-head">PACKAGING OPTIONS</p>
                        <div className="packaging">
                            <div>
                                <div className="pack">
                                    <input type="radio" />
                                    <b>Mytheresa packaging</b><br />Free
                                </div>
                                <img src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_mytheresa_2x.jpg" alt="package-img" width="120px" />
                            </div>
                            <div>
                                <div className="pack">
                                    <input type="radio" />
                                    <b>Eco packaging</b><br/>Free
                                </div>
                                <img src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_brown_2x.jpg" alt="eco-img" width="120px"/>
                            </div>
                        </div>
                        <div className="bottom-div">
                            <p className="ship-head">CLIMATE NEUTRAL OPTION</p>
                            <div className="checking-div">
                                <div>
                                    <input type="checkbox"/>
                                    <b>Help offset the CO2 emissions of your order</b>
                                    <IoMdInformationCircleOutline style={{marginLeft:"10px"}}/>
                                </div>
                                <div> ₹ 0.40</div>
                            </div>
                        </div>
                    </div>
                    <Link to="/credit">
                      <div className="checkout-below">PROCEED TO CHECKOUT</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}