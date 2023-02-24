import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate();

    useEffect(()=>{
       setTimeout(()=>{
         navigate("/life")
       },0)
    },[])

    return (
        <div></div>
    )
}