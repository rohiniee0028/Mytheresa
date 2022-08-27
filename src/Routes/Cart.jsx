import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCartData, getCartData, updateCartData } from "../api/api";
import { CartTable } from "./CartTable";
import "./styles/Cart.css";

export const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const [qty, setQty] = useState(1);

    const handleQty = (e)=>{
        e.preventDefault();
        console.log(qty);
       setQty(e.target.value); 
    //    const newCartData = cartData.map((item)=>{
    //        return item.price * qty;
    //    })
    //    setCartData([...newCartData]);
    //    updateCartData({id,cartData})
    //    .then(res=>{
    //     setCartData(res);
    //    })
    }

    useEffect(() => {
        handleCartData();
    }, [])

    const handleCartData = () => {
        getCartData()
            .then(res => {
                console.log(res);
                setCartData(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleRemove=(id)=>{
        deleteCartData(id)
        .then(res=>{
            handleCartData(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div style={{ borderTop: "1px solid #dfdfdf" }}>
            <p className="life-top-para">For a short time only: free shipping on all orders</p>
            <div className="cart-container">
                <div>
                    <p className="bag-p">YOUR SHOPPING BAG</p>
                </div>
                <div>
                    <Link to="/">
                      <button className="proceed-btn">PROCEED TO CHECKOUT</button>
                    </Link>
                </div>
                <div className="cart-tble-div">
                    {cartData.map((item)=>(
                        <CartTable 
                            key={item.id}
                            id={item.id}
                            image = {item.image}
                            name = {item.name}
                            desc = {item.description}
                            price = {item.price}
                            qty={qty}
                            handleQty={handleQty}
                            handleRemove={handleRemove}
                            />
                        // console.log(item)
                    ))}
                </div>
            </div>
        </div>
    )
}