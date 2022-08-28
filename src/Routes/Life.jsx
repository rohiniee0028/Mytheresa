import { Link } from "react-router-dom";
import "./styles/Life.css";
export const Life = () => {
    return (
        <div style={{ borderTop: "1px solid lightgrey" }}>
            <div className="life-content">
                <h3>LIFE</h3>
                <p className="life-top-para">For a short time only: free shipping on all orders</p>
                <div className="life-main-container">
                    <div className="top-img">
                        <Link to="/LifeProducts">
                            <img src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW22/BIG_EN/Big_Week3_LIFE_desktop_1_2x_20220530121415.jpg?imwidth=1180&imdensity=1" alt="img-1" />
                        </Link>
                    </div>
                    <div className="divided-div">
                        <div className="div-1">
                            <div>
                                <span className="h4-tag">WHERE SELF-CARE STARTS</span>
                                <p className="h1-tag">Make your bathroom a sanctuary</p>
                            </div>
                            <Link to="#">
                                <img src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW34/NEW_BATH/CW34_ActboxTall_2x_20220823145711.jpg?imwidth=600&imdensity=1" alt="img-2" />
                                <button className="shop-btn">SHOP NOW</button>
                            </Link>
                        </div>
                        <div className="div-2">
                            <div>
                                <div>
                                    <p className="h4-tag">PRINTS, PATTERNS, PANACHE</p>
                                    <p className="h1-tag">All of this, and more, from La DoubleJ</p>
                                </div>
                                <Link to="/LifeProducts">
                                    <img src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW34/CW34_ActboxSmall_2x__20220819182631.jpg?imwidth=600&imdensity=1" alt="img-3" />
                                    <button className="shop-btn">SHOP NOW</button>
                                </Link>
                            </div>
                            <div>
                                <div>
                                    <p className="h4-tag">TAKE UP RESIDENCE</p>
                                    <p className="h1-tag">Vitra deserves a place in your home</p>
                                </div>
                                <img src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW34/CW34_ActboxSmall_2x_2_20220819182632.jpg?imwidth=600&imdensity=1" alt="img-4" />
                                <button className="shop-btn">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="floor-plan">
                        <p className="h4-tag">NEW FLOOR PLAN</p>
                        <p className="h1-tag">Decorate from the ground up</p>
                        <div className="grid-view">
                            <span>
                                <img src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW31/CW32_Finest_edit_1_2x_20220805164309.jpg" alt="img-5" />
                                <p>Vitra</p>
                            </span>
                            <span>
                                <img src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW31/CW32_Finest_edit_2_2x_20220805164310.jpg" alt="img-6" />
                                <p>Missoni</p>
                            </span>
                            <span>
                                <img src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW31/CW32_Finest_edit_3_2x_20220805164309.jpg" alt="img-7" />
                                <p>Reflections Copenhagen</p>
                            </span>
                            <span>
                                <img src="https://img.mytheresa.com/media/static/raw/cms/l/Life_HP_2022_CW31/CW32_Finest_edit_4_2x_20220805164310.jpg" alt="img-8" />
                                <p>La DoubleJ</p>
                            </span>
                        </div>
                        <button className="shop-btn">SHOP NOW </button>
                    </div>
                    <div>
                        <div className="footer-editorial">
                            <p>MYTHERESA LIFE – LUXURY FURNITURE & HOME DÉCOR</p>
                            <p>Mytheresa Life is the most trusted online source for luxury lifestyle, design and home products. We've curated the finest selection of travel accessories, home décor, luxury furniture and lighting, and more.</p>
                            <div className="luxury-service">
                                <div className="luxury">
                                    <p>A LUXURY SHOPPING EXPERIENCE</p>
                                    <ul>
                                        <li>The finest edit of international design brands</li>
                                        <li>Well-curated selection of items for a boutique-like shopping experience</li>
                                        <li>Exclusive designer collaborations and capsule collections that you won’t find anywhere else</li>
                                    </ul>
                                </div>
                                <div className="service">
                                    <p>SERVICE AND QUALITY</p>
                                    <ul>
                                        <li>Authentic products guaranteed</li>
                                        <li>Fast and reliable delivery worldwide</li>
                                        <li>Free returns and exchanges within 30 days</li>
                                        <li>Exceptional customer service available 24 hours a day, 7 days a week in 13 different languages</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="bottom-p">We put the "style" in "lifestyle." Furnish your most important spaces with Vitra's Panton chairs, available in a range of colors, as well as our shelves, coffee tables, and more. Decorate surfaces with designer candles from Cire Trudon, vases from Cappellini, and coffee table books from Assouline. </p>
                            <p className="bottom-p">Hosting is an art form, and we have everything you need to master it. Create your tablescape with luxury dinnerware sets from Ginori 1735. After the meal, serve drinks with designer glassware from Tom Dixon.</p>
                            <p className="bottom-p">Shop with us and discover why Mytheresa is your final destination for online shopping for women.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}