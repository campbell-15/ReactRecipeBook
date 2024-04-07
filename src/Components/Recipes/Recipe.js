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
            <ul className="cards">
                <li className="card">
                    <img src="https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg" className="card__image" alt="" />
                    <div className="card__overlay">
                        <div className="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        <img className="card__thumb" src="https://static.vecteezy.com/system/resources/previews/002/233/113/non_2x/restaurant-service-abstract-logo-template-symbol-icon-free-vector.jpg" alt="" />
                        <div className="card__header-text">
                            <h3 className="card__title">Juicy Burger</h3>
                            <span className="card__tagline">Juicest Cheese Burger you will ever taste</span>            
                            <button type="text" className="ingredients">Ingredients</button>
                        </div>
                        </div>
                        <p className="card__description">Savor the classic harmony of juicy beef, melted cheese, and fresh fixings in every bite of our signature cheeseburger.</p>
                    </div>
                </li>
                <li className="card">
                    <img src="https://recipes.net/wp-content/uploads/2023/05/papa-johns-pepperoni-pizza-recipe_73a08afc185dba371d10414961f2cb0c.jpeg" className="card__image_2" alt="" />
                    <div className="card__overlay">
                        <div className="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        <img className="card__thumb" src="https://static.vecteezy.com/system/resources/previews/002/233/113/non_2x/restaurant-service-abstract-logo-template-symbol-icon-free-vector.jpg" alt="" />
                        <div className="card__header-text">
                            <h3 className="card__title">Pepperoni Pizza</h3>
                            <span className="card__tagline">Exactly what you need on a Thursday night</span>            
                            <button type="text" className="ingredients">Ingredients</button>
                        </div>
                        </div>
                        <p className="card__description">Deliciously savory pepperoni pizza with a perfect blend of gooey cheese and zesty tomato sauce, topped with generous slices of spicy pepperoni.</p>
                    </div>
                </li>
                <li className="card">
                    <img src="https://www.halfbakedharvest.com/wp-content/uploads/2018/08/Better-Together-Chocolate-Vanilla-Birthday-Cake-1.jpg" className="card__image" alt="" />
                    <div className="card__overlay">
                        <div className="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        <img className="card__thumb" src="https://static.vecteezy.com/system/resources/previews/002/233/113/non_2x/restaurant-service-abstract-logo-template-symbol-icon-free-vector.jpg" alt="" />
                        <div className="card__header-text">
                            <h3 className="card__title">Chocolate Cake</h3>
                            <span className="card__tagline">Fancy a sweet treat?</span>            
                            <button type="text" className="ingredients">Ingredients</button>
                        </div>
                        </div>
                        <p className="card__description">Indulge in decadence with our rich and moist chocolate cake, a timeless treat for any occasion.</p>
                    </div>
                </li>
                <li className="card">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/2/2018/10/Pan-Fried-T-Bone-Steak-284bfa5.jpg" className="card__image" alt="" />
                    <div className="card__overlay">
                        <div className="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                        <img className="card__thumb" src="https://static.vecteezy.com/system/resources/previews/002/233/113/non_2x/restaurant-service-abstract-logo-template-symbol-icon-free-vector.jpg" alt="" />
                        <div className="card__header-text">
                            <h3 className="card__title">T-Bone Steak</h3>
                            <span className="card__tagline">Yummiest T-Bone Steak in South Africa</span>
                            <button type="text" className="ingredients">Ingredients</button>
                        </div>          
                        </div>
                        <p className="card__description">T-Bone steak: Juicy, flavorful beef cut showcasing both tenderloin and strip loin.</p>
                    </div>
                </li>    
                </ul>
        </div>

    );
}

export default Recipes;