import { Link } from "react-router-dom";

export default function PageNotFound(){
    return (
        <div className="flex flex-col justify-center items-center w-full h-[100h] my-20">
            <h1 className="font-semibold text-4xl text-red-600"> 404 </h1>
            <h1 className="font-semibold text-2xl text-red-300"> Requested page not found.</h1>
            <Link to={"/"} replace className="btn btn-primary my-10 px-10">Go to Home Page</Link>
        </div>
    );
}       