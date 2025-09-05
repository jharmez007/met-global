"use client";
import Image from "next/image";
import img3 from "../public/img3.jpeg";
import img4 from "../public/img4.jpeg";

const SectionContent02 = () => {
  return (
    <div className="bg-[#0a1b2b] flex justify-center items-start px-[5%] py-[80px] md:py-[140px] relative">
      <div className="z-10 w-full max-w-[1240px] relative mx-auto mb-[100px] md:mb-[160px]">
        {/* Mission Section */}
        <div
          id="Mission"
          className="flex flex-col md:flex-row-reverse md:mb-[140px] mb-[80px]"
        >
          {/* Image Block */}
          <div className="flex justify-center items-center w-full md:w-1/2 min-h-[250px] md:min-h-[350px] p-5 md:px-[55px] md:py-[35px] relative">
            <Image
              src={img4}
              alt="Our Mission"
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              priority
            />
            <img
              src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f5dfe7478354_Mask%20Group%201.svg"
              alt="Pattern"
              className="max-w-[200px] md:max-w-[280px] absolute bottom-[4%] left-[6%]"
            />
          </div>

          {/* Content Block */}
          <div className="flex flex-col justify-center items-start w-full md:w-1/2 min-h-[250px] md:min-h-[350px] p-5 md:px-[35px] md:py-[25px]">
            <div className="max-w-[590px] relative">
              <p className="text-[12px] md:text-[14px] font-medium tracking-[3px] uppercase text-[var(--common-green)] mb-2 md:mb-3">
                OUR MISSION
              </p>
              <h2 className="text-white tracking-[-0.5px] mb-4 md:mb-5 text-3xl md:text-4xl font-bold">
                Delivering Seamless Global Freight & Customs Solutions
              </h2>
              <p className="text-white/60 text-sm md:text-base md:max-w-[450px]">
                At MET Connect Global, our mission is to simplify international trade for our clients. 
                We provide end-to-end freight forwarding, efficient customs clearance, and tailored export services. 
                Every shipment is handled with precision, compliance, and reliability — ensuring your cargo reaches its destination without delays.
              </p>

              <div className="flex flex-col md:flex-row mt-6 md:mt-[45px] mb-6 md:mb-[35px] gap-6 md:gap-0">
                <div className="w-full md:w-1/2 md:pr-[25px]">
                  <h5 className="text-[var(--common-green)] text-3xl md:text-[48px] font-normal leading-[1.3]">
                    2019
                  </h5>
                  <h6 className="uppercase text-[12px] md:text-[14px] font-normal tracking-[2px] text-white/60 leading-5 mb-3">
                    YEAR FOUNDED
                  </h6>
                  <p className="text-white/60 text-sm md:text-base md:max-w-[180px]">
                    With the vision of making freight forwarding and clearance 
                    simpler, faster, and more reliable for businesses of all sizes.
                  </p>
                </div>
                <div className="w-full md:w-1/2 md:pr-[25px]">
                  <h5 className="text-[var(--common-green)] text-3xl md:text-[48px] font-normal leading-[1.3] mb-1">
                    1,000+
                  </h5>
                  <h6 className="uppercase text-[12px] md:text-[14px] font-normal tracking-[2px] text-white/60 leading-5 mb-3">
                    CLIENTS & PARTNERS
                  </h6>
                  <p className="text-white/60 text-sm md:text-base md:max-w-[180px]">
                    Trusted by importers, exporters, and global partners who 
                    count on us for efficient cargo movement, compliance, 
                    and dependable logistics solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beginning Section */}
        <div id="Beginning" className="flex flex-col md:flex-row">
          {/* Image Block */}
          <div className="flex justify-center items-center w-full md:w-1/2 min-h-[250px] md:min-h-[350px] p-5 md:px-[55px] md:py-[35px] relative">
            <Image
              src={img3}
              alt="Our Start"
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            <img
              src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f5cb0147835c_wave_tri_06.svg"
              alt="Pattern"
              className="w-24 md:w-50 absolute left-8 bottom-8"
            />
          </div>

          {/* Content Block */}
          <div className="flex flex-col justify-center items-start w-full md:w-1/2 min-h-[250px] md:min-h-[350px] p-5 md:px-[35px] md:py-[25px]">
            <div className="max-w-[590px] relative">
              <p className="text-[12px] md:text-[14px] font-medium tracking-[3px] uppercase text-[var(--common-green)] mb-2 md:mb-3">
                OUR START
              </p>
              <h2 className="text-white tracking-[-0.5px] mb-4 md:mb-5 text-3xl md:text-4xl font-bold">
                We are the best in the domain
              </h2>
              <p className="text-white/60 text-sm md:text-base">
                MET Connect Global began with a clear goal. <br />
                <br />
                To bridge the gap between businesses and global markets. 
                From our early days, we’ve focused on putting clients first by offering transparent, reliable, and efficient freight solutions. 
                Today, we stand as a trusted logistics partner, helping companies expand across borders with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContent02;
