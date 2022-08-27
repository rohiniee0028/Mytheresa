export const getProd = async ({sortPrice, page})=>{
    return await fetch(`http://localhost:3005/Life?_sort=price&_order=${sortPrice}&_page=${page}`)
    .then(res=>res.json());
}

// details page

export const getLifeData=(params)=>{
    return fetch(`http://localhost:3005/Life/${params}`)
    .then((res) => res.json());
}

export const addToCartData=(data)=>{
    console.log(data);
    return fetch(`http://localhost:3005/CartItem`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data)
        
    })
}

export const deleteCartData=(id)=>{
    return fetch(`http://localhost:3005/CartItem/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
        }
    })
}


export const  getCartData=()=>{
    return fetch(`http://localhost:3005/CartItem`)
    .then(res=>res.json());
}

// export const updateCartData = ({id, newCartData}) => {
//     return fetch(`http://localhost:3005/CartItem/${id}`, {
//         method: "PATCH",
//         headers: {
//             'Content-Type': "application/json"
//         },
//         body: JSON.stringify( newCartData )
//     })
//         .then(res => res.json())
// }