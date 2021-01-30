import React, { useEffect, useState } from 'react';

const Foods = () => {
    return (
        <div className="food-beer-list food-shop">
            <h1>Tipos de pratos</h1>
            <p>
                Selecione uma categoria ou digite a comida (em inglês):
        <input type="text" placeholder="Digite a comida..." />
            </p>

            <ul>
                <li>Categoria 1</li>
                <li>Categoria 2</li>
                <li>Categoria 3</li>
                <li>Categoria 4</li>
                <li>Categoria 5</li>
                <li>Categoria 6</li>
            </ul>
            <h2>Tipo selecionado: <strong>Batata (mudar isso hein)</strong></h2>

            <div className="food-container">
                <div className="food-item">
                    <img src="https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg" />
                    <p>Nome da comidinha</p>
                </div>
                <div className="food-item">
                    <img src="https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg" />
                    <p>Nome da comidinha</p>
                </div>
                <div className="food-item">
                    <img src="https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg" />
                    <p>Nome da comidinha</p>
                </div>
                <div className="food-item">
                    <img src="https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg" />
                    <p>Nome da comidinha</p>
                </div>
                <div className="food-item">
                    <img src="https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg" />
                    <p>Nome da comidinha</p>
                </div>
            </div>
        </div>
    );
}

export default Foods;