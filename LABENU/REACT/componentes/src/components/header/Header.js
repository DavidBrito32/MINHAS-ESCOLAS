import React from "react";

import "./header.scss";

import logo from "../img/electroneum-etn-logo.png"

const Header = () => {

    const abreMenu = () => {
        const menu = document.querySelector('header nav ul');
        menu.classList.toggle('active');

    }

    return (
        <>
            <header>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <h1>Wellcome</h1>

                <nav>
                    <div onClick={abreMenu} className="burguer">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>  

                    <ul>
                        <li><a href="#!">Home</a></li>
                        <li><a href="#!">Contact</a></li>
                        <li><a href="#!">About</a></li>
                    </ul>
                </nav>
            </header>
        
        
        </>
    )
}

export default Header;