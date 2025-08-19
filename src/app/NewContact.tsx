"use client";
import Image from "next/image";

export default function NewContact() {
  return (
    <section className="w-full bg-white py-8">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center px-4">
        
        {/* Top Image */}
        <div className="w-full relative aspect-[16/9] rounded-lg shadow-lg overflow-hidden">
          <Image 
            src="/img3.png" 
            alt="contact" 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 95vw, (max-width: 1280px) 80vw, 1024px"
            priority
          />
        </div>

        {/* Venue Text */}
        <p className="mt-3 text-center text-lg text-black">
          Happening at{" "}
          <span className="font-semibold">
            Greater Philadelphia Expo Center
          </span>
        </p>

        {/* Date and Show Hours Section */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
          
          {/* Dates */}
          <div className="rounded-xl border border-gray-900 p-6 text-black text-center shadow-md bg-white">
            <h2 className="text-2xl font-bold text-green-900 underline decoration-green-800">
              DATES
            </h2>
            <p className="mt-3 text-lg">
              February <span className="font-bold">27th</span> – March{" "}
              <span className="font-bold">2nd</span>
            </p>
          </div>

          {/* Show Hours */}
          <div className="rounded-xl border border-gray-900 p-6 text-black text-center shadow-md bg-white">
            <h2 className="text-2xl font-bold text-green-900 underline decoration-green-800">
              SHOW HOURS
            </h2>
            <ul className="mt-3 space-y-1 text-lg">
              <li>Thursday 12:00 pm – 8:00 pm</li>
              <li>Friday 10:00 am – 8:00 pm</li>
              <li>Saturday 10:00 am – 8:00 pm</li>
              <li>Sunday 11:00 am – 5:00 pm</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
