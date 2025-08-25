"use client";
import Image from "next/image";

export default function NewContact() {
  return (
    <section className="w-full bg-white pl-6 pr-6  pb-6">
      {/* Full-screen Image */}
      <div className="">
  <div className="relative w-full mt-40 md:px-[70px]" style={{ minHeight: "300px" }}>
   <div className="relative w-full flex justify-center ">
 <Image
  src="/image 4.svg"
  alt="contact"
  unoptimized
  width={1443}   // fallback width
  height={862}   // fallback height
  className="object-contain 
             w-[1000px]    
             sm:w-[1100px] 
             md:w-[1200px] 
             lg:w-[1300px] 
             xl:w-[1443px] 
             h-auto rounded-lg mx-auto "
  priority
/>



</div>

  </div>
</div>


      {/* Content Section */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center px-4 pb-12 p-6 relative z-10 bg-white">
        {/* Venue Text */}
        <p className="mt-3 text-center text-lg text-black font-poppins">
          Happening at{" "}
          <span className="font-semibold font-poppins">
            Greater Philadelphia Expo Center
          </span>
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 w-full">
          {/* Dates Card */}
          <div className="rounded-4xl border border-gray-900 p-6 text-black text-center h-40 shadow-md bg-white">
            <h2 className="text-4xl sm:text-5xl font-bold text-green-900">
              DATES
            </h2>
            {/* Underline */}
            <div className="w-1/2 mx-auto h-[3px] mt-2 bg-gray-800"></div>

            <p className="mt-3 text-base sm:text-lg md:text-xl">
              February <span className="font-bold">27th</span> – March{" "}
              <span className="font-bold">2nd</span>
            </p>
          </div>

          {/* Show Hours Card */}
          <div className="rounded-4xl border border-gray-900 p-6 text-black text-center shadow-md bg-white">
            <h2 className="text-4xl sm:text-5xl font-bold text-green-900">
              SHOW HOURS
            </h2>
            {/* Underline */}
            <div className="w-3/4 mx-auto h-[3px] mt-2 bg-gray-900"></div>

            <ul className="mt-3 space-y-1 text-sm sm:text-base md:text-lg font-bold">
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
