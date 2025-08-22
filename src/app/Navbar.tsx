"use client";
import { useState } from "react";
import { X } from "lucide-react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute  top-0 left-0 w-full z-20 flex items-center justify-between px-8 py-7 bg-transparent text-white">
      {/* Logo */}
      <div className="flex items-center gap-2 pl-7">
  <img 
    src="/img2.png"
    alt="logo"
    className="h-[159px] w-[159px]"
    draggable="false" 
  />
 
</div>


      {/* Desktop Links */}
      <ul className="hidden md:flex gap-7  text-center font-semibold   text-lg">
        <li><a href="#" className="hover:text-gray-300"style={{ fontFamily: 'Nunito, sans-serif' }}>Home</a></li>
        <li><a href="#" className="hover:text-gray-300" style={{ fontFamily: 'Nunito, sans-serif' }}>Directions</a></li>
        <li><a href="#" className="hover:text-gray-300"style={{ fontFamily: 'Nunito, sans-serif' }}>Discount Coupons</a></li>
        <li><a href="#" className="hover:text-gray-300"style={{ fontFamily: 'Nunito, sans-serif' }}>Gallery</a></li>
        <li><a href="#" className="hover:text-gray-300"style={{ fontFamily: 'Nunito, sans-serif' }}>Dealers</a></li>
      </ul>

      {/* Hamburger */}
      <button onClick={() => setOpen(!open)} className="text-3xl">
        ☰
      </button>

      {/* Mobile Menu div */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white  text-black transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cross Button - Left Side */}
   <div className="flex justify-start px-4 pt-4">
  <button 
    onClick={() => setOpen(false)} 
    className="focus:outline-none"
    aria-label="Close menu"
  >
    <X className="w-8 h-8 font-bold text-black" />
  </button>
</div>


        {/* Menu Content */}
        <div className="flex flex-col items-start pr-6 pl-6 pb-6 gap-6">
          <div className="flex items-center gap-2">
          
          <img 
    src="/img2.png"
    alt="logo"
    className="h-[71px] w-[71px]"
    draggable="false" 
    />
           
          </div>
          <div className="flex items-center gap-2 -gray-900">
            <img src="/icon1.svg" alt="home" />
            <span>Home</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icon2.svg" alt="directions" />
            <span>Directions</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icon3.svg" alt="discount" />
            <span>Discount Coupons</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icon4.svg" alt="gallery" />
            <span>Gallery</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icon5.svg" alt="dealers" />
            <span>Dealers</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icon6.svg" alt="campgrounds" />
            <span>Campgrounds</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icon7.svg" alt="pet" />
            <span>Pet Policy</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
