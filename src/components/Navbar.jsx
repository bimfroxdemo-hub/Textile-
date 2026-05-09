import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Collection", path: "/collection" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/">
          <div className="flex flex-col leading-none">
            
            <h1 className="text-3xl font-bold tracking-wide text-black">
              TEXTILE
            </h1>

            <span className="text-[11px] tracking-[5px] uppercase text-gray-500 mt-1">
              Premium Fabrics
            </span>

          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">

          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`relative text-[15px] tracking-wide font-medium transition-all duration-300
              ${
                location.pathname === item.path
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {item.name}

              {location.pathname === item.path && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-black rounded-full" />
              )}
            </Link>
          ))}

        </div>

        {/* RIGHT BUTTON */}
        <div className="hidden md:block">
          
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 duration-300 text-sm tracking-wide">
            Get Quote
          </button>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          <HiOutlineMenuAlt3 />
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white overflow-hidden duration-300 border-t
        ${menuOpen ? "max-h-96 py-6" : "max-h-0"}`}
      >
        
        <div className="flex flex-col px-6 gap-6">

          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium ${
                location.pathname === item.path
                  ? "text-black"
                  : "text-gray-600"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button className="bg-black text-white py-3 rounded-full mt-2">
            Get Quote
          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;