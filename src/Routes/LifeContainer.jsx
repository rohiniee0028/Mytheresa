import { Link } from "react-router-dom";
import "./styles/LifeProducts.css";
export const LifeContainer = ({
    key,
    id,
    image,
    name,
    desc,
    price,
    details,
    handlCart
})=>{
    return (
        <Link to={`/LifeProducts/${id}`} className="link-item-box">
        <div key={key} className="item-box" onClick={()=>handlCart(id)}>
          <img src={image}/>
          <p>{name}</p>
          <p>{desc}</p>
          <p>₹ {price}</p>
        </div>
        </Link>
    )
}