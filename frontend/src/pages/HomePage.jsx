import Navbar from '../components/Navbar'
import axios from "axios";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import ProductsNotFound from '../components/ProductsNotFound';
import { Rocket } from 'lucide-react';



const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    const fetchProducts = async ()=>{
      try{
        products = await axios.get("http://localhost:3000/api/v1/products");
      }
      catch(error){
        toast.error("Error while fetching the products");
      }
    }; fetchProducts()
  }, []);

  return (
    <div>
        <Navbar/>
        <h1 className="text-3xl font-bold text-primary flex items-center justify-center gap-2 m-3">
          Current Products <Rocket className="size-8"/>
        </h1>
        {products.length === 0 ?  <ProductsNotFound/> : "products exists"}
      
    </div>
  )
}

export default HomePage
