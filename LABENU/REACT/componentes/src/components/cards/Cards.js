import React from "react";

//import de imagens
import imagem from '../assets/card-one.jpg'

//import de outros componentes

//import css
import './Cards.scss';


const Cards = () =>{
    return (
        <>
            <div className="card">
                    <div className="cards-img">
                        <img src={imagem} alt="" />
                    </div>
                    <h3>
                        Model number one
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
            </div>
        </>
    )
}

export default Cards;