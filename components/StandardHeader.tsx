import Link from "next/link";

const StandardHeader = () => {
  return (
    <section
      className="bg-fixed relative min-h-[70vh] flex items-start pt-30 pb-20 md:pb-40 px-[3%] text-white bg-cover bg-top"
      style={{ backgroundImage: "url('/about-bg.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,27,43,.47)] via-[rgba(10,27,43,.88)] to-[#0a1b2b]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto text-center md:text-left px-6">
        <div className="max-w-2xl">
          {/* Subtitle */}
          <p className="text-[12px] md:text-[14px] font-medium tracking-[3px] uppercase text-[var(--common-green)] mb-5 max-sm:text-sm fade-slide">
            OUR COMPANY
          </p>

          {/* Heading */}
          <h1 className="max-sm:text-2xl text-3xl md:text-6xl font-bold mb-4 fade-slide delay-200">
            More than 50 years of global experience
          </h1>

          {/* Paragraph */}
          <p className="max-sm:text-sm text-lg text-gray-400 mb-14 md:max-w-xl fade-slide delay-400">
            We are one of the leading international suppliers of goods and
            equipment in Health, Transport, Education, Water, Agriculture sector.
            Besides, we advise and assist the Borrowers, and companies in areas
            such as procurement procedures and policies, consulting, management,
            and taking our specialization in designing and implementing the
            projects financed by the Multilateral Development Banks.
          </p>

          {/* Button */}
          <div className="inline-block fade-slide delay-600">
            <Link
              href="#Get-Started"
              className="bg-transparent border hover:bg-white text-white hover:text-black px-8 py-4 font-mono rounded-full font-medium transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardHeader;
