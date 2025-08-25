"use client";
import Image from "next/image";




import { Poppins } from 'next/font/google'
 


export default function ReasonsSection() {
  return (
    <section className="w-full bg-white py-12  ">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto text-center md:text-left pl-6 p-6">
        <h2 className="text-6xl md:text-5xl font-bold text-gray-800">
         <span className="font-poppins text-green-700 text-5xl sm:text-8xl md:text-6xl lg:text-8xl xl:text-[96px]">
         5 REASONS
       </span>

        </h2>
        <p className="text-lg md:text-xl text-gray-700 mt-2 font-poppins ">
          To Attend <span className=" text-2xl md:text-1x1 font-bold text-green-700">Greater Philadelphia RV Show</span>
        </p>
       </div>

       {/* Content Grid */}
       <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div className="w-full py-2 px-5 flex justify-center">
       <div className="w-full max-w-[850px] relative rounded-[30px] overflow-hidden shadow-lg 
                  h-[350px] sm:h-[350px] md:h-[480px]">
       <Image
       src="/image 8.svg" 
       alt="RV in desert"
       fill
       className="object-cover"
       priority
        />
       </div>
       </div>


        {/* Right Text */}
        <div className="space-y-15 pr-6 ">
          {[
            {
              number: "01.",
              title: "Exclusive Show Only",
              desc: "Special pricing, rebates, and financing offers available only at the show. Dealers competing means better prices on new and used RVs."
            },
            {
              number: "02.",
              title: "Latest RV Models",
              desc: "Explore brand-new 2025 RVs, campers, and trailers from top manufacturers. Discover the latest luxury interiors, solar power solutions, and off-grid technology."
            },
            {
              number: "03.",
              title: "One-Stop Shop",
              desc: "Browse hundreds of vendors offering RV essentials, outdoor gear, and camping must-haves. Find upgrades, solar kits, awnings, towing accessories, and more."
            },
            {
              number: "04.",
              title: "Connect with Campgrounds",
              desc: "Meet representatives from top-rated campgrounds and RV resorts. Plan your next adventure with exclusive discounts on campsites and memberships."
            },
            {
              number: "05.",
              title: "Fun for Whole Family",
              desc: "Giveaways, contests, and interactive exhibits throughout the show. Kid-friendly activities and live product demonstrations. Connect with fellow RVers and outdoor enthusiasts."
            }
          ].map((item) => (
            <div key={item.number} className="flex items-start m-0 p-1  pl-7 space-x-3">
              <span className="text-3xl font-medium text-black flex-shrink-0">{item.number}</span>
              <div>
                <h3 className="text-3xl font-medium font-poppins text-gray-900  " >{item.title}</h3>
                <p className="text-gray-600 font-poppins  text-base mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     <div className="w-full bg-green-800 text-center py-8 mt-16 flex items-center justify-center">
  <p className="text-white text-xl px-4 sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px]">
    The show is completely <span className="font-bold">indoors</span> so don’t let the weather stop you.
  </p>
</div>

    </section>
  );
}
