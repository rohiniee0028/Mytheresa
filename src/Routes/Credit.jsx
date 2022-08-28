import { FaRegCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/Credit.css";
export const Credit = () => {
    return (
        <div style={{ borderTop: "1px solid #dfdfdf" }}>
            <div className="credit-div">
                <div className="top-credit-div">
                    <p>PAYMENT METHOD</p>
                    <p className="same-pinch">Please select your preferred payment method for this order.</p>
                </div>
                <div className="card-input">
                    <div className="select-card">
                        <span >
                            <input type="radio" />
                            <FaRegCreditCard style={{marginRight:"5px", marginLeft:"5px"}}/>
                            <b>Card</b>
                            <br />
                            <label className="same-pinch">Immediate Shipping</label>
                        </span>
                    </div>
                    <div className="input-card">
                        <div className="card-icons">
                            <span className="vi-icon">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" />
                                <img src="https://www.svgrepo.com/show/303248/mastercard-2-logo.svg" />
                                <img src="https://seeklogo.com/images/D/Diners_Club-logo-6B1B8635A2-seeklogo.com.png" />
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968341.png" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UnionPay_logo.svg/1200px-UnionPay_logo.svg.png" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHHKVCUKlVhz0iWrJJU6OWheGYss3sjMNjmh5ViND0-i7LfaIt610EW6ZXFDXFan692Y&usqp=CAU" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" />
                            </span>
                        </div>
                        <form className="form-card">
                            <div>
                                <label className="same-pinch">Name on card *</label>
                                <input type="name" placeholder="" />
                            </div>
                            <div>
                                <label className="same-pinch">Credit card Number *</label>
                                <input type="number" placeholder="1111 2222 3333 4444" />
                            </div>
                            <div className="expire-cvv">
                                <div >
                                    <label className="same-pinch">Expiration date*</label>
                                    <input type="text" placeholder="MM/YY" className="ex-cvv" />
                                </div>
                                <div>
                                    <span>
                                        <label className="same-pinch">CVV / CVV *</label>
                                        <input type="number" placeholder="123" className="ex-cvv"/>
                                    </span>
                                    <u className="same-pinch">What is this?</u>
                                </div>
                            </div>
                            <span className="same-pinch"> * required fields</span>
                        </form>
                    </div>

                </div>
                <div className="pay-pal">
                    <span>
                        <input type="radio" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" width="80px" />
                        <br />
                        <label className="same-pinch">Immediate Shipping</label>
                    </span>
                </div>
                <div className="back-proceed">
                    <Link to="/address">
                        <button className="back-del-btn">BACK TO DELIVERY</button>
                    </Link>
                    <Link to="/paymentSuccessful">
                        <button className="checkout-div">PROCEED TO CHEKOUT</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}