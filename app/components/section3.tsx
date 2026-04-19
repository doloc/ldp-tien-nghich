"use client";

import { useState } from "react";

const TOTAL_PAGES = 10;

const Section3 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const milestones = ["100.000", "200.000", "500.000", "1.000.000", "2.000.000"];
  const activeMilestone = 4; // 0-indexed, last one reached

  return (
    <section className="relative w-full aspect-768/770 md:aspect-1920/1340 bg-cover bg-center bg-no-repeat overflow-hidden
    bg-[url('/images/section3_mb-bg.webp')] md:bg-[url('/images/section3_pc-bg.webp')] flex flex-col items-center">
      <img src="/images/section3_pc-title.webp" alt="" className="hidden md:block mt-[6%] w-[58.23%] object-contain" />
      <img src="/images/section3_mb-title.webp" alt="" className="md:hidden -mt-[2%] w-[85.68%] object-contain" />
      <img src="/images/section3_character.webp" alt="" className="hidden md:block absolute bottom-0 left-0 w-[42.66%] object-contain" />
      <img src="/images/section3_effect.webp" alt="" className="hidden md:block absolute bottom-0 left-0 w-full object-contain" />

      <div className="z-10 absolute top-[23%] md:top-[30%] md:left-[28%] w-[96.75%] md:w-[54.69%] aspect-743/390 md:aspect-1050/550 bg-cover bg-center bg-no-repeat overflow-hidden
      bg-[url('/images/section3_pannel.webp')]">
        <div className="absolute top-[10%] right-[10%] w-[75.14%] aspect-789/453 flex flex-col overflow-hidden">
          {/* Table header */}
          <div className="flex shrink-0">
            {["Hạng", "Tên Bang Hội", "Bang Chủ", "Lực Chiến", "Server"].map((col, i) => (
              <div key={i} className={`${i === 0 ? "flex-1" : "flex-3"} text-center text-[2.4vw] md:text-[1.2vw] font-bold text-[#112D7D]`}>
                {col}
              </div>
            ))}
          </div>

          {/* Scrollable rows */}
          <div className="flex-1 min-h-0 overflow-y-auto text-[#0E50A8] text-[2.2vw] md:text-[0.8vw]">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? "bg-[#D7EDFF]" : ""}`}>
                <div className="flex-1 py-[1%] text-center">1</div>
                <div className="flex-4 py-[1%] text-center">Thien - Thai</div>
                <div className="flex-4 py-[1%] text-center">Trum Bang Chu</div>
                <div className="flex-4 py-[1%] text-center">8,000,999</div>
                <div className="flex-5 py-[1%] text-center">S113 - Danh Kiem</div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="shrink-0 flex items-center justify-start gap-[1%] mt-[2%]">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => {
              const page = i + 1;
              const isActive = page === currentPage;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-[4%] aspect-square flex items-center justify-center text-[2.2vw] md:text-[0.8vw] font-bold transition-colors border
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
      </div>

      <div className="absolute w-[79.43%] md:w-[48.44%] aspect-930/204 bottom-[5%] md:bottom-[10%] md:left-[25%] flex flex-col justify-between">
        <div className="relative flex flex-col">
          {/* Labels row — flex-1 per column so widths are equal */}
          <div className="flex mb-[1%]">
            {milestones.map((label, i) => (
              <div key={i} className="flex-1 flex justify-center">
                {i === activeMilestone ? (
                  <div className="relative flex items-center justify-center w-full aspect-163/47 bg-cover bg-center bg-no-repeat overflow-hidden bg-[url('/images/section3_milstone-highlight.webp')]">
                    <span className="absolute text-[2.2vw] md:text-[1.4vw] font-bold text-[#FEFF6D]">{label}</span>
                  </div>
                ) : (
                  <span className="text-[2.2vw] md:text-[1.4vw] font-bold text-[#FEFF6D] [text-shadow:0_1px_2px_rgba(0,0,0,0.8)] flex items-center justify-center">
                    {label}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Bar + milestone images — flex-1 per column, same widths → guaranteed alignment */}
          <div className="relative w-full h-[2.2vw] md:h-[1.3vw]">
            {/* Bar track */}
            <div className="absolute inset-0 rounded-full bg-[#E1FCFF] border-[0.2vw] border-[#BEEEFF] shadow-inner overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-[90%] rounded-full bg-linear-to-r from-[#E8A800] via-[#FFD700] to-[#FFE566]" />
            </div>
            {/* Milestone images */}
            <div className="absolute inset-0 flex items-center">
              {milestones.map((_, i) => (
                <div key={i} className="flex-1 flex justify-center">
                  <img
                    src="/images/section3_milstone.webp"
                    alt=""
                    className="-mt-[5%] h-[5.4vw] md:h-[3.44vw] object-contain drop-shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chest images — flex-1 per column, same widths → guaranteed alignment */}
        <div className="flex">
          {milestones.map((_, i) => (
            <div key={i} className="flex-1 flex justify-center">
              <img
                src="/images/section3_chest.webp"
                alt=""
                className={`w-[55%] object-contain transition-transform ${
                  i === activeMilestone ? "scale-110" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
