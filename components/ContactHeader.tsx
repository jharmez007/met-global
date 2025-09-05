import Link from "next/link";

const ContactHeader = () => {
  return (
    <section
      className="bg-fixed relative min-h-[70vh] flex items-center px-[3%] text-white bg-cover bg-bottom"
      style={{ backgroundImage: "url('/contact-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,27,43,.47)] via-[rgba(10,27,43,.96)] to-[#0a1b2b]" />

      <div className="relative z-10 w-full max-w-7xl flex justify-center mx-auto text-center md:text-left px-6">
        <div className="max-w-2xl flex flex-col items-center justify-center">
          {/* Subtitle */}
          <p className="text-[12px] md:text-[14px] font-medium tracking-[3px] uppercase text-[var(--common-green)] mb-5 max-sm:text-sm fade-slide">
            HERE TO ASSIST
          </p>

          {/* Heading */}
          <h1 className="max-sm:text-2xl text-3xl md:text-6xl font-bold mb-14 fade-slide delay-200">
            Contact Us
          </h1>

          {/* Button */}
          <div className="inline-block fade-slide delay-600">
            <Link
              href="#Get-Started"
              className="flex bg-transparent border hover:opacity-50 text-white  px-8 py-4 font-mono rounded-full font-medium transition"
            >
              <img src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f5573b47835a_phone.svg" alt="" className="w-4 inline-block mr-2"/>
              <div>Call us now</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
