"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const sections = ["Mission", "Beginning", "Founder", "People", "Values"];

const SectionAnchorLinks = () => {
  const [activeSection, setActiveSection] = useState<string>("Dummy");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          } else {
            setActiveSection("");
          }
        });
      },
      {
        threshold: 0.6, 
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="hidden md:flex items-center h-[100px] sticky top-0 z-[99] bg-[#0a1b2b] border-b border-white/10">
      <div className="flex justify-center items-center w-full max-w-[1240px] h-full mx-auto">
        {sections.map((id) => (
          <Link
            key={id}
            href={`#${id}`}
            className={`mx-[35px] p-5 text-sm font-mono uppercase tracking-[2px] no-underline transition-all duration-300 ${
              activeSection === id
                ? "text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            {id}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SectionAnchorLinks;
