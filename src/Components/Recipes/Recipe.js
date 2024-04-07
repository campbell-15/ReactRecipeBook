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
                    <img src="https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg" alt=""/>
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
                <div className="recipe">
                    <img src="https://recipes.net/wp-content/uploads/2023/05/papa-johns-pepperoni-pizza-recipe_73a08afc185dba371d10414961f2cb0c.jpeg" alt=""/>
                    <div className="recipe-content">
                        <h3>Pepperoni Pizza</h3>
                        <small>800cal</small>
                        <div className="bio">
                            <p>Juiciest Burger Ever.</p>
                        </div>
                        <div className="ingredients">
                        <button type="text">Ingredients</button>
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://www.halfbakedharvest.com/wp-content/uploads/2018/08/Better-Together-Chocolate-Vanilla-Birthday-Cake-1.jpg" alt=""/>
                    <div className="recipe-content">
                        <h3>Chocolate Cake</h3>
                        <small>800cal</small>
                        <div className="bio">
                            <p>Juiciest Burger Ever.</p>
                        </div>
                        <div className="ingredients">
                        <button type="text">Ingredients</button>
                        </div>
                    </div>
                </div>
                <div className="recipe">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7JL2PjLIezLEwDQRqK8cVWon6YoNl77WZPcqgv2M_RA&s" alt=""/>
                    <div className="recipe-content">
                        <h3>T-Bone Steak</h3>
                        <small>800cal</small>
                        <div className="info">
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
        </div>

    );
}

export default Recipes;