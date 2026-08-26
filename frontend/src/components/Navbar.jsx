import {ShoppingCart, PlusSquare, Sun, FileX} from "lucide-react";
import { Link } from "react-router-dom"; 


/** 
 * pour header :
 * display flex
 * align items center 
 * justify-content space-between
 * pour : 
 * plus spuare : margin-right 5px
 * plus-square et l'autre : backaground color: 
 * 
*/

const Navbar = () => {
  return (
    <header className="">
        <div>
            <h1>Product Store <ShoppingCart className="size-5"/></h1>
        </div>
    
        <div>
            <PlusSquare/>
            <Sun/>


        </div>

      
    </header>
  )
}

export default Navbar
