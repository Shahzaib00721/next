
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return ( 
    <footer className="bg-[#0F241D] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-lg font-bold">Logo</h2>
          <p className="mt-4 text-gray-300 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Landingpage</li>
            <li>Features</li>
            <li>Documentation</li>
            <li>Referral Program</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Documentation</li>
            <li>Design</li>
            <li>Themes</li>
            <li>Illustrations</li>
            <li>UI Kit</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="font-semibold mb-4">More</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Documentation</li>
            <li>License</li>
            <li>Changelog</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-gray-400 text-sm">
        <p>Copyright © 2025 <span className="font-bold text-white">Logo</span></p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6 text-lg">
          <FaGoogle className="cursor-pointer hover:text-white" />
          <FaTwitter className="cursor-pointer hover:text-white" />
          <FaInstagram className="cursor-pointer hover:text-white" />
          <FaLinkedin className="cursor-pointer hover:text-white" />
        </div>
      </div>
    </footer>
  );
}
