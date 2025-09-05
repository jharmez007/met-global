import Link from "next/link";
import Image from "next/image";

import img15 from "../public/img15.jpg";
import img10 from "../public/img10.jpg";

const SectionContent = () => {
  return (
    <section
      className="relative bg-[#001632] bg-[url('https://assets-global.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f57c1e478351_bg_shape.svg')] bg-no-repeat bg-left-top bg-contain px-[5%] py-[140px] flex justify-center items-start"
    >
      <div className="w-full">
        {/* OUR SERVICE AREAS */}
        <div id="Get-Started" className="max-w-7xl mx-auto mb-16">
          <div className="mb-16 max-w-3xl md:px-6">
            <p className="text-[12px] md:text-[14px] font-medium tracking-[3px] uppercase text-[var(--common-green)] mb-4 max-sm:text-sm">
              OUR SERVICE AREAS
            </p>
            <h3 className="text-3xl md:text-6xl font-semibold text-white mt-2">
              Expert Solutions in Freight Forwarding, Customs Clearance & Export Services
            </h3>
            <p className="mt-4 text-white/60 leading-relaxed max-w-lg">
              With years of industry experience, we provide businesses with end-to-end logistics 
              support. From managing complex freight forwarding operations to ensuring hassle-free 
              customs clearance, we deliver reliable solutions that keep your supply chain moving. 
              Our export services further help businesses expand confidently into global markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-30 mb-20 md:mb-40 md:px-6">
          {/* Card 1 */}
          <Link
            href="/freight-forwarding"
            className="group bg-white overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-2 flex flex-col min-h-72"
          >
            {/* Image area (relative so overlays can be absolute) */}
            <div className="relative h-70 w-full overflow-hidden">
              <Image
                src={img15} 
                alt="Freight Forwarding"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Decorative wave SVG (bottom-left) */}
              <img
                src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f52794478357_wave_tri_01.svg"
                alt=""
                aria-hidden="true"
                className="w-50 md:w-80 absolute bottom-0 left-0 pointer-events-none z-0 transition-transform duration-300 group-hover:-translate-y-1"
              />
            </div>

            {/* Content */}
            <div className="pt-11 pr-11 pb-12 pl-9 flex flex-col flex-1">
              <h5 className="text-[27px] font-semibold text-gray-900 mb-6">
                Freight Forwarding
              </h5>
              <p className="text-lg text-gray-400 flex-1">
                Seamless freight forwarding solutions by air, sea, and land. 
                We handle planning, routing, and execution to ensure your cargo 
                arrives safely and on time.
              </p>
            </div>

            {/* Green arrow corner (bottom-right) */}
            <div className="flex justify-end">
              <div className="bg-emerald-400 py-5 px-7 rounded-tl-2xl transition-all">
                <img
                  src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f50a5b47833d_arrow-r.svg"
                  alt="Go"
                  className="w-5 transform transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            href="/custom-clearance"
            className="group bg-white overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-2 flex flex-col min-h-72"
          >
            {/* Image area */}
            <div className="relative h-70 w-full overflow-hidden">
              <Image
                src={img10}
                alt="Goods and Equipment Supply"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Decorative wave SVG (top) */}
              <img
                src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f554af478358_wave_tri_03.svg"
                alt=""
                aria-hidden="true"
                className="w-90 absolute top-0 right-0 pointer-events-none z-20 transition-transform duration-300 group-hover:-translate-y-1"
              />
            </div>

            {/* Content */}
            <div className="pt-11 pr-11 pb-12 pl-9 flex flex-col flex-1">
              <h5 className="text-[27px] font-semibold text-gray-900 mb-6">
                Customs Clearance
              </h5>
              <p className="text-lg text-gray-400 flex-1">
                Efficient customs clearance with full compliance. We handle all paperwork 
                and regulations so your shipments clear borders without delays.
              </p>
            </div>

            {/* Green arrow corner (bottom-right) */}
            <div className="flex justify-end">
              <div className="bg-emerald-400 py-5 px-7 rounded-tl-2xl transition-all">
                <img
                  src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f50a5b47833d_arrow-r.svg"
                  alt="Go"
                  className="w-5 transform transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </div>
          </Link>
        </div>
        </div>

        {/* FEATURES */}
        <div className="max-w-7xl mx-auto md:px-6 mb-20 md:mb-50">
          <div className="mb-10">
            <p className="text-[12px] md:text-[14px] font-medium tracking-[3px] uppercase text-[var(--common-green)] mb-4 max-sm:text-sm">
              FEATURES
            </p>
            <h3 className="text-4xl md:text-6xl font-semibold text-white mt-2">
              Core Features
            </h3>
            <p className="mt-4 text-white/60">Reliable freight forwarding, seamless customs clearance, and tailored export support.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {/* Feature Cards */}
            {[
              {
                title: "Global Freight Solutions",
                desc: "Integrated air, sea, and land freight services designed to deliver your cargo on time, anywhere in the world",
                icon: "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6ddc685a85793e1a896d6a_box%20(3).svg",
              },
              {
                title: "Customs Clearance Expertise",
                desc: "We take up the management of customs clearance processes, ensuring compliance and efficiency",
                icon: "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6ddc772847ddf12d82175a_flammable%20(1).svg",
              },
              {
                title: "Timely & Reliable Delivery",
                desc: "We prioritize speed and efficiency, ensuring your goods reach their destination safely and on schedule",
                icon: "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6ddc9c90d82bed8f50f963_do-not-tilt%20(1).svg",
              },
              {
                title: "Tailored Logistics Services",
                desc: "We provide customized logistics solutions to meet your specific needs.",
                icon: "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6ddcaf3b15463814d2cfe8_recycle%20(1).svg",
              },
              {
                title: "End-to-End Support",
                desc: "From pickup to delivery, we manage every stage of your shipment with complete visibility.",
                icon: "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6ddcc0beb762a49b5d1e5e_delivery-truck%20(1).svg",
              },
              {
                title: "Expertise",
                desc: "Years of expertise in freight forwarding and clearance backed by a dedicated professional team.",
                icon: "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6ddccca48510fc95329083_logistics%20(1).svg",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="max-sm:bg-white/5 rounded-2xl max-sm:p-6 py-8 flex flex-col transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={feature.icon} alt="" className="w-8" />
                  <h6 className="text-lg md:text-xl font-semibold text-white">
                    {feature.title}
                  </h6>
                </div>
                <p className="text-sm md:text-base text-white/70 max-w-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContent;

