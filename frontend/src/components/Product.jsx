import { Link } from "lucide-react";
import { PenSquareIcon, Trash2Icon } from "lucide-react";


const Product = ({product}) => {
  // le link ne doit pas diriger vers create page mais vers la page de modification
  



  const handleDelete = ()=>{



  }
  return (
    <div>
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <span>${product.price}</span>
        <Link to={"/create"}>
            <PenSquareIcon/>
        </Link>
        <button onSubmit={handleDelete}>
            <Trash2Icon/>
        </button>

      
    </div>
  )
}

export default Product
