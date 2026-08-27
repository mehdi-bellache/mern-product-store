import Navbar from '../components/Navbar'
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import ProductsNotFound from '../components/ProductsNotFound';
import { Rocket } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import api from "../lib/axios";



const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    const fetchProducts = async ()=>{
      try{
        const result = await api.get("/products");
        setProducts(result.data);
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
        {products.length === 0 &&  <ProductsNotFound/> }

        {products.length > 0 && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} setProducts={setProducts}/>
            ))}
          </div>
        )}
    </div>
  )
}

export default HomePage
