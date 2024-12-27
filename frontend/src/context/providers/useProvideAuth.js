import { useState } from "react";

export default function useProvideAuth(){
    const [ isLoggedIn, setIsLogedIn ] = useState();


    return { isLoggedIn, setIsLogedIn };
}