import { Link } from "react-router-dom";
import "./styles/LifeProducts.css";
export const LifeContainer = ({
    key,
    id,
    image,
    name,
    desc,
    price,
    details
})=>{
    return (
        <Link to="/details" className="link-item-box">
        <div key={key} className="item-box">
          <img src={image}/>
          <p>{name}</p>
          <p>{desc}</p>
          <p>₹ {price}</p>
        </div>
        </Link>
    )
}