// src/components/Footer.tsx
"use client";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return ( 
    <footer className="bg-[#0F241D] text-white text-start justify-center pb-10 font-medium p-16  text-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5">
        {/* Logo & About */}
        <div className="mt-10">
          <h2 className="text-lg font-medium font-poppins ">Logo</h2>
          <p className="mt-10 text-gray-300 font-sans text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        {/* Product */}
        <div className="mt-8"> 
          <h3 className="font-medium mb-2 size-[18px] ">Product</h3>
          <ul className="space-y-3 text-sm text-gray-300 mt-6">
            <li>Landingpage</li>
            <li>Features</li>
            <li>Documentation</li>
            <li>Referral Program</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Services */}
        <div className="mt-8">
          <h3 className="font-medium mb-2 size-[18px] ">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300 mt-6">
            <li>Documentation</li>
            <li>Design</li>
            <li>Themes</li>
            <li>Illustrations</li>
            <li>UI Kit</li>
          </ul>
        </div>

        {/* Company */}
      
         
        <div className="mt-8">
          <h3 className="font-medium mb-2 size-[18px] ">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300 mt-6">
            <li>About</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* More */}
        <div className="mt-8">
          <h3 className="font-medium mb-2 size-[18px] ">More</h3>
          <ul className="space-y-2 text-sm text-gray-300 mt-6">
            <li>Documentation</li>
            <li>License</li>
            <li>Changelog</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-30 text-center text-gray-300 text-sm">
        <p>Copyright © 2025 <span className="font-bold text-white">Logo</span></p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-15 text-lg">
          <FaGoogle className="cursor-pointer hover:text-white" />
          <FaTwitter className="cursor-pointer hover:text-white" />
          <FaInstagram className="cursor-pointer hover:text-white" />
          <FaLinkedin className="cursor-pointer hover:text-white" />
        </div>
      </div>
    </footer>
  );
}
