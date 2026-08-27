import axios from "axios";
import { Link } from "react-router-dom";
import { PenSquareIcon, Trash2Icon } from "lucide-react";

import toast from "react-hot-toast";


const ProductCard = ({product, setProducts}) => {
  
  const handleDelete = async (e, id)=>{
    e.preventDefault();
    try{
      await axios.delete(`http://localhost:3000/api/v1/products/${id}`)
      setProducts((prev) => prev.filter((product) => product._id !== id))
      toast.success("product deleted successfully");
    }
    catch(error){
      toast.error("Failed to delete the product");
    }
  }
  
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="px-4 pt-4">
        <img src={product.image} alt={product.name} className="rounded-xl h-48 w-full object-cover"/>
      </figure>

      <div className="card-body p-5">

        <h2 className="card-title text-xl font-bold truncate"> {product.name} </h2>        
        <p className="text-2xl font-extrabold text-primary my-1"> ${product.price} </p>

        <div className="card-actions justify-end items-center gap-2 mt-2">
          <Link to={`/product/${product._id}`} className="btn btn-square btn-ghost btn-sm text-info" title="Edit product">
            <PenSquareIcon className="size-5" />
          </Link>
          <button onClick={(e) => handleDelete(e, product._id)} className="btn btn-square btn-ghost btn-sm text-error"
            title="Delete product">
            <Trash2Icon className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard
