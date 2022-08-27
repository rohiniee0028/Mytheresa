import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addToCartData, getLifeData } from "../api/api";
import "./styles/ProductDetails.css";
import { IoChevronForwardOutline, IoHeartOutline } from "react-icons/io5";

export const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  const [data, setData] = useState([]);

  useEffect(() => {
    getLifeData(params.LifeProducts_id)
      .then((res) => {
        console.log(res);
        setData(res);
      }).catch(err => {
        console.log(err);
      })
  }, [])

  const handleAddToCart = (data) => {
    addToCartData(data);
    alert("Product added to cart");
  }

  return (
    <div className="main-details-div">
      <p className="life-top-para">For a short time only: free shipping on all orders</p>
      <div className="top-navigator">LIFE  Designers / {data.name} / {data.description} <IoChevronForwardOutline/><IoChevronForwardOutline/> </div>
      <div className="details-box">
        <div>
          <img src={data.image} />
        </div>
        <div>
          <p className="name">{data.name}</p>
          <span className="desc">{data.description}</span>
          <p className="price">₹ {data.price}</p>
          <p className="vat">VAT exception. VAT not included.<br/>item no. P00724142</p>
          <button className="shopping-btn" onClick={()=>handleAddToCart(data)}>ADD TO SHOPPING BAG</button>
          <br />
          <br />
          <button className="wish-btn">ADD TO WISHLIST<IoHeartOutline style={{marginLeft:"20px"}} /></button>
          <p className="free-ship"><b>Free shipping</b> on all orders for a limited time only</p>
          <div className="style-details">
            style details
            <p>{data.details}</p>
          </div>
        </div>
      </div>
    </div>
  )
}