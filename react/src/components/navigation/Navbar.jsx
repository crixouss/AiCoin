import { Menu, X } from "lucide-react"
import {useState} from "react";
import {Link} from "react-router-dom";

import Logo from '../../assets/logo/Coin.png';

const NavItems = [
    {label: "About", to: "/About"},
    {label: "Analyze your Coin", to: "/Analyze"},
    {label: "Contact", to: "/Contact"},
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

  return(
      <nav className={"sticky top-0 z-50 py-3 backdrop-blur-xl border-b border-neutral-700/80"}>
          <div className={"container px-4 mx-auto relative text-sm"}>
              <div className={"flex justify-between items-center"}>
                  <Link to={"/"} className={"flex items-center flex-shrink-0"}>
                      <img src={Logo} alt="Coin Logo" className="w-1/4 h-1/4 mr-2" />
                      <span className={"text-xl tracking-tight"}>
                          CoinGenius
                      </span>
                  </Link>
                  <ul className={"hidden lg:flex ml-14 space-x-12"}>
                      {NavItems.map((item, i) => (
                          <li key={i}>
                              <Link to={item.to}>
                                  {item.label}
                              </Link>
                          </li>
                      ))}
                  </ul>
                  <div className={"hidden lg:flex justify-center space-x-12 items-center"}>
                      <Link to={'/signIn'} className={"transition duration-150 ease-out hover:ease-in py-2 px-3 border rounded-md"}>
                          Sign In
                      </Link>
                      <Link to={"/register"} className={"transition duration-150 ease-out hover:ease-in bg-gradient-to-r from-main-dark to-orange-800 py-2 px-3 rounded-md"}>
                          Create an account
                      </Link>
                  </div>
                  <div className={"lg:hidden md:flex flex-col justify-end"}>
                      <button onClick={toggleOpen}>
                          {isOpen ? <X/> : <Menu/>}
                      </button>
                  </div>
              </div>
              {isOpen && (
                  <div className={"fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-start items-start lg:hidden"}>
                      <ul >
                          {NavItems.map((item,i) =>(
                              <li key={i} className={"pb-6 "}>
                                  <a href={item.href}>
                                      {item.label}
                                  </a>
                              </li>
                          ))}
                      </ul>
                      <div className={"flex space-x-6"}>
                          <button className={"py-2 px-3 border rounded-md"}>
                              Sign In
                          </button>
                          <button className={"bg-gradient-to-r from-main-dark to-orange-800 py-2 px-3 rounded-md"}>
                              Create an account
                          </button>
                      </div>
                  </div>
              )}
          </div>
      </nav>
  )
}

export default Navbar;