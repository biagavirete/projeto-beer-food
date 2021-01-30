import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ICategory, ICategoryItem, IFood, IFoodItem } from '../../types';

const Foods = () => {
    const [categoriesList, setCategoriesList] = useState<ICategory>();
    const [selectedCategory, setSelectedCategory] = useState<String>('');
    const [food, setFood] = useState<IFood>();
    const [providedFood, setProvidedFood] = useState<String>('');

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => setCategoriesList(response.data))
    }, []);

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
            .then(response => setFood(response.data))
    }, [selectedCategory]);

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${providedFood}`)
            .then(resposta => setFood(resposta.data))
    }, [providedFood]);

    return (
        <div className="food-beer-list food-shop">
            <h1>Meal Guide</h1>
            <p>
                Select a category ou type meal name:
        <input type="text" placeholder="Type meal name" onChange={(e) => setProvidedFood(e.target.value)} />
            </p>
            <ul>
                {categoriesList !== undefined && categoriesList.categories.map((item: ICategoryItem) => (
                    <li key={item.idCategory} onClick={() => setSelectedCategory(item.strCategory)}>{item.strCategory}</li>
                ))}
            </ul>

            <h2>Selected category: <strong>{selectedCategory}</strong></h2>

            <div className="food-container">
                {food?.meals !== undefined && food.meals !== null && food.meals.map((item: IFoodItem) => (
                    <div className="food-item">
                        <li key={item.idMeal}>
                            <img src={item.strMealThumb} alt={item.strMeal} />
                            <p>{item.strMeal}</p>
                        </li>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Foods;