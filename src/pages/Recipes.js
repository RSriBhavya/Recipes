import React, { useState, useEffect } from "react";
import "../styles/Recipes.css";
import { Link } from "react-router-dom";

const Recipes = () => {
    const recipes = [
        { id: 1, name: "Spaghetti Carbonara", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Classic Margherita Pizza", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Homemade Tacos", image: "https://via.placeholder.com/150" },
        { id: 4, name: "Creamy Mushroom Risotto", image: "https://via.placeholder.com/150" },
        { id: 5, name: "Grilled Chicken Salad", image: "https://via.placeholder.com/150" },
        { id: 6, name: "Blueberry Pancakes", image: "https://via.placeholder.com/150" }
    ];

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(savedWishlist);
    }, []);

    const toggleWishlist = (recipe) => {
        let updatedWishlist;
        if (wishlist.some((item) => item.id === recipe.id)) {
            updatedWishlist = wishlist.filter((item) => item.id !== recipe.id);
        } else {
            updatedWishlist = [...wishlist, recipe];
        }

        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

    return (
        <div className="recipes-container">
            <nav className="navbar">
                <h2>Recipe Sharing</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/wishlist">Wishlist</Link></li>
                </ul>
            </nav>
            <h1>Explore Recipes</h1>
            <div className="recipes-grid">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="recipe-card">
                        <img src={recipe.image} alt={recipe.name} />
                        <h3>{recipe.name}</h3>
                        <button 
                            className={`save-btn ${wishlist.some((item) => item.id === recipe.id) ? "saved" : ""}`}
                            onClick={() => toggleWishlist(recipe)}
                        >
                            {wishlist.some((item) => item.id === recipe.id) ? "Saved ❤️" : "Save to Wishlist"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recipes;
