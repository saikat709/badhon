import { useState } from "react";
import useAuth from "../../context/hooks/useAuth";

export default function Login(){

    const { isLoggedIn, setIsLogedIn } = useAuth();
    const [ number, setNumber ]     = useState("");
    const [ password, setPassword ] = useState("");

    return (
        <div className="flex justify-center items-center h-96">
            <div className="flex justify-center items-center text-white p-10 bg-slate-500 rounded-lg">
                <form className="form-control flex flex-col gap-2"
                    onSubmit={ e=>{
                        e.preventDefault();
                        setIsLogedIn(true);
                    }}
                    >
                    <h1 className="text-nowrap text-lg font-bold mb-2">Login To Badhon</h1>
                    <input type="text" 
                        className="input form-control border border-gray-400 hover:border-white"  
                        required 
                        placeholder="Enter number"
                        value={number}
                        onChange={ e => { setNumber(e.target.value); }}
                        />
                    <input type="password" 
                        className="input form-control border border-gray-400 hover:border-white"  
                        required 
                        placeholder="Enter password"
                        value={password}
                        onChange={ e => { setPassword(e.target.value); }}
                        />
                    <input type="submit" 
                        className="form-control btn btn-primary btn-active mt-2" 
                        value={"Login"}
                        disabled={ !password || !number }
                        />
                </form>
            </div>
        </div>
    );
}