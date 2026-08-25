import {ShoppingCart, PlusSquare, Sun} from "lucide-react"


const Navbar = () => {
  return (
    <div>
        <Link>
            <h1>Product Store</h1>
            // and here i should add shopping bag.
            <ShoppingCart className="size-5"/>
        </Link>
        <div>

        </div>

      
    </div>
  )
}

export default Navbar
