import Link from "next/link";

const StandardHeader03 = () => {
  return (
    <section
      className="bg-fixed relative min-h-[70vh] flex items-center px-[3%] text-white bg-cover bg-bottom"
      style={{ backgroundImage: "url('/export-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,27,43,.47)] via-[rgba(10,27,43,.96)] to-[#0a1b2b]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto text-center md:text-left px-6">
        <div className="max-w-2xl">
          {/* Subtitle */}
          <p className="text-[12px] md:text-[14px] font-medium tracking-[3px] uppercase text-[var(--common-green)] mb-5 max-sm:text-sm fade-slide">
            Customs Clearance
          </p>

          {/* Heading */}
          <h1 className="max-sm:text-2xl text-3xl md:text-6xl font-bold mb-4 fade-slide delay-200">
            Clear Borders. Move Forward.
          </h1>

          {/* Paragraph */}
          <p className="max-sm:text-sm text-lg text-gray-400 mb-14 md:max-w-xl fade-slide delay-400">
            We take the complexity out of customs 
            clearance. From accurate documentation to duty management and compliance, 
            our experts ensure your cargo clears borders quickly and without 
            unnecessary delays — so your business keeps moving forward.
          </p>

          {/* Button */}
          <div className="inline-block fade-slide delay-600">
            <Link
              href="/contact"
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

export default StandardHeader03;
