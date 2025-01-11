import React from "react";
import '../styles/Header.css'

function Header ({cartCount}) {
    return (
        <div className="HeaderWrapper">
            <img src="/logo192.png" alt="logo" className="HeaderLogo" />

            <nav className="HeaderNav">
                <p>Lorem, ipsum dolor.</p>
            </nav>

            <div className="HeaderCart">🛒{cartCount !== '' ? cartCount : ''}</div>
        </div>
    )
}

export default Header