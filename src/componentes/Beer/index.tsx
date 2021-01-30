import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IBeer } from '../../types';

const Beer = () => {
    const [showBeer, setShowBeer] = useState<boolean>(false);
    const [beer, setBeer] = useState<IBeer[]>([]);

    useEffect(() => {
        axios.get('https://api.punkapi.com/v2/beers/?per_page=8')
            .then(response => setBeer(response.data));
    }, [])

    function toggleBeer() {
        setShowBeer(!showBeer);
    }

    return (
        <div className="food-beer-list food-shop">

            <h1>Tipos de Cerveja</h1>
            <button onClick={toggleBeer}>Buscar Cerveja</button>
            <div className="beers-list">
                {showBeer && beer !== undefined && beer.map((item: IBeer) =>
                    <div className="beer" key={item.id}>
                        <img src={item.image_url} alt={item.name} />
                        <h3>{item.name}</h3>
                        <span>{item.tagline}</span>
                        <small>{item.description}</small>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Beer;