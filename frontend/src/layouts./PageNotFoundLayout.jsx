import { Outlet, useLocation } from "react-router-dom";

export default function PageNotFoundLayout(){
    return (
        <div className="flex h-[100vh] justify-between items-center flex-col">
            <div className="px-6 w-96 md:w-4/5 mt-4 md:mt-12"> 
                <Outlet />
            </div>
            <div className="flex-1"></div>
        </div>
    );
}