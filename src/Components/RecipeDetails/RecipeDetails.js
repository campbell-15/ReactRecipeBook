import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './RecipeDetails.css'

const RecipeDetails = () => {
    // Access the id parameter from the URL
    const { id } = useParams();

    // Sample recipe data
    const [recipes] = useState([
        {
            id: 1,
            title: "Juicy Burger",
            description: "Savor the classic harmony of juicy beef, melted cheese, and fresh fixings in every bite of our signature cheeseburger.",
            ingredients: ["Beef patty", "Cheese", "Lettuce", "Tomato", "Burger bun"],
            tagLine: ["Juicest Cheese Burger you will ever taste"],
            imageURL: "https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg",
            prep: ["cook burger patty for 10 minutes on 200 degrees, assemble ingredients in order"]
        },
        {
            id: 2,
            title: "Pepperoni Pizza",
            description: "Deliciously savory pepperoni pizza with a perfect blend of gooey cheese and zesty tomato sauce, topped with generous slices of spicy pepperoni.",
            ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Pepperoni slices"],
            tagLine: ["Exactly what you need on a Thursday night"],
            imageURL: "https://recipes.net/wp-content/uploads/2023/05/papa-johns-pepperoni-pizza-recipe_73a08afc185dba371d10414961f2cb0c.jpeg",
            prep: ["Preheat oven to 220°C. Spread pizza sauce over dough. Sprinkle cheese and add pepperoni. Bake for 12-15 minutes until crust is golden."]
        },
        {
            id: 3,
            title: "Chocolate Cake",
            description: "Indulge in decadence with our rich and moist chocolate cake, a timeless treat for any occasion.",
            ingredients: ["Flour", "Sugar", "Cocoa powder", "Eggs", "Butter", "Milk"],
            tagLine: ["Fancy a sweet treat?"],
            imageURL: "https://www.halfbakedharvest.com/wp-content/uploads/2018/08/Better-Together-Chocolate-Vanilla-Birthday-Cake-1.jpg",
            prep: ["Preheat oven to 180°C. Mix dry ingredients. Add wet ingredients and mix until smooth. Bake for 30-35 minutes until toothpick comes out clean."]
        },
        {
            id: 4,
            title: "T-Bone Steak",
            description: "T-Bone steak: Juicy, flavorful beef cut showcasing both tenderloin and strip loin.",
            ingredients: ["T-Bone steak", "Salt", "Pepper", "Olive oil"],
            tagLine: ["Yummiest T-Bone Steak in South Africa"],
            imageURL: "https://images.immediate.co.uk/production/volatile/sites/2/2018/10/Pan-Fried-T-Bone-Steak-284bfa5.jpg",
            prep: ["Season steak with salt and pepper. Grill for 4-5 minutes per side for medium-rare. Let it rest for 5 minutes before serving."]
        },
        {
            id: 5,
            title: "Lasagna",
            description: "Savory layers of pasta, rich tomato sauce, creamy cheese, and seasoned ground meat come together in this classic Italian comfort dish.",
            ingredients: ["lasagna noodles", "ground beef", "tomato sauce", "ricotta cheese", "mozzarella cheese"],
            tagLine: ["Quick and easy meal for the family"],
            imageURL: "https://assets.epicurious.com/photos/6508a14155b19af4200459c7/4:6/w_1932,h_2898,c_limit/Sausage-Cheese-Basil-Lasanga_RECIPE.jpg",
            prep: ["Preheat oven to 180°C. Layer lasagna sheets, meat sauce, and cheese. Repeat layers. Bake for 45 minutes until bubbly and golden."]
        },
        {
            id: 6,
            title: "Pepper & Steak Pie",
            description: "Indulge in a savory delight with our Pepper & Steak Pie – A harmonious blend of tender steak and flavorful peppers baked to perfection in a flaky crust.",
            ingredients: ["steak", "bell peppers", "onion", "flour", "beef broth", "puff pastry"],
            tagLine: ["Try something new! You won't regret it..."],
            imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuCXkwS6WKizF3JRIPyJ3wkKG_VTNj9tHeenCLp7hlg&s",
            prep: ["Sauté steak and peppers. Transfer to pie crust. Cover with top crust and bake at 200°C for 25-30 minutes."]
        }
    ]);

    // Find the recipe with the matching id
    const recipe = recipes.find(recipe => recipe.id === parseInt(id));

    if (!recipe) {
        return <div>No recipe found for id: {id}</div>;
    }

    return (
        <div>
            <div className="button-container">           
                <Link to="/" className="back-button">Back</Link>
            </div>
            <div className="details-card">
                <h1 className="details-card__title">{recipe.title}</h1>
                <p className="details-card__description">{recipe.description}</p>
                <h2 className="details-heading">Ingredients:</h2>
                <ul className="details-card__ingredient-list">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h2 className="details-heading">Preparation:</h2>
                <p className="details-card__prep">{recipe.prep}</p>
            </div>
        </div>
    );
}

export default RecipeDetails;