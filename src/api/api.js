export const getProd = async ()=>{
    return await fetch("http://localhost:3005/Life")
    .then(res=>res.json());
}