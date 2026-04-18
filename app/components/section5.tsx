"use client";

import { useState } from "react";
import ParticipationModal from "./participation-modal";
import NoticeModal from "./notice-modal";

const Section5 = () => {
  const [showParticipationModal, setShowParticipationModal] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  
  return (
    <section className="relative w-full aspect-750/1334 md:aspect-1920/960 bg-cover bg-center bg-no-repeat overflow-hidden
    bg-[url('/images/section2_mb-bg.webp')] md:bg-[url('/images/section5_pc-bg.webp')] flex flex-col items-center">
      <img src="/images/section5_title.webp" alt="" className="mt-[1.5%] w-[58.23%] object-contain" />
      <img src="/images/section5_sub-text.webp" alt="" className="-mt-[7%] w-[40.1%] object-contain" />
      <div className="w-[40.99%] aspect-787/535 bg-cover bg-center bg-no-repeat overflow-hidden
      bg-[url('/images/section5_pannel.webp')] flex flex-col items-center">
        <div className="relative mt-[12%] w-[76.88%] aspect-605/400 flex flex-col overflow-hidden">
          {/* Table header */}
          <div className="flex shrink-0">
            {["STT", "Mốc Nạp", "Vật Phẩm Được Tặng"].map((col, i) => (
              <div
                key={i}
                className={`py-[1.5%] text-center text-[1.2vw] font-bold text-[#112D7D] ${
                  i === 0 ? "w-[15%]" : i === 1 ? "w-[35%]" : "flex-1"
                }`}
              >
                {col}
              </div>
            ))}
          </div>

          {/* Scrollable rows */}
          <div className="flex-1 min-h-0 overflow-y-auto text-[#1053A9] text-[0.8vw] font-semibold">
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
        <img src="/images/section5_btn-join.webp" alt="" className="z-10 absolute bottom-[33%] right-[24.5%] w-[5.99%] object-contain img-btn" onClick={() => setShowParticipationModal(true)} />
        <img src="/images/section5_btn-notice.webp" alt="" className="z-10 absolute bottom-[20%] right-[25.5%] w-[5.05%] object-contain img-btn" onClick={() => setShowNoticeModal(true)} />
      </div>

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