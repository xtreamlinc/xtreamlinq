import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, Menu, X as Close } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-2 sm:px-6">
      <div className="bg-black/80 backdrop-blur-sm border border-gray-800 rounded-full px-4 sm:px-8 py-3 sm:py-4 shadow-lg">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">X</span>
            </div>
            <span className="text-white text-lg font-bold">Xtreamlinq</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.to) ? "text-primary" : "text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
              className="text-gray-200 hover:text-primary focus:outline-none"
            >
              {menuOpen ? <Close className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-gray-400 text-sm">Online</span>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden absolute left-0 top-[70px] w-full px-2">
            <div className="bg-black/95 border border-gray-800 rounded-2xl shadow-xl py-4 flex flex-col gap-2 animate-fade-in">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-6 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.to)
                      ? "bg-primary text-black"
                      : "text-gray-200 hover:bg-primary/10 hover:text-primary"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 px-6 pt-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-400 text-sm">Online</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;