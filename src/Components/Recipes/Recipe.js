import './Recipe.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';


const Recipe = () => {
    // setRecipes is not used yet
    const [recipes] = useState([
        {
            id: 1,
            title: "Juicy Burger",
            description: "Savor the classic harmony of juicy beef, melted cheese, and fresh fixings in every bite of our signature cheeseburger.",
            ingredients: ["Beef patty", "Cheese", "Lettuce", "Tomato", "Burger bun"],
            tagLine: ["Juicest Cheese Burger you will ever taste"],
            imageURL: "https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg"
        },
        {
            id: 2,
            title: "Pepperoni Pizza",
            description: "Deliciously savory pepperoni pizza with a perfect blend of gooey cheese and zesty tomato sauce, topped with generous slices of spicy pepperoni.",
            ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Pepperoni slices"],
            tagLine: ["Exactly what you need on a Thursday night"],
            imageURL: "https://recipes.net/wp-content/uploads/2023/05/papa-johns-pepperoni-pizza-recipe_73a08afc185dba371d10414961f2cb0c.jpeg"
        },
        {
            id: 3,
            title: "Chocolate Cake",
            description: "Indulge in decadence with our rich and moist chocolate cake, a timeless treat for any occasion.",
            ingredients: ["Flour", "Sugar", "Cocoa powder", "Eggs", "Butter", "Milk"],
            tagLine: ["Fancy a sweet treat?"],
            imageURL: "https://www.halfbakedharvest.com/wp-content/uploads/2018/08/Better-Together-Chocolate-Vanilla-Birthday-Cake-1.jpg"
        },
        {
            id: 4,
            title: "T-Bone Steak",
            description: "T-Bone steak: Juicy, flavorful beef cut showcasing both tenderloin and strip loin.",
            ingredients: ["T-Bone steak", "Salt", "Pepper", "Olive oil"],
            tagLine: ["Yummiest T-Bone Steak in South Africa"],
            imageURL: "https://images.immediate.co.uk/production/volatile/sites/2/2018/10/Pan-Fried-T-Bone-Steak-284bfa5.jpg"
        },
        {
            id: 5,
            title: "Lasagna",
            description: "Savory layers of pasta, rich tomato sauce, creamy cheese, and seasoned ground meat come together in this classic Italian comfort dish.",
            ingredients: ["lasagna noodles", "ground beef", "tomato sauce", "ricotta cheese", "mozzarella cheese"],
            tagLine: ["Quick and easy meal for the family"],
            imageURL: "https://assets.epicurious.com/photos/6508a14155b19af4200459c7/4:6/w_1932,h_2898,c_limit/Sausage-Cheese-Basil-Lasanga_RECIPE.jpg"
        },
        {
            id: 6,
            title: "Pepper & Steak Pie",
            description: "Indulge in a savory delight with our Pepper & Steak Pie – A harmonious blend of tender steak and flavorful peppers baked to perfection in a flaky crust.",
            ingredients: ["steak", "bell peppers", "onion", "flour", "beef broth", "puff pastry"],
            tagLine: ["Try something new! You won't regret it..."],
            imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuCXkwS6WKizF3JRIPyJ3wkKG_VTNj9tHeenCLp7hlg&s"
        }
    ]);

    const handleRecipeDetails = (recipeId) => {
        // Navigate to the RecipeDetails page for the specific recipe
        window.location.href = `/recipe/${recipeId}`;
    };

    const [searchQuery, setSearchQuery] = useState("");

    // Function to handle search query change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter recipes based on search query
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="recipes">
            <h1 className='title'>React Recipes</h1>
            <form className="form-container">
            <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search for a recipe..." />
            <button type="button">
                <FontAwesomeIcon icon={faSearch} />
            </button>
            </form>


            {/* <div className="inputs">
                <div className="logo">
                    <h2>REACT RECIPES</h2>
                    <small className="small-text">Find the recipes you love best</small>
                </div>
                <form>
                    <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search for a recipe..." />
                    <button type="submit">Search</button>
                </form>
            </div> */}
            <ul className="cards">
                {filteredRecipes.map(recipe => (
                    <li key={recipe.id} className="card">
                        <img src={recipe.imageURL} className="card__image" alt={recipe.title} />
                        <div className="card__overlay">
                            <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                <img className="card__thumb" src="https://static.vecteezy.com/system/resources/previews/002/233/113/non_2x/restaurant-service-abstract-logo-template-symbol-icon-free-vector.jpg" alt="" />
                                <div className="card__header-text">
                                    <h3 className="card__title">{recipe.title}</h3>
                                    <span className="card__tagline">{recipe.tagLine}</span>
                                    <button type="button" className="ingredients" onClick={() => handleRecipeDetails(recipe.id)}>Ingredients</button>
                                </div>
                            </div>
                            <p className="card__description">{recipe.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Recipe;

