import Link from "next/link";

const SectionCTA = () => {
  const LINES = 6; 

  return (
    <section className="flex justify-center items-center px-5  bg-white relative">
      <div className="relative isolate bg-[#00D187] py-16 w-full max-w-7xl overflow-hidden -translate-y-18">
        {/* Vertical decorative lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {Array.from({ length: LINES }).map((_, i) => (
            <span
              key={i}
              className="absolute top-0 bottom-0 w-px bg-white/20"
              style={{ left: `${((i + 1) * 100) / (LINES + 1)}%` }}
            />
          ))}
        </div>

        {/* CTA Content */}
        <div className="relative z-10 text-center text-white px-6 py-16 md:py-20">
          <h3 className="text-5xl md:text-6xl font-bold mb-4">
            Trusted and Supportive
          </h3>
          <p className="mb-8 max-w-xl mx-auto text-base md:text-lg">
            We are one of the most trusted service providers in freight
            forwarding and customs clearance. It is a great responsibility, and we cherish it.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Link
              href="/contact"
              className="bg-[#0E1B2C] text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition"
            >
              Get a Quote
            </Link>
            <Link
              href="/about"
              className="text-white font-medium hover:opacity-80 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Decorative curved lines (bottom-left) */}
        <img
          src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f5dfe7478354_Mask%20Group%201.svg"
          alt="Decorative Shape"
          className="absolute bottom-0 left-0 w-80 z-20 select-none pointer-events-none"
        />
      </div>
    </section>
  );
};

export default SectionCTA;
