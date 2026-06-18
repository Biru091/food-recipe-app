import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Recipedetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      setRecipe(res.data.meals[0]);
    }

    fetchRecipe();
  }, [id]);

  if (!recipe) return <h2 className="loading">Loading...</h2>;

  return (
    <div className="recipe-detail">
      <h1>{recipe.strMeal}</h1>

      <img src={recipe.strMealThumb} alt={recipe.strMeal} />

      <h3>Instructions</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default Recipedetail;