"use client";

import { useState } from "react";

const TOTAL_PAGES = 6;

const Section4 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <section className="relative w-full aspect-750/1334 md:aspect-1920/900 bg-cover bg-center bg-no-repeat overflow-hidden
    bg-[url('/images/section2_mb-bg.webp')] md:bg-[url('/images/section4_pc-bg.webp')] flex flex-col items-center">
      <img src="/images/section4_title.webp" alt="" className="mt-[1%] w-[58.23%] object-contain" />
      <img src="/images/section4_character.webp" alt="" className="z-10 absolute bottom-0 right-[9%] w-[36.30%] object-contain" />
      <img src="/images/section4_effect.webp" alt="" className="z-20 absolute bottom-0 left-0 w-full object-contain" />
      <img src="/images/section4_sub-text.webp" alt="" className="-mt-[4.5%] w-[37.60%] object-contain" />
      <div className="z-20 relative w-[40.99%] aspect-787/512 bg-cover bg-center bg-no-repeat overflow-hidden
      bg-[url('/images/section4_pannel.webp')] flex flex-col items-center">
        <div className="mt-[9%] w-[74.97%] aspect-590/397 flex flex-col overflow-hidden">
          {/* Table header */}
          <div className="flex shrink-0">
            {["STT", "Role Name", "Server", "Zalo ID"].map((col, i) => (
              <div key={i} className="flex-1 text-center text-[1.2vw] font-bold text-[#112D7D]">
                {col}
              </div>
            ))}
          </div>

          {/* Scrollable rows */}
          <div className="flex-1 min-h-0 overflow-y-auto text-[#1053A9] text-[0.8vw] font-semibold">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? "bg-[#D7EDFF]" : ""}`}>
                <div className="flex-1 py-[1%] text-center">1</div>
                <div className="flex-1 py-[1%] text-center">Thiên - Thai</div>
                <div className="flex-1 py-[1%] text-center">Trum Bang Chu</div>
                <div className="flex-1 py-[1%] text-center">123123123</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-[0.5%]">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => {
            const page = i + 1;
            const isActive = page === currentPage;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-[3%] aspect-square flex items-center justify-center text-[0.55vw] font-bold transition-colors border
                  ${isActive
                    ? "bg-[#1B6FAE] text-white border-[#1B6FAE]"
                    : "bg-white text-[#1B6FAE] border-[#A8CCEA] hover:bg-[#D7EDFF]"
                  }`}
              >
                {page}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section4;