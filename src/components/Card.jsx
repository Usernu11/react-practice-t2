import React, { useState } from "react";
import '../styles/Card.css'

function Card( { name, price, onAddToCart }) {
    return (
        <div className="CardWrapper">
            <img className="CardImg" src='/logo192.png'></img>

            <h3>{name}</h3>

            <p>Price: {price} yot.</p>

            <button className="CardBtn" onClick={onAddToCart}>Add to Cart</button>
        </div>
    )
}

export default Card