"use client";
import Image from "next/image";

export default function Home() {
  const cards = [
    {
      title: "ADULTS",
      image: "/img.png",
      location: "Great Expo Center",
      price: "$13.0",
    },
    {
      title: "CHILDREN",
      image: "/img.png",
      location: "Great Expo Center",
      price: "$8.0",
    },
    {
      title: "VIP",
      image: "/img.png",
      location: "Great Expo Center",
      price: "$25.0",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      
      {/* Center heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#275640] mb-10 text-center">
        TICKET PRICES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-[280px] sm:w-[320px] bg-[#275640] rounded-t-[0px] rounded-b-none overflow-hidden text-white mx-auto"
          >
            {/* Top circular notch */}
            <div className="absolute -top-[25px] left-1/2 -translate-x-1/2 w-[50px] h-[50px] bg-gray-100 rounded-full z-10" />

            {/* Content */}
            <div className="flex flex-col items-center px-4 pt-8 pb-4">
              <h2 className="text-lg font-bold mb-3">{card.title}</h2>
              <div className="w-full flex justify-center">
                <Image
                  src={card.image}
                  alt={card.location}
                  width={200}
                  height={120}
                  className="rounded-md object-cover"
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-4 pb-4">
              <div className="flex items-center gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 
                       7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 
                       0-2.5-1.12-2.5-2.5s1.12-2.5 
                       2.5-2.5 2.5 1.12 2.5 
                       2.5-1.12 2.5-2.5 2.5z"
                  />
                </svg>
                <span>{card.location}</span>
              </div>
              <div className="text-right">
                <span className="block text-xs">From</span>
                <span className="block text-2xl font-bold">{card.price}</span>
              </div>
            </div>

            {/* Bottom perforation */}
            <div className="relative">
              <div className="h-3 bg-gray-100 flex">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-3 bg-[#275640] rounded-t-full"
                  />
                ))}
              </div>
              <div className="bg-[#275640] h-12 transform rotate-[-2deg]" />

              
            </div>
            
          </div>
          
        ))}
        
      </div>
      <h3 className="text-1xl md:text-2xl font-bold text-black mb-10 text-center mt-10">
        *Tickets can be purchased at the door
      </h3>
    </div>
  );
}
