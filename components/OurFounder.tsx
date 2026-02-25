"use client";

import Image from "next/image";
import Link from "next/link";

import img from "../public/image9.jpeg";
import img1 from "../public/image4.jpeg";
import img3 from "../public/image6.jpeg";
import img4 from "../public/image7.jpeg";
import img5 from "../public/image8.jpeg";
import img6 from "../public/image10.jpeg";


const OurFounder = () => {
  return (
    <div className="bg-white py-16">
      {/* Container */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row max-w-[860px] mb-16 md:mb-24">
          <div className="w-full md:w-1/2 md:ml-[70px] mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-[#0b213f] tracking-[-0.5px]">
              About The Founder
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base leading-relaxed text-gray-600">
              With a decade of experience in freight forwarding, customs
              clearance, and international trade, <strong>Mr. Sani Usman Abba</strong> founded
              MET Connect and Sons Nigeria Limited with a clear vision: to simplify cargo movement for
              businesses and exporters across the globe. Driven by a passion for
              logistics excellence and client-focused solutions, he established the
              company to deliver reliable, transparent, and efficient services that
              keep trade moving seamlessly.
            </p>
          </div>
        </div>

        {/* Founder Images Gallery */}
        <div id="Founder">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Primary Featured Image */}
            <div className="lg:col-span-2 lg:row-span-2">
              <Link
                href="#"
                className="group relative block overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
              >
                <div className="relative w-full bg-gray-100 overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-full">
                  <Image
                    src={img1}
                    alt="Founder Portrait - Primary"
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </div>

            {/* Secondary Images Grid */}
            {[
              { src: img, alt: "Founder Portrait 1" },
              { src: img3, alt: "Founder Portrait 3" },
              { src: img4, alt: "Founder Portrait 4" },
              { src: img5, alt: "Founder Portrait 5" },
              { src: img6, alt: "Founder Portrait 6" },
            ].map((item, idx) => (
              <Link
                href="#"
                key={idx}
                className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full bg-gray-100 overflow-hidden aspect-[3/4]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFounder;
