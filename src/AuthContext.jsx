import { createContext, useState } from "react";


export const isAuth = createContext({status:"", token:""});

export const Auth = ({ children }) => {
    const [statusValue, setStatusValue] = useState("Login");
    
    const handleChange = () => {
        setStatusValue(statusValue === "Login" ? "Logout" : "Login");
    }
    
    return (
        <>
            <isAuth.Provider  value={{status: statusValue, token:"12434dfdffda87f", handleChange}}>
                {children}
            </isAuth.Provider>
        </>
    );
};