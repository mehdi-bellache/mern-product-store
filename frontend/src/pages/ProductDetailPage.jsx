import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import api from "../lib/axios";

import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { LoaderIcon } from "lucide-react";


const ProductDetailPage = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    
    
    const {id}= useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchProduct = async ()=>{
            try{
                const result = await api.get(`/products/${id}`);
                setProduct(result.data);
            }
            catch(error){
                toast.error("Failed to fetch the Product");
            }
            finally{
                setLoading(false);
            }
        }; fetchProduct();
    },[id])



    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!product.name.trim() || !String(product.price).trim() || !product.image.trim()){
            toast.error("Please add a name, price and an image");
            return;
        }
        setSaving(true);
        try{
            await api.patch(`/products/${id}`, product);
            toast.success("Product Updated Successfully");
            navigate("/");

        }
        catch(error){
            toast.error("Failed to update the product");
        }
        finally{
            setSaving(false);
        }

    }

    if(loading){
        return (
            <div className='min-h-screen bg-base-200 flex items-center justify-center'>
                <LoaderIcon className="animate-spin size-10"/>
            </div>
        )
    }
    return (
        <div className="min-h-screen bg-base-200">
            <Navbar />

            <main className="container mx-auto px-4 py-8 max-w-lg">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Update Product</h1>
                <form onSubmit={(e) => handleSubmit(e)} className="bg-base-100 p-6 rounded-xl shadow-lg flex flex-col gap-4">
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
                        <input type="number" step="0.01" className="input input-bordered w-full" placeholder="99.99" value={product.price}
                            onChange={(e) => setProduct({...product, price: e.target.value})}/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Image URL</span>
                        </label>
                        <input type="url" className="input input-bordered w-full" placeholder="https://example.com/image.jpg" value={product.image} 
                            onChange={(e) => setProduct({...product, image: e.target.value})}/>
                    </div>

                    <button type="submit" className="btn btn-primary w-full mt-2" disabled={saving}>
                        {saving ? ( <> <span className="loading loading-spinner loading-xs"></span> Saving... </>) : ( 'Save Changes' )}
                    </button>

                     <Link to={"/"} className="btn btn-ghost w-full">Cancel</Link>
                </form>
            </main>
        </div>
    );

}

export default ProductDetailPage
