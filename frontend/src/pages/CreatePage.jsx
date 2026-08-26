import { useState } from "react";
import Navbar from "../components/Navbar";
import {toast} from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";


// apres avoir clique sur le boutton on doit utilise axios pour fetch la reponse et aussi on doit retourner a l'acceuil.
const CreatePage = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = async() =>{
        if(!name.trim() || !price.trim() || !image.trim()){
            toast.error("All fields are required");
            return ;
        }

        setLoading(true)

        try{
            await axios.post("/products", {name, price, image});
            toast.success("Product created successfully");
            navigate("/");
        }
        catch(error){
            toast.error("Error while creating the product");
        }
        finally{
            setLoading(false);
        }
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
            <input type="text" className="input input-bordered w-full" placeholder="e.g. Wireless Mouse" value={name}
              onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Price ($)</span>
            </label>
            <input type="number" step="0.01" className="input input-bordered w-full" placeholder="99.99" value={price} onChange={(e) => setPrice(e.target.value)}
              required/>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Image URL</span>
            </label>
            <input type="url" className="input input-bordered w-full" placeholder="https://example.com/image.jpg" value={image} 
                onChange={(e) => setImage(e.target.value)}
              required />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-2" disabled={loading}>
            {loading ? ( <> <span className="loading loading-spinner loading-xs"></span> Creating... </>) : ( 'Create product' )}
          </button>
        </form>
      </main>
    </div>
  );
}

export default CreatePage
