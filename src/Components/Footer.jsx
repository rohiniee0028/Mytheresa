import { IoCheckmarkSharp, IoHeartOutline, IoLogoWechat, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter, IoLogoPinterest, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import { FaWeibo } from "react-icons/fa";
import { IoMdTabletPortrait } from "react-icons/io";
import "./Components-styles/Footer.css";
export const Footer = () => {
    return (
        <div>
            <div className="footer-apps">
                <p>SHOP WHENEVER, WHEREVER WITH THE APP</p>
                <div className="apps-img">
                    <img src="https://cdn.imgbin.com/13/20/2/imgbin-iphone-app-store-get-started-now-button-app-store-logo-2MkQHWeYiAggi29wkWDTrQyxw.jpg" alt="app-store" />
                    <img src="https://w7.pngwing.com/pngs/91/37/png-transparent-google-play-android-app-store-android-text-logo-microsoft-store.png" alt="google-app" />
                </div>
            </div>
            <div className="footer-links">
                <div className="footer-service">
                    <p>SERVICE & SECURITY</p>
                    <div>
                        <a><IoCheckmarkSharp /> Faster delivery</a>
                        <span>  Delivery within 2 business days</span>
                    </div>
                    <div>
                        <a><IoCheckmarkSharp /> Free returns with in 30 days</a>
                        <span>Convenient return service</span>
                    </div>
                    <div>
                        <a><IoCheckmarkSharp /> Secure payment and data protection</a>
                        <span>SSL encryption for secure <br /> transactions and personal data</span>
                    </div>
                </div>
                <div className="footer-about">
                    <p>MYTHERESA</p>
                    <span>About us</span>
                    <span>Trust and services</span>
                    <span>Sustainability</span>
                    <span>Press</span>
                    <span>Careers</span>
                    <span>Investor Relations</span>
                    <span>Affiliates</span>
                    <span>Tax-free shopping</span>
                </div>
                <div className="footer-cutomer-care">
                    <p>CUSTOMER CARE</p>
                    <span>Contact us</span>
                    <span>Shipping information</span>
                    <span>Secure payment</span>
                    <span>Exchanges</span>
                    <span>Returns</span>
                    <span>After sale service</span>
                    <span>Gift card</span>
                </div>
                <div className="footer-middle">
                    <div>
                        <p>GET TRENDS UPDATES, STYLE TIPS AND MORE</p>
                        <span className="input-foot">
                            <input type="email" placeholder="Your email address here..." />
                            <button>SIGN UP</button>
                        </span>
                    </div>
                    <p>Wish list <IoHeartOutline style={{ color: "#757575" }} /></p>
                    <p style={{ color: "#757575" }}>Receive personal notifications</p>
                    <div>
                        <span>Follow us on</span>
                        <br />
                        <span className="icons-social"><IoLogoLinkedin /><IoLogoFacebook /><IoLogoTwitter /><IoLogoPinterest /><IoLogoInstagram /><IoLogoYoutube /><IoMdTabletPortrait /><IoLogoWechat /><FaWeibo /></span>
                    </div>
                </div>
            </div>
            <div className="imprint">
                <div>
                    <div className="payment">
                        <p>payment methods:</p>
                        <span className="visa-icon">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png"/>
                            <img src="https://www.svgrepo.com/show/303248/mastercard-2-logo.svg"/>
                            <img src="https://seeklogo.com/images/D/Diners_Club-logo-6B1B8635A2-seeklogo.com.png"/>
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968341.png"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UnionPay_logo.svg/1200px-UnionPay_logo.svg.png"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHHKVCUKlVhz0iWrJJU6OWheGYss3sjMNjmh5ViND0-i7LfaIt610EW6ZXFDXFan692Y&usqp=CAU"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"/>

                        </span>
                    </div>
                    <div className="deliver">
                        <p>delivered by:</p>
                        <img src="https://cdn.signavio.com/uploads/2019/03/DHL_logo-web.png"/>
                    </div>
                </div>
                <br/>
                <div>
                     <p>copyright © 2006-2022 mytheresa.com</p>
                     <div className="terms">
                       <span>terms of use</span>
                       <span>privacy policy</span>
                       <span>imprint</span>
                     </div>
                </div>
            </div>
        </div>
    )
}