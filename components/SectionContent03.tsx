"use client";
import Image from "next/image";
import img5 from "../public/img5.jpeg";
import img6 from "../public/img6.jpeg";

const SectionContent03 = () => {
  return (
    <div className="bg-[#0a1b2b] flex justify-center items-start px-[5%] py-[80px] md:py-[140px] relative">
      <div className="z-10 w-full max-w-[1240px] relative mx-auto mb-[100px] md:mb-[160px]">
        <div
          className="flex flex-col md:flex-row-reverse md:mb-[140px] mb-[80px]"
        >
          {/* Image Block */}
          <div className="flex justify-center items-center w-full md:w-1/2 min-h-[250px] md:min-h-[350px] p-5 md:px-[55px] md:py-[35px] relative">
            <Image
              src={img6}
              alt=""
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
                Expertise
              </p>
              <h2 className="text-white tracking-[-0.5px] mb-4 md:mb-5 text-3xl md:text-4xl font-bold">
                Capacity Building
              </h2>
              <p className="text-white/60 text-sm md:text-base md:max-w-[450px]">
                Our international procurement experts will assess and refine the borrower country's procurement capacity and advise on how to carry out the procurement and operations.<br /><br />

By conducting the capacity assessment, suggesting procedures that could help in capacity building to enter the world of procurement, and meeting the international guidelines and directives, Capacity building helps a borrower in bringing in line their existing policies and procedures in alignment with the MDBs directives for the obtainment the goods and services.
              </p>

              <div className="flex mt-6 md:mt-[45px] mb-6 md:mb-[35px]">
                <div className="w-full md:pr-[25px]">
                  <h5 className="text-[var(--common-green)] text-3xl md:text-[48px] font-normal leading-[1.3] mb-1">
                    1035+
                  </h5>
                  <h6 className="uppercase text-[12px] md:text-[14px] font-normal tracking-[2px] text-white/60 leading-5 mb-5">
                    Successful Projects
                  </h6>
                  <p className="text-white/60 text-sm md:text-base md:max-w-[180px]">
                    We have worked with the best companies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div id="Beginning" className="flex flex-col md:flex-row">
          {/* Image Block */}
          <div className="flex justify-center items-center w-full md:w-1/2 min-h-[250px] md:min-h-[350px] p-5 md:px-[55px] md:py-[35px] relative">
            <Image
              src={img5}
              alt=""
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            <img
              src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f53e86478356_wave_tri_02.svg"
              alt="Pattern"
              className="w-24 md:w-80 absolute right-8 bottom-8"
            />
          </div>

          {/* Content Block */}
          <div className="flex flex-col justify-center items-start w-full md:w-1/2 min-h-[250px] md:min-h-[350px] p-5 md:px-[35px] md:py-[25px]">
            <div className="max-w-[590px] relative">
              <p className="text-[12px] md:text-[14px] font-medium tracking-[3px] uppercase text-[var(--common-green)] mb-2 md:mb-3">
                EXPERTISE
              </p>
              <h2 className="text-white tracking-[-0.5px] mb-4 md:mb-5 text-3xl md:text-4xl font-bold">
                Consulting services
              </h2>
              <p className="text-white/60 text-sm md:text-base">
                With an experience of over 50 years, we bring in the best consultancy for helping our clients in capacity assessments, bringing in line the prerequisites and directives of the borrower country in alignment with the procurement policies and procedures of the MDBs. <br />
                <br />
                Our consulting services involve the development of procurement systems, assisting clients in drafting bidding documents, training operations, and procurement staff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContent03;
