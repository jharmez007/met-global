"use client";

import { useEffect, useState } from "react";

const states = [
  { name: "Lagos", code: "LOS" },
  { name: "Abuja", code: "ABJ" },
  { name: "Kano", code: "KAN" },
  { name: "Kaduna", code: "KAD" },
  { name: "Rivers", code: "RIV" },
  { name: "Oyo", code: "OYO" },
  { name: "Enugu", code: "ENU" },
  { name: "Anambra", code: "ANA" },
  { name: "Delta", code: "DEL" },
  { name: "Edo", code: "EDO" },
  { name: "Ogun", code: "OGN" },
  { name: "Ondo", code: "OND" },
  { name: "Osun", code: "OSU" },
  { name: "Ekiti", code: "EKI" },
  { name: "Kwara", code: "KWA" },
  { name: "Plateau", code: "PLT" },
  { name: "Niger", code: "NGR" },
  { name: "Benue", code: "BEN" },
  { name: "Kogi", code: "KOG" },
  { name: "Bauchi", code: "BAU" },
  { name: "Borno", code: "BOR" },
  { name: "Yobe", code: "YOB" },
  { name: "Gombe", code: "GOM" },
  { name: "Adamawa", code: "ADM" },
  { name: "Taraba", code: "TAR" },
  { name: "Cross River", code: "CRS" },
  { name: "Akwa Ibom", code: "AKW" },
  { name: "Abia", code: "ABI" },
  { name: "Imo", code: "IMO" },
  { name: "Ebonyi", code: "EBY" },
  { name: "Bayelsa", code: "BAY" },
  { name: "Kebbi", code: "KEB" },
  { name: "Sokoto", code: "SOK" },
  { name: "Zamfara", code: "ZAM" },
  { name: "Jigawa", code: "JIG" },
  { name: "Nasarawa", code: "NAS" },
];

const OfficesCTA = () => {
  const [index, setIndex] = useState(0);

  // Cycle states every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 4) % states.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Show 4 states at a time in chain
  const currentStates = states.slice(index, index + 4).length === 4
    ? states.slice(index, index + 4)
    : [...states.slice(index), ...states.slice(0, 4 - (states.length - index))];

  return (
    <div className="bg-[var(--common-green)] flex justify-center items-center min-h-[600px] px-[3%] py-[100px] relative">
      {/* Container */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto my-auto">
        <h3 className="text-white text-left max-w-[720px] mb-4 text-[50px] md:text-[60px] font-bold leading-[1.1] block">
          Delivery Across Nigeria.
        </h3>

        {/* Location chain */}
        <div className="flex flex-wrap items-center text-xs">
          {currentStates.map((state, i) => (
            <div key={state.code} className="flex items-center">
              <h3 className="text-white text-left text-[50px] md:text-[60px] font-bold leading-[1.1] m-0">
                {state.code}
              </h3>
              {i < currentStates.length - 1 && (
                <img
                  src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f50a5b47833d_arrow-r.svg"
                  alt=""
                  className="mx-[40px] md:mx-[60px]"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Line backgrounds */}
      <div className="absolute inset-0 z-0 flex">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="w-[14.2857%] border-r border-[rgba(255,255,255,0.22)]"
          />
        ))}
      </div>

      {/* Images */}
      <img
        src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f554af478358_wave_tri_03.svg"
        alt=""
        className="absolute top-0 right-0"
      />
      <img
        src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f52794478357_wave_tri_01.svg"
        alt=""
        className="absolute bottom-0 left-0"
      />
    </div>
  );
};

export default OfficesCTA;
