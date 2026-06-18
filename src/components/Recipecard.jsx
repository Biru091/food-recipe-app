import { useContext } from "react";
import { Recipecontext } from "../Recipecontext/recipeContext";
import { useNavigate } from "react-router-dom";
const RecipeCard = () => {
    const {recipe}=useContext(Recipecontext)
    const navigate=useNavigate()
    return (
        <>
        <p>Get item by search .Some recipes may not be available or may not appear in search results because the data is provided by a third-party API with limited content.
 </p>
        
        <div className="Iteams">
            {recipe?.map((item,index)=>
                <div className="Item" key={item.idMeal}>
                    <img src={item.strMealThumb} alt="image of food"/>
                    <div className="item-detail">
                        <p>{item.strMeal}</p>
                        <button onClick={()=>navigate(`/recipe/${item.idMeal}`)}>Get Recipe</button>
                    </div>

                    


                </div>

            )}



        </div>
        



        </>

    )
}
export default RecipeCard;