import axios from 'axios'
async function Apicall() {
    const response=await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    return response.data
    
    
}
export default Apicall;