import { Link } from "react-router-dom";

const ProductsNotFound = () => {

  return (
    <div>
        <span>No products found </span>
        <Link to={"/create"} className="btn btn-primary">
            <span>Create A Product</span>
        </Link>

      
    </div>
  )
}

export default ProductsNotFound
