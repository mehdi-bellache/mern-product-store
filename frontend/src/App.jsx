import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import ProductDetailPage from "./pages/ProductDetailPage"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/create" element={<CreatePage/>}></Route>
        <Route path="/product/:id" element={<ProductDetailPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
