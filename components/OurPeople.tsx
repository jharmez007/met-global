"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurPeople = () => {
  return (
    <div className="bg-white bg-[url('https://assets-global.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f5d2c14782e4_bg_shade.svg')] bg-no-repeat bg-cover justify-center items-start py-20 px-[5%] md:py-[160px]">
      {/* Our People Section */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto">
        <div className="flex flex-col md:flex-row max-w-[860px] mb-16 md:mb-[100px] gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl text-[#0b213f] font-bold tracking-[-0.5px] mb-5">
              Our People
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-slate-600 text-left text-base md:text-lg leading-relaxed mb-4">
              At MET Connect Global Services, our people make the difference. 
              From freight forwarding experts to customs clearance specialists, 
              our team works with one goal in mind — moving your cargo smoothly, safely, and on time.
            </p>
          </div>
        </div>
      </div>

      {/* People Grid */}
      <div id="People" className="relative z-10 w-full max-w-[1240px] mx-auto flex justify-center md:justify-end -top-10 md:-top-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-full md:max-w-[70%] mt-10 md:mt-[60px]">
          {[
            "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f7b074472bcbe3ee5da57fc_IMG_0591-min.png",
            "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f7b072172bcbe1accda57e0_IMG_3496-min.png",
            "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f7b076124cbf3b8a703fe34_IMG_0020-min.png",
            "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f7b077a793e7f98694ee522_IMG_3875-min.png",
            "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f7b0a2893f475484c3cef8e_IMG_9577-min.png",
            "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f88a9aedc059f38550ecd9f_Gurcharan%27s%20dauter.jpeg",
            "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f9863d44754d59f092af21e_Wahglobal1.jpeg",
          ].map((src, idx) => (
            <div key={idx} className="inline-block max-w-full">
              <img
                src={src}
                alt={`Team member ${idx + 1}`}
                width={400}
                height={400}
                className="w-full h-auto mx-auto relative"
              />
            </div>
          ))}

          {/* CTA Button */}
          <Link
            href="/contact"
            className="sm:absolute bottom-[10%] left-[55%] bg-[#00d38c] text-[#001632] rounded-full px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium mt-6 inline-block text-center font-mono"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Values Section */}
      <div id="Values" className="relative z-10 w-full max-w-[1240px] mx-auto mt-20 md:mt-[140px]">
        <div
          className="w-full min-h-[400px] md:min-h-[700px] mb-8 md:mb-20 relative bg-[url('https://assets-global.website-files.com/5f6db7c95739ae553edf73eb/5f75b902278e8a47e3fb3e94_our%20values-about-min.JPG')] bg-cover bg-center"
        >
          <div className="bg-white md:min-w-[450px] min-h-[120px] absolute bottom-0 left-0 p-[65px] pl-[25px]">
            <h2 className="text-4xl text-[#0b213f] font-bold">Our Values</h2>
            <div className="bg-[#00d38c] w-[70px] h-[2px] mt-[35px]" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap">
          {[
            {
              title: "Delivery",
              desc: `At MET Connect Global Services, we know timing is everything in logistics.

That’s why we focus on speed, precision, and efficiency in moving your cargo across borders. From documentation to final delivery, we ensure your goods arrive safely and on schedule.`,
              btn: { text: "Get in Touch", link: "/contact" },
            },
            {
              title: "Support",
              desc: `International shipping can feel complex — we’re here to simplify it.

At MET Connect Global Services, we understand the value of support in the management of projects and stand firm to deliver the same.`,
              btn: {
                text: "Get a Quote",
                link: "/contact",
              },
            },
            {
              title: "Trust",
              desc: `Trust is the foundation of every lasting partnership. Our clients rely on us to navigate regulations, safeguard their cargo, and act in their best interest.

We build that trust through transparency, consistent service, and a proven record of delivering results.`,
              btn: { text: "Learn More", link: "/contact" },
            },
          ].map((value, idx) => (
            <div key={idx} className="w-full md:w-1/3 min-h-[250px] max-sm:mb-12 p-4">
              <h3 className="text-3xl font-semibold mb-4 md:mb-6 text-slate-800">
                {value.title}
              </h3>
              <div className="min-h-[200px] md:min-h-[250px]">
                <p className="text-slate-500 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {value.desc}
                </p>
              </div>
              <Link
                href={value.btn.link}
                className="bg-[#00d38c] text-[#001632] rounded-full px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium mt-12 inline-block text-center font-mono"
              >
                {value.btn.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
