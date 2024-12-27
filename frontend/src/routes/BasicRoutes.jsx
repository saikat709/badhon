import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Home from '../pages/Home';
import About from '../pages/About';
import BasicLayout from "../layouts./BasicLayout";
import PageNotFound from "../pages/PageNotFound";
import PageNotFoundLayout from "../layouts./PageNotFoundLayout";
import Login from "../pages/auth/Login";

export default function BasicRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <BasicLayout/> } >
                    <Route index element={ <Home/> } />
                    <Route path='/about' element={<About />} />
                </Route>

                <Route path="/auth" element={<BasicLayout/>}>
                    <Route path="/auth/login" element={<Login/>}/>
                    <Route path="/auth/register?:isAdmin" element={<PageNotFound/>}></Route>
                </Route>

                <Route path="/admin" element={<PageNotFoundLayout/>}>
                    <Route index element={ <hr /> } />
                    <Route path="*" element={ <PageNotFound /> } />
                </Route>

                <Route path="/" element={<PageNotFoundLayout/>}>
                    <Route index element={ <PageNotFound /> } />
                    <Route path="/404" element={ <PageNotFound /> } />
                    <Route path="*" element={ <PageNotFound /> } />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}