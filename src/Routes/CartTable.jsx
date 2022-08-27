import { useState } from "react";
import { IoMdClose, IoMdHeartEmpty } from "react-icons/io";
import "./styles/Cart.css";

export const CartTable = ({
    id,
    image,
    name,
    desc,
    price,
    qty,
    handleQty,
    handleRemove
}) => {

    return (
        <table style={{ width: "100%"}}>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody >
                <tr key={id}>
                    <td>
                        {
                            <img src={image} style={{ width: "150px" }} />
                        }
                    </td>
                    <td>
                        {
                            <div>
                                <p className="name">{name}</p>
                                <p className="same-css">{desc}</p>
                                <div style={{display:"flex", justifyContent:"center"}}>
                                    <button className="same-css remove" onClick={()=>handleRemove(id)}><IoMdClose /> Remove</button>
                                    <button className="same-css wish">Add to wishlist <IoMdHeartEmpty /></button>
                                </div>
                            </div>
                        }
                    </td>
                    <td>₹ {price * qty}</td>
                    <td>
                        {
                            <input 
                            type="text" 
                            placeholder="" 
                            className="input-qty" 
                            value={qty} 
                            onChange={(e)=>handleQty(e)}/>
                        }
                    </td>
                    <td>₹ {price * qty}</td>
                </tr>
            </tbody>
        </table>
    )
}