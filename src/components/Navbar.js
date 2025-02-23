import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Ensure you have the correct styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>Recipe Sharing</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li> {/* Link to Wishlist */}
            </ul>
        </nav>
    );
};

export default Navbar;
