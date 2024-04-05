import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Home/Home.css";

const Home = () => {
    // State
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    // save changes
    const handleQuery = (e) => {
        const value = e.target.value;
        setQuery(value);
    }

    // move to page with query value url 
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${query}`);
    }

    return (
        <div className="home">
            <div className="search">
                <div className="inputs">
                    <div className="logo">
                        <h2>REACT RECIPES</h2>
                        <small className="small-text">Find the recipes you love best</small>
                    </div>
                    <form>
                        <input type="text" value={query} onChange={handleQuery}/>
                        <button onClick={handleSearch}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;