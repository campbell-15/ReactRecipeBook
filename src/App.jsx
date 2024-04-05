import './App.css';
import Home from './Components/Home/Home';
import Recipes from './Components/Recipes/Recipe';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
