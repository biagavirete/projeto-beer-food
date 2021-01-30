import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ICategory, ICategoryItem } from '../../types';

const Foods = () => {
    const [categoriesList, setCategoriesList] = useState<ICategory>();
    const [selectedCategory, setSelectedCategory] = useState<any>();

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => setCategoriesList(response.data))
    }, [])
    console.log('categorias', categoriesList?.categories)

    return (
        <div className="food-beer-list food-shop">
            <h1>Food Guide</h1>
            <p>
                Select a category ou type food name:
        <input type="text" placeholder="Type food name" />
            </p>
            <ul>
                {categoriesList !== undefined && categoriesList.categories.map((item: ICategoryItem) => (
                    <li key={item.idCategory} onClick={() => setSelectedCategory(item.strCategory)}>{item.strCategory}</li>
                ))}
            </ul>

            <h2>Tipo selecionado: <strong>{selectedCategory}</strong></h2>

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