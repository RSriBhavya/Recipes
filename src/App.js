import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Recipes from "./pages/Recipes";
import Wishlist from "./pages/Wishlist"; // Import Wishlist page
import "./App.css"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/wishlist" element={<Wishlist />} /> {/* Wishlist Route */}
      </Routes>
    </Router>
  );
}

export default App;