"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen  flex flex-col items-start justify-center  py-12">
      
      {/* Heading */}
      <div className=" mb-0 pl-10">
        <h2 className="text-3xl md:text-6xl font-extrabold text-green-800">
          5 REASONS
        </h2>
        <p className="text-lg md:text-2xl text-gray-600">
          To Attend <span className="font-bold text-green-800">Greater Philadelphia RV Show</span>
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image Section */}
        <div className="w-full pl-10 pr-10">
          <Image 
            src="/image 8.svg" // Replace with your actual image
            alt="RV in desert"
            width={1000}
            height={900}
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </div>

        {/* Reasons Section */}
        <div className="space-y-6 pl-7">
          <div>
            <h1 className="text-3xl font-bold text-black">01.   Exclusive Show-Only</h1>
            <p className="text-gray-600 text-medium mt-1">
              Special pricing, rebates, and financing offers available only at the show.
              Dealers competing means better prices on new and used RVs.
            </p>
          </div>
          <div>
            <h2 className="text-3xl  font-bold text-black ">02.   Latest RV Models</h2>
            <p className="text-gray-600 text-medium mt-1">
              Explore brand-new 2025 RVs, campers, and trailers from top manufacturers.
              Discover the latest luxury interiors, solar power solutions, and off-grid technology.
            </p>
          </div>
          <div>
            <h2 className="text-3xl  font-bold text-black">03.   One-Stop Shop</h2>
            <p className="text-gray-600 text-medium mt-1">
              Browse hundreds of vendors offering RV essentials, outdoor gear, and camping must-haves.
              Find upgrades, solar kits, awnings, towing accessories, and more.
            </p>
          </div>
          <div>
            <h2 className="text-3xl   font-bold text-black">04.   Connect with Campgrounds</h2>
            <p className="text-gray-600 text-medium mt-1">
              Meet representatives from top-rated campgrounds and RV resorts.
              Plan your next adventure with exclusive discounts on campsites and memberships.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold  text-black">05.   Fun for Whole Family</h2>
            <p className="text-gray-600 text-medium mt-1">
              Giveaways, contests, and interactive exhibits throughout the show.
              Kid-friendly activities and live product demonstrations.
              Connect with fellow RVers and outdoor enthusiasts.
            </p>
          </div>
        </div>
      </div>

      
      {/* Bottom Bar */}
<div className="w-full bg-green-800 text-center py-8 mt-16">
  <p className="text-white text-lg px-4 sm:text-xl md:text-2xl">
    The show is completely <span className="font-bold">indoors</span> so dont let the weather stop you.
  </p>
</div>

    </div>
  );
}
