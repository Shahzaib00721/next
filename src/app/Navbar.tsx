"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0  w-full z-20 flex items-center justify-between px-8 py-7 bg-transparent text-white">
      {/* Logo */}
      <div className="flex items-center gap-2 pl-7">
        <img src="/img2.png" alt="logo" className="h-20 w-20" />
        <span className="font-bold text-lg">RV SHOW</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 font-medium text-center">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">Directions</a></li>
        <li><a href="#" className="hover:text-gray-300">Discount Coupons</a></li>
        <li><a href="#" className="hover:text-gray-300">Gallery</a></li>
        <li><a href="#" className="hover:text-gray-300">Dealers</a></li>
      </ul>

      {/* Mobile Menu Button (Only Hamburger) */}
      <button
        onClick={() => setOpen(true)}
        className="text-3xl "
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-13 right-7 w-70 h-150 bg-white text-black text-lg flex flex-col gap-7  p-3 shadow-lg ">
          {/* Cross Button */}
          <div className="gap-0">
          <button
            onClick={() => setOpen(false)}
            className="self-start text-1xl  "
          >
            ✖
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 ">
            <img src="/img2.png" alt="logo" className="h-15 p-0 w-15" />
            </div>
           
          </div>

          {/* Links */}
          <div className="flex gap-2 items-center">
            <img src="/icon1.svg" alt="home" />
            <a href="#" className="" onClick={() => setOpen(false)}>Home</a>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/icon2.svg" alt="directions" />
            <a href="#" onClick={() => setOpen(false)}>Directions</a>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/icon3.svg" alt="discount" />
            <a href="#" onClick={() => setOpen(false)}>Discount Coupons</a>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/icon4.svg" alt="gallery" />
            <a href="#" onClick={() => setOpen(false)}>Gallery</a>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/icon5.svg" alt="dealers" />
            <a href="#" onClick={() => setOpen(false)}>Dealers</a>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/icon6.svg" alt="compgrounds" />
            <a href="#" onClick={() => setOpen(false)}>Compgrounds</a>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/icon7.svg" alt="pet" />
            <a href="#" className="font-poppies" onClick={() => setOpen(false)}>Pet Policy</a>
          </div>
        </div>
      )}
    </nav>
  );
}
