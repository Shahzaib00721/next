"use client";
import Image from "next/image";

export default function NewContact() {
  return (
    <section className="w-full bg-white  pt-10 pr-20 pl-20">
      {/* Full-screen Image */}
      <div className="relative w-full h-screen">
        <Image
          src="/img3.png"
          alt="contact"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="w-full max-w-5xl mx-auto flex-col items-center px-4 py-12">
        {/* Venue Text */}
        <p className="mt-3 text-center text-lg text-black">
          Happening at{" "}
          <span className="font-semibold">
            Greater Philadelphia Expo Center
          </span>
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 w-full">
  {/* Dates Card */}
  <div className="rounded-xl border border-gray-900 p-6 text-black text-center h-40 shadow-md bg-white">
    <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-green-900 underline decoration-green-800">
      DATES
    </h2>
    <p className="mt-3 text-base sm:text-lg md:text-xl">
      February <span className="font-bold">27th</span> – March <span className="font-bold">2nd</span>
    </p>
  </div>

  {/* Show Hours Card */}
  <div className="rounded-xl border border-gray-900 p-6 text-black text-center shadow-md bg-white">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 underline decoration-green-800">
      SHOW HOURS
    </h2>
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
