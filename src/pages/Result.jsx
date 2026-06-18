import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Results = () => {
    const navigate=useNavigate()
  const [recipes, setRecipes] = useState([]);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      setRecipes(res.data.meals || []);
    }

    if (query) fetchData();
  }, [query]);

  return (
   <div className="results-container">
  <h2 className="results-title">
    Results for: <span>{query}</span>
  </h2>

  <div className="results-grid">
    {recipes?.map((item) => (
      <div className="result-card" key={item.idMeal}>
        <img src={item.strMealThumb} alt={item.strMeal} />

        <div className="card-body">
          <h3>{item.strMeal}</h3>
        </div>
        <button onClick={()=>navigate(`/recipe/${item.idMeal}`)}>Get Recipe</button>

      </div>
    ))}
  </div>
</div>
  );
};

export default Results;