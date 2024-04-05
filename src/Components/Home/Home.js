import React from "react";
import "../Home/Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="search">
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
            </div>
        </div>
    );
}

export default Home;