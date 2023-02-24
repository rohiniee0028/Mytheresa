export const getProd = async ({page})=>{
    return await fetch(`https://blogapp-8by4.onrender.com/Life?_page=${page}`)
    .then(res=>res.json());
}

// details page

export const getLifeData=(params)=>{
    return fetch(`https://blogapp-8by4.onrender.com/Life/${params}`)
    .then((res) => res.json());
}

export const addToCartData=(data)=>{
    console.log(data);
    return fetch(`https://blogapp-8by4.onrender.com/CartItem`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data)
        
    })
}

export const deleteCartData=(id)=>{
    return fetch(`https://blogapp-8by4.onrender.com/CartItem/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
        }
    })
}


export const  getCartData=()=>{
    return fetch(`https://blogapp-8by4.onrender.com/CartItem`)
    .then(res=>res.json());
}

// export const updateCartData = ({id, newCartData}) => {
//     return fetch(`https://blogapp-8by4.onrender.com/CartItem/${id}`, {
//         method: "PATCH",
//         headers: {
//             'Content-Type': "application/json"
//         },
//         body: JSON.stringify( newCartData )
//     })
//         .then(res => res.json())
// }