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
    <header className='bg-base-300 border-b border-base-content/10'>
        <div className="mx-auto max-w-6xl p-4">
            <div className=" flex items-center justify-between">
              <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
                Product Store <ShoppingCart className="size-8"/>
              </h1>
                <div className="flex items-center gap-4">
                    <Link to={"/create"} className="btn btn-primary">
                       <PlusSquare className="size-5"/>
                    </Link>
                    <Link to={"/"} className="btn btn-primary">
                       <Sun className="size-5"/>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )


}

export default Navbar
