"use client";

import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="relative bg-[var(--background)] flex justify-center items-start px-[5%] pt-10 pb-36">
      <div className="relative z-10 w-full max-w-[1240px] mx-auto">
        <div className="mt-20 flex flex-col md:flex-row">
          {/* Left: Map / Image */}
          <div className="relative flex justify-center items-center w-full md:w-1/2 min-h-[350px] pr-0 md:pr-14">
            <img
              src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/610aae68f3ced9e4f513c5be_office.jpeg"
              alt="Office"
              width={1000}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center items-start w-full md:w-1/2 min-h-[350px] px-6 md:px-9">
            {/* Contact Us */}
            <div className="my-12">
              <p className="text-[14px] font-medium tracking-[3px] uppercase text-[var(--common-green)] mb-3">
                CONTACT US
              </p>
              <p className="max-w-[490px] text-[rgba(255,255,255,.52)]">
                Please feel free to reach out to us via email below and we will
                get back to you as soon as possible.
              </p>
              <a
                href="mailto:info@wahgloballogistics.com?subject=Hello."
                className="inline-block mt-6 bg-[var(--common-green)] text-[#001632] rounded-full px-9 py-4 text-lg font-medium"
              >
                Chat with us
              </a>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[rgba(255,255,255,.2)] my-14" />

            {/* Contact Details */}
            <div>
              <p className="text-[14px] font-medium tracking-[3px] uppercase text-[var(--common-green)] mb-3">
                CONTACT DETAILS
              </p>
              <p className="max-w-[490px] text-[rgba(255,255,255,.52)]">
                Email:{" "}
                <a
                  href="mailto:info@metgloballogistics.com"
                  className="text-[var(--common-green)]"
                >
                  info@metgloballogistics.com
                </a>
                <br />
                Phone:{" "}
                <a
                  href="tel:+2347039216348"
                  className="text-[var(--common-green)]"
                >
                  234-703-921-6348
                </a>
                <br />
                LinkedIn:{" "}
                <Link
                  href="https://www.linkedin.com/in/gurcharan-singh-guru-53888913/"
                  target="_blank"
                  className="text-[var(--common-green)] no-underline"
                >
                  @gurucharan-singh
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Shape */}
      <img
        src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f5dfe7478354_Mask%20Group%201.svg"
        alt="Shape Pattern"
        width={500}
        height={200}
        className="absolute bottom-0 left-0 w-50 md:w-auto md:h-auto"
      />
    </section>
  );
};

export default ContactSection;
