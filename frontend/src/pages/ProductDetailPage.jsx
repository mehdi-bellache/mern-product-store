import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Divide } from "lucide-react";

const ProductDetailPage = () => {
    const [product, setProduct] = useState(null);

    const {id}= useParams();

    useEffect(()=>{
        const fetchProduct = async ()=>{
            try{
                const result = await axios.get(`http://localhost:3000/api/v1/products/${id}`);
                setProduct(result.data);
            }
            catch(error){
                toast.error("Failed to fetch the Product");
            }
        }; fetchProduct(); 
    },[id])


    const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     // if()
    //     try{

    //     }

    }
    return (
        <div className="min-h-screen bg-base-200">
            <Navbar />

            <main className="container mx-auto px-4 py-8 max-w-lg">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Create New Product</h1>
                <form onSubmit={handleSubmit} className="bg-base-100 p-6 rounded-xl shadow-lg flex flex-col gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Product Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-full" value={product.name}
                            onChange={(e) => setProduct({...product, name: e.target.value})}/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Price ($)</span>
                        </label>
                        <input type="number" step="0.01" className="input input-bordered w-full" placeholder="99.99" value={price}
                            onChange={(e) => setProduct({...product, price: e.target.value})}/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Image URL</span>
                        </label>
                        <input type="url" className="input input-bordered w-full" placeholder="https://example.com/image.jpg" value={image} 
                            onChange={(e) => setProduct({...product, image: e.target.value})}/>
                    </div>

                    <button type="submit" className="btn btn-primary w-full mt-2" disabled={loading}>
                        {loading ? ( <> <span className="loading loading-spinner loading-xs"></span> Creating... </>) : ( 'Create product' )}
                    </button>
                </form>
            </main>
        </div>
    );

}

export default ProductDetailPage
