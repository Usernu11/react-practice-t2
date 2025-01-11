import React, { useState } from "react";
import '../styles/Card.css'

function Card( { onAddToCart }) {
    return (
        <div className="CardWrapper">
            <img className="CardImg" src='/logo192.png'></img>

            <button className="CardBtn" onClick={onAddToCart}>Add to Cart</button>
        </div>
        // 170-180
    )
}

export default Card