import logo from '../../assets/logo/Logo250x250.png';
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
              <div className={"flex justify-center items-center"}>
                  <div className={"flex items-center flex-shrink-0"}>
                      <img src={logo} alt="Logo" className="" />
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
              </div>
          </div>
      </nav>
  )
}

export default Navbar;