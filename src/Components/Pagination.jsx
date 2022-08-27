import {IoChevronBackOutline, IoChevronForwardOutline, } from "react-icons/io5";
function Pagination({
    current,
    onChange,
    total
}){
const prev = <IoChevronBackOutline disabled={current===1} onClick={()=>onChange(current-1)}  style={{cursor:"pointer"}}/>
const next = <IoChevronForwardOutline disabled={current===total} onClick={()=>onChange(current+1)} style={{cursor:"pointer"}}/>
const pages = new Array(total).fill(0).map((a,i)=>
   <button style={{backgroundColor:"transparent", border:"none", cursor:"pointer"}} onClick={()=>onChange(i+1)} disabled={current===(i+1)}>{i+1}</button>
   )
return <div style={{display:"flex", gap:"20px"}}>
       {prev}
       {pages}
       {next}
 </div>

}
export default Pagination;