import axios from "axios";
import { Link } from "lucide-react";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import toast from "react-hot-toast";


const Product = ({product, setProducts}) => {
  
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
    <div>
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <span>${product.price}</span>
        <Link to={"/product/:id"}>
            <PenSquareIcon/>
        </Link>
        <button onClick={(e) => handleDelete(e, product._id)}>
            <Trash2Icon/>
        </button>

      
    </div>
  )
}

export default Product
