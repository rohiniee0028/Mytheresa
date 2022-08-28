import { Link } from "react-router-dom"

export const Successful = ()=>{
    return (
        <div>
            <img src= "https://colombocme.org/wp-content/uploads/2019/03/Paymentsuccessful21.png"/>
            <div>
                <Link to="/life">
                  <button style={{backgroundColor:"black", color:"white", padding:"10px 20px", border:"none", cursor:"pointer"}}>Go back to Home page</button>
                </Link>
            </div>
        </div>
    )
}