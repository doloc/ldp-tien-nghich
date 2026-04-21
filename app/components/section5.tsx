"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ParticipationModal from "./participation-modal";
import NoticeModal from "./notice-modal";

const Section5 = () => {
  const [showParticipationModal, setShowParticipationModal] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  
  return (
    <section className="relative w-full aspect-768/557 md:aspect-1920/960 bg-cover bg-center bg-no-repeat overflow-hidden
    bg-[url('/images/section5_mb-bg.webp')] md:bg-[url('/images/section5_pc-bg.webp')] flex flex-col items-center">
      <motion.img
        src="/images/section5_pc-title.webp" alt=""
        className="hidden md:block mt-[1.5%] w-[58.23%] object-contain"
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <motion.img
        src="/images/section5_mb-title.webp" alt=""
        className="md:hidden -mt-[2%] w-[85.68%] object-contain"
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <motion.img
        src="/images/section5_sub-text.webp" alt=""
        className="-mt-[15%] md:-mt-[7%] w-[58.98%] md:w-[40.1%] object-contain"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <motion.div
        className="w-[73.18%] md:w-[40.99%] aspect-562/341 md:aspect-787/535 bg-cover bg-center bg-no-repeat overflow-hidden
        bg-[url('/images/section5_mb-pannel.webp')] md:bg-[url('/images/section5_pc-pannel.webp')] flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        <div className="relative mt-[8%] md:mt-[12%] w-[88%] md:w-[76.88%] aspect-478/263 md:aspect-605/400 flex flex-col overflow-hidden">
          {/* Table header */}
          <div className="flex shrink-0">
            {["STT", "Mốc Nạp", "Vật Phẩm Được Tặng"].map((col, i) => (
              <div
                key={i}
                className={`py-[1.5%] text-center text-[2.4vw] md:text-[1.2vw] font-bold text-[#112D7D] ${
                  i === 0 ? "w-[15%]" : i === 1 ? "w-[35%]" : "flex-1"
                }`}
              >
                {col}
              </div>
            ))}
          </div>

          {/* Scrollable rows */}
          <div className="flex-1 min-h-0 overflow-y-auto text-[#1053A9] text-[2.2vw] md:text-[0.8vw] font-semibold">
            {[
              { stt: 1, moc: "129.000" },
              { stt: 2, moc: "229.000" },
              { stt: 3, moc: "379.000" },
              { stt: 4, moc: "749.000" },
              { stt: 5, moc: "1.299.000" },
              { stt: 6, moc: "2.499.000" },
              { stt: 7, moc: "4.998.000" },
            ].map((row, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? "bg-[#D7EDFF]" : ""}`}>
                <div className="w-[15%] py-[1.5%] text-center">{row.stt}</div>
                <div className="w-[35%] py-[1.5%] text-center">{row.moc}</div>
                <div className="flex-1 py-[1.5%] text-center">xxxxx</div>
              </div>
            ))}
          </div>
          
        </div>
        <img src="/images/section5_btn-join.webp" alt="" className="z-10 absolute bottom-[30%] md:bottom-[33%] right-[4.5%] md:right-[24.5%] w-[10.4%] md:w-[5.99%] object-contain img-btn" onClick={() => setShowParticipationModal(true)} />
        <img src="/images/section5_btn-notice.webp" alt="" className="z-10 absolute bottom-[14%] md:bottom-[20%] right-[6.5%] md:right-[25.5%] w-[8.72%] md:w-[5.05%] object-contain img-btn" onClick={() => setShowNoticeModal(true)} />
      </motion.div>

      {showParticipationModal && <ParticipationModal
        onClose={() => setShowParticipationModal(false)}
      />}

      {showNoticeModal && <NoticeModal
        onClose={() => setShowNoticeModal(false)}
      />}
    </section>
  );
};

export default Section5;