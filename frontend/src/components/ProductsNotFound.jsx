import Navbar from "./Navbar"
import { Rocket } from "lucide-react"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductsNotFound = () => {
    useEffect(() =>{
        const fetchProducts = async ()=>{
            await axios.get("")


        }
    })
  return (
    <div>
        <Navbar/>
        <h1>Current Products <Rocket/></h1>
        <span>No products found </span>
        <Link to={"/create"} className="btn btn-primary">
            <span>Create A Product</span>
        </Link>

      
    </div>
  )
}

export default ProductsNotFound
