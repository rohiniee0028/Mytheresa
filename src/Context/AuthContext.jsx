import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider=({children})=>{
    const [count, setCount] = useState(0);
    
    const handleCount = ()=>{
        setCount(prev=>prev+1);
    };
    return (
        <AuthContext.Provider value={{count, handleCount}}>
            {children}
        </AuthContext.Provider>
    )
}