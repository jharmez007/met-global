import Link from "next/link";
import { StandardHeader03, SectionContent04, SectionBreadCrumb02,  OfficesCTA, ScrollToTop  } from "../../../components";

export default function ClearancePage() {
  return (
    <div>
      <StandardHeader03 />
      <SectionBreadCrumb02 />
      <SectionContent04 />
      <div className="bg-white py-10 md:py-20 px-3">
        <div className="relative z-10 w-full max-w-[1240px] mx-auto mt-20 mb-40  bg-white ">
        <div
          style={{ backgroundImage: "url('../../img11.jpg')" }}
          className="w-full min-h-[400px] md:min-h-[700px] mb-8 md:mb-20 relative bg-cover bg-center"
        >
          <div className="bg-white md:min-w-[450px] min-h-[120px] absolute bottom-0 left-0 p-[65px] pl-[25px]">
            <h2 className="text-4xl text-[#0b213f] font-bold">Commited to excellence</h2>
            <div className="bg-[#00d38c] w-[70px] h-[2px] mt-[35px]" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap">
          {[
            {
              title: "Benefit",
              desc: `We know that in logistics, time is everything. That’s why our freight forwarding and customs clearance services are built to save you time, reduce costs, and eliminate unnecessary delays.

With MET Connect Global Services, you gain the benefit of a partner who keeps your cargo moving.`,
              btn: { text: "Get in Touch", link: "/contact" },
            },
            {
              title: "Commitment",
              desc: `At MET Connect Global Services, commitment means more than just moving goods. It means standing by our clients at every stage of the supply chain — from documentation to final delivery.

We are committed to reliability, transparency, and proactive support, so you can focus on your business while we handle the complexities of global trade.`,
              btn: {
                text: "Get a Quote",
                link: "/contact",
              },
            },
            {
              title: "Expertise",
              desc: `With years of experience in international shipping and border compliance, our team brings unmatched expertise to every transaction. 

We are a dedicated team of retirees and consultants in an attempt to establish trust with ministries and project management units.`,
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
      <OfficesCTA />
      <ScrollToTop />
    </div>
  );
}