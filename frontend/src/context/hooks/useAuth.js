import { createContext, useContext } from "react";
import useProvideAuth from "../providers/useProvideAuth";

const useAuthContext = createContext("");

export function AuthPovider({children}){
    const authProvider = useProvideAuth();
    return <useAuthContext.Provider value={authProvider} > { children } </useAuthContext.Provider>;
}

const useAuth = ()=> {
    return useContext(useAuthContext);
}

export default useAuth;