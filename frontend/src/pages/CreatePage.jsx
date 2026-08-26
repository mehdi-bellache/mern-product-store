import { useState } from "react";
import Navbar from "../components/Navbar";
import {toast} from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";


// apres avoir clique sur le boutton on doit utilise axios pour fetch la reponse et aussi on doit retourner a l'acceuil.
const CreatePage = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async() =>{
        if(!name.trim() || !price.trim() || !image.trim()){
            toast.error("All fields are required");;
            return ;
        }

        try{
            await axios.post("/products", {name, price, image});
            toast.success("Product created successfully");
            navigate("/");
        }
        catch(error){
            toast.error("Error while create the product");
        }



    }
  return (
      <div>
        <Navbar/>
        <div>
            <h1>Create New Product</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Product name" onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
                <input type="text" placeholder="Image URL" onChange={(e) => setImage(e.target.value)}/>
                <button type="submit"></button>
            </form>
        </div>
      
    </div>
  )
}

export default CreatePage
