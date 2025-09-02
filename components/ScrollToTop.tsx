"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"; 

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#00d38c] text-white shadow-lg hover:bg-[#00b36b] transition-all"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    )
  );
}

export default ScrollToTop;
