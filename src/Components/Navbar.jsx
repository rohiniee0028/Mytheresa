import { Link } from "react-router-dom"
import "./Components-styles/Navbar.css";
import { IoHeartOutline } from "react-icons/io5";

export const Navbar = () => {
    return (
        <div className="Navbar-container">
            <div className="link-container">
                <div className="all-nav-links">
                    <div>
                        <Link to="/women">Women</Link>
                    </div>
                    <div>
                        <Link to="/men">Men</Link>
                    </div>
                    <div>
                        <Link to="/kids">Kids</Link>
                    </div>
                    <div>
                        <Link to="/life">Life</Link>
                    </div>
                </div>
                <div className="right-nav">
                    <div>
                        <Link to="sign-up">Sign up for Newsletter</Link>
                    </div>
                    <div className="my-account">
                        <Link to="/login">My account</Link>
                    </div>
                    <div>
                        <Link to="my-wishlist">My wishlist<IoHeartOutline/></Link>
                    </div>
                    <select>
                        <option value="">Select country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="London">London</option>
                        <option value="Canada">Canada</option>
                        <option value="Singapore">Singapore</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="roh-shift-right">
                    <div>
                        <img
                            src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220817T161813"
                            alt="MyTheresa icon"
                            width="295px"
                            height="38px" />
                    </div>
                    <Link to="/cart">
                    <div className="shop-bag">
                        <span className="shopping-bag">Shopping Bag</span>
                        <span className="count icon icon-cart"></span>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="below-mytheresa">
                <div className="below-drop-down">
                    <Link to="/newarrivals">
                        <div>NEW ARRIVALS</div>
                    </Link>
                    <Link to="/designers">
                        <div>DESIGNERS</div>
                    </Link>
                    <Link to="/home">
                        <div>HOME</div>
                    </Link>
                    <Link to="onthego">
                        <div>ON THE GO</div>
                    </Link>
                    <Link to="pets">
                        <div>PETS</div>
                    </Link>
                    <Link to="stories">
                        <div>STORIES</div>
                    </Link>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search for..." className="input-search" />
                    <label htmlFor="search">
                        <span className="icon icon-search">Search</span>
                    </label>
                </div>
            </div>
        </div>
    )
}