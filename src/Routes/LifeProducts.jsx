
import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getProd } from "../api/api";
import { IoChevronForwardOutline, } from "react-icons/io5";
import { FetchErrorData, FetchSuccessData } from "../Reducer/Action";
import { reducer } from "../Reducer/reducer";
import { LifeContainer } from "./LifeContainer";
import { FaSearch } from "react-icons/fa";
import "./styles/LifeProducts.css";
import Pagination from "../Components/Pagination";

const initState = {
    loading: true,
    error: false,
    data: [],
}

export const LifeProducts = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const [sortPrice, setSortPrice] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {
        handleProd();
    }, [sortPrice,page])

    const handleProd = () => {
        getProd({sortPrice, page})
            .then(res => {
                // console.log(res);
                dispatch(FetchSuccessData(res));
            }).catch(err => {
                console.log(err);
                dispatch(FetchErrorData());
            })
    }
    // const handleSort=(e)=>{
    //     setSortPrice(e.target.value);
    //     if(sortPrice==="asc"){
    //         state.data.sort((a,b)=>{
    //             return Number(a.price)-Number(b.price) 
    //         })
    //     }
    //     else{
    //         state.data.sort((a,b)=>{
    //             return Number(b.price)-Number(a.price) 
    //         })
    //     }
    //     handleProd();
    // }

    return (
        <div style={{ borderTop: "1px solid #dfdfdf" }}>
            <div className="products-section">
                <p className="life-top-para">For a short time only: free shipping on all orders</p>
                <div className="products-top-div">
                    <div>
                        <img src="https://img.mytheresa.com/media/static/raw/cms/l/Designer_Bios/-LIFE-/La-DoubleJ/BioBox_Logo_LaDoubleJ_2x_20220506000922.jpg?imwidth=600&imdensity=1" />
                        <p>Founded by J.J. Martin in 2015, La DoubleJ is a multi-tasking Milanese brand that edits the very best of Italy. From content and editorial projects, to pop-up shops and product design, the larger-than-life label builds on Martin's experiences as a journalist and vintage collector. The result is an unabashed celebration of print, color, and pattern. Debuting in 2017, the brand's ceramic plate collection, which includes dinner, soup, and dessert plates, was produced with the iconic Bitossi Home.</p>
                    </div>
                    <div>
                        <img src="https://img.mytheresa.com/media/static/raw/cms/l/Designer_Bios/-LIFE-/La-DoubleJ/BioBox_LaDoubleJ_2x_20220506000923.jpg?imwidth=1180&imdensity=1" />
                    </div>
                </div>
                <div className="toolbar-top">
                    <div className="flexing">LIFE/Designers/La DoubleJ<IoChevronForwardOutline/><IoChevronForwardOutline/></div>
                    <div className="sorting-div">
                        <div>{state.data.length} Products</div>
                        <select value={sortPrice} onChange={(e)=>setSortPrice(e.target.value)}>
                            <option value="">Sort by</option>
                            <option value="ASC">Price low-to-high</option>
                            <option value="DESC">Price high-to-low</option>
                        </select>
                        <Pagination total={2} current={page} onChange={(value)=>setPage(value)} />
                    </div>
                </div>
                <div className="main-item">
                    <div className="filters">
                        <div className="filters-div">
                            <p>LA DOUBLEJ</p>
                            <p>Show All</p>
                            <p>Home Decor</p>
                            <p>Table Top</p>
                            <p>Home Textiles</p>
                        </div>
                        <div className="colours-search">
                            <div className="search-div">
                                <p>Designer</p>
                                <div className="fasearch">
                                    <input type="search"/>
                                    <FaSearch className="font-search"/>
                                </div>
                                <div className="checkbox-div">
                                    <input type="checkbox"/>
                                    LA DOUBLEJ
                                </div>
                            </div>
                            <div className="select-option">
                                <select>
                                    <option value="">Colours</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Black">Black</option>
                                    <option value="Gold">Gold</option>
                                    <option value="Green">Green</option>
                                    <option value="Multicoloured">Multicoloured</option>
                                    <option value="Orange">Orange</option>
                                    <option value="Pink">Pink</option>
                                    <option value="Purple">Purple</option>
                                    <option value="Red">Red</option>
                                    <option value="White">White</option>
                                    <option value="Yellow">Yellow</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        {
                            state.loading ? "...Loading" : state.data.map((item) => (
                                <LifeContainer
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    desc={item.description}
                                    price={item.price}
                                    details={item.details}
                                    />
                            ))

                        }
                        {state.error ? state.error : null}
                    </div>
                </div>
            </div>
        </div>
    )
}