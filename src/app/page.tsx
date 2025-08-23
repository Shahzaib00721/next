
import React from 'react';
import Navbar from './Navbar';
import NewContact from './NewContact';
import Parking from './Parking';
import Footer from './Footer';
import Tickets from './Tickets';
import NewOut from './NewOut';
import Image from "next/image";
import { Nunito, Poppins, Inter } from "next/font/google";
import expoImage from "../public/expo.png"; 
import img3 from "../public/img3.png"; 

export default function Home() {
  return (
    <>
    <div className="relative min-h-screen pl-10 ">
      {/* Background Image */}
      <div className="absolute inset-0  ">
        <img className="w-full h-210 object-cover * bg-cover * bg-center "
          src="/img.png"
          alt="RV Show"
         
        />
        <div className="absolute inset-0 h-210 bg-gradient-to-b from-black/40" />
      </div>

     
      <Navbar />
      

     
      <div className="relative z-10 flex flex-col items-start justify-center text-left text-white px-6 pt-32">
        <h1 className="text-4xl md:text-5xl font-poppins   font-extrabold leading-tight mt-16">
          The 2025 Greater <br /> Philadelphia RV <br/> Show
        </h1>
        <p className="mt-4 max-w-2xl font-inter text-2xl md:text-1xl 
          letter-spacing: var(--tracking-tight);">
          Find the perfect RV, plan your adventure, and experience the freedom <br/>
          of the open road like never before.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-start">
          <button className="px-4 py-2 bg-white  text-black font-extrabold rounded-full shadow hover:bg-gray-200"style={{ fontFamily: 'Nunito, sans-serif' }}>
            Two Day Pass
          </button>
          <button className="px-4 py-2  text-white font-inter font-semibold rounded-full hover:bg-white hover:text-black">
            Show Display Map
          </button>
        </div>
      </div>

      {/* Bottom Boxes */}
      <div className="relative  h-50 z-10 md:flex hidden  gap-6 max-w-4xl  mx-auto mt-20 px-6 justify-center  ">
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

    <Tickets/>

    <Parking/>

    <Footer/>

   </>
  );
   
}





  

