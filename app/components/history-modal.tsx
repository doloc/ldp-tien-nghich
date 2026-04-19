"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MOCK_CHECKIN = [
  { date: "02-06-2026", note: 2 },
  { date: "02-06-2026", note: 5 },
  { date: "02-06-2026", note: 11 },
  { date: "02-06-2026", note: 20 },
  { date: "02-06-2026", note: 35 },
  { date: "02-06-2026", note: 50 },
  { date: "02-06-2026", note: 75 },
  { date: "02-06-2026", note: 100 },
  { date: "02-06-2026", note: 175 },
  { date: "02-06-2026", note: 250 },
  { date: "02-06-2026", note: 600 },
];

const MOCK_SPIN = [
  { date: "02-06-2026", reward: 2, note: 2 },
  { date: "02-06-2026", reward: 5, note: 5 },
  { date: "02-06-2026", reward: 11, note: 11 },
  { date: "02-06-2026", reward: 20, note: 20 },
  { date: "02-06-2026", reward: 35, note: 35 },
  { date: "02-06-2026", reward: 50, note: 50 },
  { date: "02-06-2026", reward: 75, note: 75 },
  { date: "02-06-2026", reward: 100, note: 100 },
  { date: "02-06-2026", reward: 175, note: 175 },
  { date: "02-06-2026", reward: 250, note: 250 },
  { date: "02-06-2026", reward: 600, note: 600 },
];

interface HistoryTypeModalProps {
  type: "checkin" | "spin";
  onClose: () => void;
}

const HistoryModal = ({ type, onClose }: HistoryTypeModalProps) => {
  const [activeTab, setActiveTab] = useState<"checkin" | "spin">(type);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          className="relative z-10 flex flex-col items-center w-full md:w-[41.46%] aspect-796/876 bg-cover bg-center bg-no-repeat overflow-hidden bg-[url('/images/section2_history-checkin-bg.webp')]"
          initial={{ scale: 0.7, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.7, opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mt-[30%] w-[44.22%] aspect-352/477 flex flex-col overflow-hidden">
            {/* Tabs */}
            <div className="flex shrink-0">
              <button
                className={`flex-1 py-[2%] text-[2.4vw] md:text-[1vw] font-bold leading-tight transition-colors ${
                  activeTab === "checkin"
                    ? "bg-[#D85C07] text-[#FAECE7] font-bold"
                    : "bg-[#5D8899] text-white"
                }`}
                onClick={() => setActiveTab("checkin")}
              >
                Lịch sử điểm danh
              </button>
              <button
                className={`flex-1 py-[2%] text-[2.4vw] md:text-[1vw] font-bold leading-tight transition-colors ${
                  activeTab === "spin"
                    ? "bg-[#D85C07] text-[#FAECE7] font-bold"
                    : "bg-[#5D8899] text-white"
                }`}
                onClick={() => setActiveTab("spin")}
              >
                Lịch sử nhận lượt
              </button>
            </div>

            {activeTab === "checkin" && (
              <>
                {/* Table header */}
                <div className="mt-[3%] flex shrink-0 border border-[#1D5B74] bg-[#5D8898]">
                  <div className="flex-1 py-[1%] text-center text-[2.2vw] md:text-[0.8vw] font-semibold text-white border-r border-[#1D5B74]">Thời gian</div>
                  <div className="flex-1 py-[1%] text-center text-[2.2vw] md:text-[0.8vw] font-semibold text-white">Ghi chú</div>
                </div>

                {/* Scrollable rows */}
                <div className="flex-1 min-h-0 overflow-y-auto ">
                  {MOCK_CHECKIN.map((row, i) => (
                    <div key={i} className="flex border-b border-x border-[#1D5B74] bg-white">
                      <div className="flex-1 py-[1.5%] text-center text-[2.2vw] md:text-[0.8vw] text-black border-r border-[#1D5B74]">{row.date}</div>
                      <div className="flex-1 py-[1.5%] text-center text-[2.2vw] md:text-[0.8vw] text-black">{row.note}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "spin" && (
              <>
                {/* Table header */}
                <div className="mt-[3%] flex shrink-0 border border-[#1D5B74] bg-[#5D8898]">
                  <div className="flex-1 py-[1%] text-center text-[2.2vw] md:text-[0.8vw] font-semibold text-white border-r border-[#1D5B74]">Thời gian</div>
                  <div className="flex-1 py-[1%] text-center text-[2.2vw] md:text-[0.8vw] font-semibold text-white border-r border-[#1D5B74]">Phần thưởng</div>
                  <div className="flex-1 py-[1%] text-center text-[2.2vw] md:text-[0.8vw] font-semibold text-white">Ghi chú</div>
                </div>

                {/* Scrollable rows */}
                <div className="flex-1 min-h-0 overflow-y-auto">
                  {MOCK_SPIN.map((row, i) => (
                    <div key={i} className="flex border-b border-x border-[#1D5B74] bg-white">
                      <div className="flex-1 py-[1.5%] text-center text-[2.2vw] md:text-[0.8vw] text-black border-r border-[#1D5B74]">{row.date}</div>
                      <div className="flex-1 py-[1.5%] text-center text-[2.2vw] md:text-[0.8vw] text-black border-r border-[#1D5B74]">{row.reward}</div>
                      <div className="flex-1 py-[1.5%] text-center text-[2.2vw] md:text-[0.8vw] text-black">{row.note}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <img src="/images/section2_history-checkin-close.webp" alt="" className="absolute bottom-0 w-[6.4%] object-contain img-btn" onClick={onClose} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
export default HistoryModal;