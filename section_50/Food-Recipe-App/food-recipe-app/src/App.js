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
  const [isRegistering, setIsRegistering] = useState(true); // Flag to determine if it's registration or login

  // Function used to handle registration or login for User
  const handleRegisterOrLogin = async (event) => {
    event.preventDefault();
    try {
      let endpoint = "/user/register";
      if (!isRegistering) {
        endpoint = "/user/login";
      }
      const response = await axios.post(endpoint, { username, password });
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

  const toggleRegisterOrLogin = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLogin = () => {
    toggleRegisterOrLogin();
    setUsername("");
    setPassword("");
  };

  return (
    <div className="search">
      <h2>Welcome to the Food Recipe App!!!</h2>
      {isRegistering ? (
        <form onSubmit={handleRegisterOrLogin}>
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
          <p>
            Already have an account?{" "}
            <span className="toggle-link" onClick={handleLogin}>
              Login here
            </span>
          </p>
        </form>
      ) : (
        <form onSubmit={handleRegisterOrLogin}>
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
          <button type="submit">Login</button>
          <p>
            Don't have an account?{" "}
            <span className="toggle-link" onClick={toggleRegisterOrLogin}>
              Register here
            </span>
          </p>
        </form>
      )}

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
