import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Recipedetail from './pages/Recipedetail'
import Results from './pages/Result'
import Recipeprovider from './Recipecontext/recipeContext'
function App() {

  return (
    <>
      <Recipeprovider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipe/:id' element={<Recipedetail />} />
            <Route path="/results" element={<Results />} />
          </Routes>

        </BrowserRouter>

      </Recipeprovider>

    </>
  )
}

export default App
