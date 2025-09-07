import Link from "next/link";

export default function HomeHero() {
  return (
    <section
      className="bg-fixed relative h-screen flex items-end pb-30 md:pb-40 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/img7.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,27,43,.47)] via-[rgba(16,51,85,.94)] to-[#0a1b2b]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto text-center md:text-left px-6">
        <div className="max-w-2xl">
          <p className="text-[12px] md:text-[14px] font-medium tracking-[3px] uppercase text-[var(--common-green)] mb-4 max-sm:text-sm">
            Global Logistics. Local Expertise.
          </p>
          <h1 className="max-sm:text-2xl text-3xl md:text-4xl font-bold mb-4">
            Your Trusted Partner for Freight Forwarding & Customs Clearance
          </h1>
          <p className="max-sm:text-sm text-lg mb-14">
            At MET Connect and Sons Nigeria Limited, we specialize in seamless freight forwarding and efficient customs clearance, 
            helping businesses move goods across borders with confidence. From import 
            logistics to export support, we provide tailored solutions that keep your cargo 
            moving and your business growing.
          </p>
          <Link
            href="/contact"
            className="bg-[#00d38c] hover:bg-[#00b36b] text-[#001632] px-8 py-4 font-mono rounded-full font-medium transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
