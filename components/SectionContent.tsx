import Link from "next/link";
import Image from "next/image";

import img from "../public/img.jpeg";
import img2 from "../public/img2.jpeg";

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
              International experience in Vetting specific industry for the
              specific Goods and Equipment (Medical and Non-Medical)
            </h3>
            <p className="mt-4 text-white/60 leading-relaxed max-w-lg">
              Carrying an experience of over 50 years, we facilitate goods and
              services for emergency and non-emergency projects financed by
              multilateral development banks such as the World Bank and other
              MDBs. Also, we help in the Capacity building in international
              procurement procedures and policies, consulting services in
              procurement, and the management of development projects.
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
                src={img} 
                alt="International Procurement"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Decorative wave SVG (bottom-left) */}
              <img
                src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f52794478357_wave_tri_01.svg"
                alt=""
                aria-hidden="true"
                className="w-80 absolute bottom-0 left-0 pointer-events-none z-0 transition-transform duration-300 group-hover:-translate-y-1"
              />
            </div>

            {/* Content */}
            <div className="pt-11 pr-11 pb-12 pl-9 flex flex-col flex-1">
              <h5 className="text-[27px] font-semibold text-gray-900 mb-6">
                International Procurement Expertise
              </h5>
              <p className="text-lg text-gray-400 flex-1">
                We support borrower countries and companies that are involved in
                international procurement to structure their procurement systems,
                establish project management units, assist clients in drafting
                bidding documents, training operations, and procurement staff.
                We are the experts in what we do.
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
            href="/export-services"
            className="group bg-white overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-2 flex flex-col min-h-72"
          >
            {/* Image area */}
            <div className="relative h-70 w-full overflow-hidden">
              <Image
                src={img2}
                alt="Goods and Equipment Supply"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Decorative wave SVG (top) */}
              <img
                src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f554af478358_wave_tri_03.svg"
                alt=""
                aria-hidden="true"
                className="w-80 absolute top-0 pointer-events-none z-20 transition-transform duration-300 group-hover:-translate-y-1"
              />
            </div>

            {/* Content */}
            <div className="pt-11 pr-11 pb-12 pl-9 flex flex-col flex-1">
              <h5 className="text-[27px] font-semibold text-gray-900 mb-2">
                Goods and Equipment Supply
              </h5>
              <p className="text-lg text-gray-400 flex-1">
                We are the providers of goods and equipment in various sectors such as
                Health, Transport, Education, Water, Agriculture, and ensure the most
                mutually-beneficial allocation of the required resources by the
                borrower countries and all our clients for all emergency and
                non-emergency projects.
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
            <p className="mt-4 text-white/60">We are the global experts in procurement</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {/* Feature Cards */}
            {[
              {
                title: "Consulting",
                desc: "We provide consulting for the process of procurement",
                icon: "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6ddc685a85793e1a896d6a_box%20(3).svg",
              },
              {
                title: "Management",
                desc: "We take up the management of development projects",
                icon: "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6ddc772847ddf12d82175a_flammable%20(1).svg",
              },
              {
                title: "Emergency and Non-emergency Projects",
                desc: "We provide services in both emergency and non-emergency projects",
                icon: "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6ddc9c90d82bed8f50f963_do-not-tilt%20(1).svg",
              },
              {
                title: "Capacity Building",
                desc: "We pitch in for Capacity building in international procurement procedures and policies",
                icon: "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6ddcaf3b15463814d2cfe8_recycle%20(1).svg",
              },
              {
                title: "International Supply",
                desc: "We are suppliers of goods related to Health, Transport, Education, Water, and Agriculture",
                icon: "https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6ddcc0beb762a49b5d1e5e_delivery-truck%20(1).svg",
              },
              {
                title: "Expertise",
                desc: "We have decades of experience in Designing and implementing projects funded by development banks",
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

