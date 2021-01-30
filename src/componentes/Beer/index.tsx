import React, { useEffect, useState } from 'react';

const Beer = () => {

    return (
        <div className="food-beer-list food-shop">

            <h1>Tipos de Cerveja</h1>
            <button>Buscar Cerveja</button>
            <div className="beers-list">
                <div className="beer">
                    <img src="https://images.punkapi.com/v2/2.png" alt="Buzz" />
                    <h3>Nome da cerveja</h3>
                    <span>Minha tagline maneirona</span>
                    <small>Descriçao A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.</small>
                </div>
                <div className="beer">
                    <img src="https://images.punkapi.com/v2/2.png" alt="Buzz" />
                    <h3>Nome da cerveja</h3>
                    <span>Minha tagline maneirona</span>
                    <small>Descriçao A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.</small>
                </div>
                <div className="beer">
                    <img src="https://images.punkapi.com/v2/2.png" alt="Buzz" />
                    <h3>Nome da cerveja</h3>
                    <span>Minha tagline maneirona</span>
                    <small>Descriçao A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.</small>
                </div>
                <div className="beer">
                    <img src="https://images.punkapi.com/v2/2.png" alt="Buzz" />
                    <h3>Nome da cerveja</h3>
                    <span>Minha tagline maneirona</span>
                    <small>Descriçao A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.</small>
                </div>
            </div>
        </div>
    );
}

export default Beer;