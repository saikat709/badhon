import { useNavigate } from "react-router-dom";
import useAuth from "../context/hooks/useAuth";
import Loader from "../components/Loader";

export default function Home(){
    const { isLoggedIn } = useAuth();
    return (
        <div className="flex flex-col">
            <h1> Home Yaaaaaaaaaay { isLoggedIn ? "YES" : "NO" } </h1>
            <Loader/>
        </div>
    );
}