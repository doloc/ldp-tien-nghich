"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import RuleModalGratitude from "./rule-modal-gratitude";

const TOTAL_PAGES = 6;

const Section4 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showRuleModal, setShowRuleModal] = useState(false);

  return (
    <section className="relative w-full aspect-768/620 md:aspect-1920/900 bg-cover bg-center bg-no-repeat overflow-hidden
    bg-[url('/images/section4_mb-bg.webp')] md:bg-[url('/images/section4_pc-bg.webp')] flex flex-col items-center">
      <motion.img
        src="/images/section4_pc-title.webp" alt=""
        className="hidden md:block mt-[1%] w-[58.23%] object-contain"
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <motion.img
        src="/images/section4_mb-title.webp" alt=""
        className="md:hidden -mt-[3.5%] w-[85.68%] object-contain"
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <img src="/images/section2_btn-rule.webp" alt="" className="-mt-[12%] md:-mt-[6.5%] w-[13.02%] md:w-[8.18%] object-contain img-btn" onClick={() => setShowRuleModal(true)} />
      <img src="/images/section4_character.webp" alt="" className="hidden md:block z-10 absolute bottom-0 right-[9%] w-[36.30%] object-contain" />
      <img src="/images/section4_effect.webp" alt="" className="hidden md:block z-20 absolute bottom-0 left-0 w-full object-contain" />

      {/* PC */}
      <motion.img
        src="/images/section4_sub-text.webp" alt=""
        className="hidden md:block relative mt-[1.5%] w-[37.60%] object-contain"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <motion.div
        className="hidden md:flex z-20 relative w-[40.99%] aspect-787/512 bg-cover bg-center bg-no-repeat overflow-hidden
        bg-[url('/images/section4_pannel.webp')] flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
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
                className={`w-[1.2vw] aspect-square flex items-center justify-center text-[0.8vw] font-bold transition-colors border
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
      </motion.div>

      {/* Mobile */}
      <img src="/images/section4_sub-text.webp" alt="" className="md:hidden absolute top-[30%] right-[5%] w-[57.42%] object-contain" />
      <motion.div
        className="md:hidden z-20 absolute top-[35%] right-[5%] w-[61.72%] aspect-787/512 bg-cover bg-center bg-no-repeat overflow-hidden
        bg-[url('/images/section4_pannel.webp')] flex flex-col items-center"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        <div className="mt-[9%] w-[88%] aspect-590/330 flex flex-col overflow-hidden">
          {/* Table header */}
          <div className="flex shrink-0">
            {["STT", "Role Name", "Server", "Zalo ID"].map((col, i) => (
              <div key={i} className={`${i === 0 ? "flex-1" : "flex-4"} text-center text-[2.4vw] md:text-[1.2vw] font-bold text-[#112D7D]`}>
                {col}
              </div>
            ))}
          </div>

          {/* Scrollable rows */}
          <div className="flex-1 min-h-0 overflow-y-auto text-[#1053A9] text-[2.2vw] md:text-[0.8vw] font-semibold">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? "bg-[#D7EDFF]" : ""}`}>
                <div className="flex-1 py-[1%] text-center">1</div>
                <div className="flex-4 py-[1%] text-center">Thiên - Thai</div>
                <div className="flex-4 py-[1%] text-center">Trum Bang Chu</div>
                <div className="flex-4 py-[1%] text-center">123123123</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="md:hidden absolute w-[61.72%] bottom-[10%] right-[5%]">
        <div className="left-0 right-0 flex items-center justify-center gap-[1%]">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => {
              const page = i + 1;
              const isActive = page === currentPage;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-[5vw] aspect-square flex items-center justify-center text-[2.4vw] md:text-[0.55vw] font-bold transition-colors border
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

      {showRuleModal && <RuleModalGratitude
        onClose={() => setShowRuleModal(false)}
      />}
    </section>
  );
};

export default Section4;