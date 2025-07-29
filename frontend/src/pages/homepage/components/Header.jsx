import { useState } from "react";
import user from "../../../assets/icons/user.png";
import cart from "../../../assets/icons/cart.png";
import search from "../../../assets/icons/search.png";
import shopic from "../../../assets/icons/shopic.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Reusable nav link component for DRY code
  const NavLink = ({ href, children, className = "" }) => (
    <li>
      <a href={href} className={`font-satoshi hover:text-gray-600 ${className}`}>
        {children}
      </a>
    </li>
  );

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* This is the main container. I've switched to mobile-first padding.
        - `px-4`: Base padding for small mobile.
        - `sm:px-6`: Padding for screens 640px and up.
        - `lg:px-[100px]`: Your original padding for large screens 1024px and up.
      */}
      <div className="max-w-[1440px] mx-auto px-4 xl:px-[100px]">

        {/* ====================================================================== */}
        {/* DESKTOP LAYOUT (Visible on screens 1024px and larger)                  */}
        {/* `hidden lg:flex` hides this on smaller screens and shows it on large  */}
        {/* ====================================================================== */}
        <div className="hidden lg:flex items-center gap-[40px] py-6">
          {/* logo */}
          <a href="#" className="font-integral font-bold text-[22px] text-black shrink-0">
            SHOP.CO
          </a>

          {/* nav links */}
          <nav className="shrink-0">
            <ul className="flex items-center gap-6">
              <NavLink href="#" className="text-[16px] flex items-center">
                Shop <img src={shopic} className="w-[16px] h-[16px] ml-1" alt="" />
              </NavLink>
              <NavLink href="#" className="text-[16px]">On Sale</NavLink>
              <NavLink href="#" className="text-[16px]">New Arrivals</NavLink>
              <NavLink href="#" className="text-[16px]">Brands</NavLink>
            </ul>
          </nav>

          {/* search bar */}
          <div className="flex-grow max-w-[577px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products…"
                className="w-full h-[48px] bg-[#F0F0F0] rounded-[62px] pl-12 pr-4 font-satoshi text-[16px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <img src={search} className="absolute left-4 top-1/2 -translate-y-1/2 w-[20px] h-[20px]" alt="search" />
            </div>
          </div>

          {/* cart & user icons */}
          <div className="flex items-center gap-3 shrink-0">
            <button aria-label="Open Cart" className="p-2 hover:bg-gray-100 rounded-full">
              <img src={cart} alt="cart" className="w-[24px] h-[24px]" />
            </button>
            <button aria-label="User Account" className="p-2 hover:bg-gray-100 rounded-full">
              <img src={user} alt="user" className="w-[24px] h-[24px]" />
            </button>
          </div>
        </div>

        <div className="lg:hidden">
          {/* Top row: Hamburger, Logo, Icons */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
                {/* hamburger */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1 p-2" aria-label="Toggle Menu">
                    <span className="w-5 h-0.5 bg-black"></span>
                    <span className="w-5 h-0.5 bg-black"></span>
                    <span className="w-5 h-0.5 bg-black"></span>
                </button>
                {/* logo */}
                <a href="#" className="font-integral font-bold text-[20px] text-black">
                    SHOP.CO
                </a>
            </div>

            {/* icons */}
            <div className="flex items-center gap-2">
              <button aria-label="Search" className="p-2"><img src={search} alt="search" className="w-[20px] h-[20px]" /></button>
              <button aria-label="Open Cart" className="p-2"><img src={cart} alt="cart" className="w-[20px] h-[20px]" /></button>
              <button aria-label="User Account" className="p-2"><img src={user} alt="user" className="w-[20px] h-[20px]" /></button>
            </div>
          </div>

          {/* Collapsible nav menu */}
          {menuOpen && (
            <nav className="border-t border-gray-200 py-4">
              <ul className="flex flex-col gap-4 items-center">
                <NavLink href="#" className="text-[14px] flex items-center justify-center">
                  Shop <img src={shopic} className="w-[12px] h-[12px] ml-1" alt="" />
                </NavLink>
                <NavLink href="#" className="text-[14px]">On Sale</NavLink>
                <NavLink href="#" className="text-[14px]">New Arrivals</NavLink>
                <NavLink href="#" className="text-[14px]">Brands</NavLink>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
