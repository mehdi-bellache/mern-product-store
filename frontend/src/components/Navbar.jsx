import {ShoppingCart, PlusSquare, Sun, Moon} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("coffee");

  const toggleColorMode = ()=>{
    setTheme(theme === "coffee" ? "light" : "coffee") ;
  }

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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
                <button onClick={toggleColorMode} className="btn btn-primary">
                  { theme === "coffee" ? <Sun className="size-5"/> : <Moon className="size-5"/>}
                </button>
              </div>
            </div>
        </div>
    </header>
  )


}

export default Navbar
