
import React from 'react';
import Navbar from './Navbar';
import NewContact from './NewContact';
import Parking from './Parking';
import Footer from './Footer';
import TicketPrices from './Tickets';
import NewOut from './NewOut';


import Image from "next/image";
// Importing the image directly

import img from '../public/img.png'; // Save your image as /public/img.png
import expoImage from "../public/expo.png"; // Save your image as /public/expo.png
import img3 from "../public/img3.png"; // top me import
import { Geist, Geist_Mono } from "next/font/google";
export default function Home() {
  return (
    <>
    <div className="relative min-h-screen bg-black pl-10 ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover * bg-cover * bg-center "
          src="/img.png"
          alt="RV Show"
         
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navbar */}
      <Navbar />
      

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center text-left text-white px-6 pt-32">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mt-7">
          The 2025 Greater <br /> Philadelphia RV <br/> Show
        </h1>
        <p className="mt-4 max-w-2xl text-1x1 md:text-1xl">
          Find the perfect RV, plan your adventure, and experience the freedom <br/>
          of the open road like never before.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-start">
          <button className="px-4 py-2 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200">
            Two Day Pass
          </button>
          <button className="px-4 py-2  text-white font-semibold rounded-full hover:bg-white hover:text-black">
            Show Display Map
            
          </button>
        </div>
      </div>

      {/* Bottom Boxes */}
      <div className="relative  z-10 md:flex hidden md:block gap-6 max-w-4xl mx-auto h-40 mt-20 px-6 justify-center  ">
        <div className="bg-black/50 p-6 rounded-xl text-white w-60 border border-white/50 items-center">
          <h3 className="font-bold text-lg ">Latest RV Models</h3>
          <div className='h-0.5 w-45 mt-2 bg-white'></div>
          <p className="text-sm mt-2">
            Explore Brand-New 2025 RVs, Campers, And Trailers From Top Manufacturers.
          </p>
        </div>
        <div className="bg-black/20 p-6 rounded-xl text-white w-60 border border-white/20">
          <h3 className="font-bold text-lg">One-Stop Shop</h3>
           <div className='h-0.5 w-45 mt-2 bg-white'></div>
          <p className="text-sm mt-2">
            Browse Hundreds Of Vendors & Offering RV Essentials.
          </p>
        </div>
    
        <div className="bg-black/20 p-6 rounded-xl text-white w-60 border border-white/20">
          <h3 className="font-bold text-lg">Easy Bookings</h3>
           <div className='h-0.5 w-45 mt-2 bg-white'></div>
          <p className="text-sm mt-2">
            Best in class ticket booking system.
          
          </p>



        
        </div>
        
      </div>
    </div>

    <NewContact/>

    <NewOut/>

    <TicketPrices/>

    <Parking/>

    <Footer/>

   </>
  );
   
}





  

