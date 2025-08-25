// src/app/page.tsx
 "use client";
import React from "react";

export default function Parking() {
  return (
    <section className="flex flex-col items-center justify-center px-4  bg-white p-6">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 text-center">
        PARKING
        <div className="mt-4 bg-green-800  w-53 h-0.5"></div>
      </h2>

      {/* Google Map Embed */}
      <div className="w-full max-w-3xl rounded-md shadow-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.47026769861!2d-75.46537252406243!3d40.12254667149548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6929ffaeedb59%3A0x573b9eb8b46e5b93!2sGreater%20Philadelphia%20Expo%20Center!5e0!3m2!1sen!2sus!4v1692458780123!5m2!1sen!2sus"
          width="990%"
          height="791"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          className="w-full h-[350px]"
        ></iframe>
      </div>

      {/* Caption */}
      <p className="mt-4 text-gray-600 text-center font-bold text-1xl">
        Plenty of parking on site
      </p>

      {/* Contact Info */}
      <p className="mt-12 mb-4 text-lg md:text-2xl font-medium text-center text-black">
        Please call{" "}
        <span className="font-extrabold text-black">(800) 290-6886</span> for
        additional information
      </p>
    </section>
  );
}

