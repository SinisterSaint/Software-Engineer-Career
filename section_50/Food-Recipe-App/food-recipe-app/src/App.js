import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeBanner from "./components/RecipeBanner";
const API = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function used to handle registration for User
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/register", { username, password });
      console.log(response.data);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  // search for the recipe
  const findRecipes = async () => {
    setLoading(true);
    const url = API + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setLoading(false);
  };

  useEffect(() => {
    findRecipes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    findRecipes();
  };

  return (
    <div className="search">
      <h2>Welcome to the Food Recipe App!!!</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <SearchBar
        loading={loading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className="recipes">
        {recipes ? (
          recipes.map((recipe) => (
            <RecipeBanner key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          <p>Apologies!! Recipe Was Not Found!!!</p>
        )}
      </div>
    </div>
  );
}

export default App;