import logo from '../../assets/logo/Coin.png';
import React from "react";

const NavItems = [
    {label: "About", href: "/"},
    {label: "Analyze your Coin", href: "/"},
    {label: "Contact", href: "/"},
]

const Navbar = () => {
  return(
      <nav className={"sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80"}>
          <div className={"container px-4 mx-auto relative text-sm"}>
              <div className={"flex justify-between items-center"}>
                  <div className={"flex items-center flex-shrink-0"}>
                      <img src={logo} alt="Coin Logo" className="w-1/4 h-1/4 mr-2" />
                      <span className={"text-xl tracking-tight"}>
                          CoinGenius
                      </span>
                  </div>
                  <ul className={"hidden lg:flex ml-14 space-x-12"}>
                      {NavItems.map((item, i) => (
                          <li key={i}>
                              <a href={item.href}>
                                  {item.label}
                              </a>
                          </li>
                      ))}
                  </ul>
                  <div className={"hidden bg-main-light lg:flex justify-center space-x-12 items-center"}>
                      <a className={"py-2 px-3 border rounded-md"}>
                          Sign In
                      </a>
                      <a className={"bg-gradient-to-r from-main-dark to-orange-800 py-2 px-3 rounded-md"}>
                          Create an account
                      </a>
                  </div>
              </div>
          </div>
      </nav>
  )
}

export default Navbar;