import React from "react";
import Link from "next/link";

const SectionBreadCrumb02 = () => {
  return (
    <div className="hidden md:flex bg-[#0a1b2b] h-[100px] overflow-hidden">
      <div className="bg-[var(--common-green)] flex justify-end items-center w-[65%] h-full px-[50px]">
        <div className="flex justify-end items-center">
          {/* Home Link */}
          <Link
            href="/"
            className="opacity-50 text-[16px] text-[var(--black)] no-underline transition-opacity duration-300 hover:opacity-100"
          >
            Home
          </Link>

          <img
            src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f50a5b47833d_arrow-r.svg"
            alt=""
            className="opacity-50 w-[15px] mx-[15px]"
          />

          {/* Services Link */}
          <Link
            href="#"
            className="opacity-50 text-[16px] text-[var(--black)] no-underline transition-opacity duration-300 hover:opacity-100"
          >
            Services
          </Link>

          <img
            src="https://cdn.prod.website-files.com/5f6db7c95739ae553edf73eb/5f6db7c954d0f50a5b47833d_arrow-r.svg"
            alt=""
            className="opacity-50 w-[15px] mx-[15px]"
          />

          {/* Current Page Link */}
          <Link
            href="/custom-clearance"
            aria-current="page"
            className="opacity-100 text-[16px] text-[var(--midnight-blue-2)] no-underline"
          >
            <strong>
              Customs Clearance
            </strong>
            <br />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionBreadCrumb02;
