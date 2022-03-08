import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

export default function App() {
    return(
        <BrowserRouter>
        <Navbar count={2}/>
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/home"  element={<Home/>} />
                <Route path="/shop" exact element={<Shop/>} />
                <Route path="/cart" exact element={<Cart/>} />
            </Routes>
        </BrowserRouter>
    )
}