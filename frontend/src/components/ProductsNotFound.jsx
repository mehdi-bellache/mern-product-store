import { Link } from "react-router-dom";

const ProductsNotFound = () => {

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 md:mt-20 lg:mt-28 px-4 text-center">
        <span className="text-lg md:text-xl font-medium text-base-content/80">
            No products found
        </span>
        <Link to="/create" className="btn btn-primary btn-md">
            <span>Create A Product</span>
        </Link>
    </div>
);
}

export default ProductsNotFound
