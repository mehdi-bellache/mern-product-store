import { useState } from "react";
import Navbar from "../components/Navbar";
import {toast} from "react-hot-toast";


// apres avoir clique sur le boutton on doit utilise axios pour fetch la reponse et aussi on doit retourner a l'acceuil.
const CreatePage = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = () =>{
        if(!name.trim() || !price.trim() || !image.trim()){
            toast.error("All fields are required");;
            return ;
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
