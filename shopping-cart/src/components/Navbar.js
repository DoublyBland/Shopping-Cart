import React from "react";
import {Link} from "react-router-dom"
import shopCart from "../shopping-cart.png"

export default function Navbar(props) {

    const navStyle = {
        color: 'black',
        textDecoration: 'none',
    }


    return(
        <div className="navbar-container">
            <Link style={navStyle} to="home"><h1>Exotic Pets</h1></Link>
            <div className="navbar-right">
                <Link style={navStyle} to="shop"><h3>Shop</h3></Link>
                <Link style={navStyle} to="cart"><h3>Cart</h3></Link>
                <img src={shopCart} alt="shopping-cart"></img>
                <h3>{props.count}</h3>
            </div>
        </div>
    )
}