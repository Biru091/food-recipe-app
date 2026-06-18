import { useEffect,useState,createContext } from "react"
import Apicall from "../services/recipeApi"
export const Recipecontext=createContext()
const Recipeprovider=({children})=>{
    const[recipe,setRecipe]=useState([])
    useEffect(() => {
    async function fetchdata() {
        try {
            const data = await Apicall();
            setRecipe(data?.meals || []);
        } catch (error) {
            console.log("API error:", error);
            setRecipe([]);
        }
    }

    fetchdata();
}, []);

    return (
        <>
        <Recipecontext.Provider value={{recipe}}>
            {children}

        </Recipecontext.Provider>
        </>
    )




}
export default Recipeprovider