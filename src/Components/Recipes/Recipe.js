import React from "react";
import './Recipe.css';

const Recipes = () => {
    return (
        // search bar
        <div className="recipes">
            <div className="inputs">
                <div className="logo">
                    <h2>REACT RECIPES</h2>
                    <small className="small-text">Find the recipes you love best</small>
                </div>
                <form>
                    <input type="text" />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="recipe-results">
                <div className="recipe">
                    <img src="https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg" alt="" width="100px" height="100px"/>
                    <div className="recipe-content">
                        <h3>Cheese Burger</h3>
                        <small>800cal</small>
                        <div className="bio">
                            <p>Juiciest Burger Ever.</p>
                        </div>
                        <div className="ingredients">
                        <button type="text">Ingredients</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Recipes;