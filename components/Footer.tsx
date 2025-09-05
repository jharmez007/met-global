"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

import logo from "../public/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-[#ebecf0] border-t border-gray-200 text-[#5f6b76] text-base font-mono">
      <div className="max-w-7xl mx-auto px-[5%] pb-8 pt-35">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-15">
          {/* Column Large: Logo + Contact */}
          <div className="flex flex-col items-start gap-4 md:w-[360px]">
            <Image
              src={logo}
              alt="Wah Global Logistics"
              width={92}   
              height={56}  
              priority
            />

            <Link
              href="#"
              className="flex items-start gap-3 hover:text-black transition-colors"
            >
              <MapPin className="h-5 w-5 text-[#243444] mt-[2px]" />
              <p className="text-[14px] leading-5">
                7th Avenue A1 Close Festac Town Lagos
              </p>
            </Link>

            <Link
              href="mailto:info@metgloballogistics.com"
              className="flex items-start gap-3 hover:text-black transition-colors"
            >
              <Mail className="h-5 w-5 text-[#243444] mt-[2px]" />
              <p className="text-[14px] leading-5">
                info@metgloballogistics.com
              </p>
            </Link>

            <Link
              href="tel:+2347039216348"
              className="flex items-start gap-3 hover:text-black transition-colors"
            >
              <Phone className="h-5 w-5 text-[#243444] mt-[2px]" />
              <p className="text-[14px] leading-5">+234 703 921 6348</p>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
            {/* Column: Company */}
            <div className="flex flex-col items-start gap-2">
              <div className="text-[15px] font-semibold text-[#0b2b4f] mb-2">
                Company
              </div>
              <Link href="/" className="text-[14px] leading-6 hover:text-black">
                Home
              </Link>
              <Link
                href="/about"
                className="text-[14px] leading-6 hover:text-black"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-[14px] leading-6 hover:text-black"
              >
                Contact
              </Link>
            </div>

            {/* Column: Services */}
            <div className="flex flex-col items-start gap-2">
              <div className="text-[15px] font-semibold text-[#0b2b4f] mb-2">
                Services
              </div>
              <Link
                href="/freight-forwarding"
                className="text-[14px] leading-6 hover:text-black"
              >
                Freight Forwarding
              </Link>
              <Link
                href="/custom-clearance"
                className="text-[14px] leading-6 hover:text-black"
              >
                Customs Clearance
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 mt-10 pt-6 gap-6">
          <div className="text-[12px] text-[#b6bcc1] text-center md:text-left">
            {`Copyright @ ${new Date().getFullYear()} Met Connect Global Services.`}
          </div>
          <div className="flex gap-4">
            <Link
              href="https://twitter.com/madebyflowcraft"
              target="_blank"
              className="hover:text-black transition-colors"
            >
              <Twitter className="h-5 w-5 text-[#243444]" />
            </Link>
            <Link
              href="https://www.instagram.com/madebyflowcraft/"
              target="_blank"
              className="hover:text-black transition-colors"
            >
              <Instagram className="h-5 w-5 text-[#243444]" />
            </Link>
            <Link
              href="https://gumroad.com/flowcraft"
              target="_blank"
              className="hover:text-black transition-colors"
            >
              <Facebook className="h-5 w-5 text-[#243444]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

