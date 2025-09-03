"use client";

import Image from "next/image";
import Link from "next/link";

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
              With more than 28 years of experience as an International
              Procurement Expert and with the experience of working with The
              World Bank Group, Mr. Gurcharan Singh founded WAH Global Logistics,
              LLC, a company that specializes in international procurement and
              creates an ecosystem of healthcare, mechanical, and industrial
              equipment supply for MDB funded projects.
            </p>
          </div>
        </div>

        {/* Founder Images */}
        <div id="Founder">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5fdc7985df63fe37cfdc403b_0%20(1).jpeg",
              "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5fdc79a2ba9ea5a7ed8a4c12_0%20(2).jpeg",
              "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5fdc79be94ed09a2305f635c_1597581470963.jpeg",
              "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5fdc79dbc1e40d21bbb48f38_1596585867324.jpeg",
              "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5fdc7a2e2700c467056d8c5f_47168811_10157417282666554_884003242743169024_n.jpg",
              "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5fdd13f3d273a38afe3fa277_385918_10150575914741554_819471354_n.jpg",
            ].map((src, idx) => (
              <Link
                href="#"
                key={idx}
                className="block overflow-hidden "
              >
                <img
                  src={src}
                  alt={`Founder ${idx + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-[260px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFounder;
