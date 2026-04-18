"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MOCK_LOGIN = [
  { milestone: "Ngày 1", spins: 1 },
  { milestone: "Ngày 2", spins: 2 },
  { milestone: "Ngày 3", spins: 3 },
  { milestone: "Ngày 4", spins: 4 },
  { milestone: "Ngày 5", spins: 5 },
  { milestone: "Ngày 6", spins: 6 },
  { milestone: "Ngày 7", spins: 7 },
];

const MOCK_PAYMENT = [
  { milestone: "20,000 VND", spins: 2 },
  { milestone: "50,000 VND", spins: 5 },
  { milestone: "100,000 VND", spins: 11 },
  { milestone: "200,000 VND", spins: 20 },
  { milestone: "500,000 VND", spins: 35 },
  { milestone: "1,000,000 VND", spins: 50 },
  { milestone: "2,000,000 VND", spins: 75 },
  { milestone: "5,000,000 VND", spins: 100 },
  { milestone: "10,000,000 VND", spins: 175 },
  { milestone: "20,000,000 VND", spins: 250 },
  { milestone: "50,000,000 VND", spins: 600 },
];

const MOCK_SHARE = [
  { milestone: "1 lượt chia sẻ", spins: 1 },
  { milestone: "3 lượt chia sẻ", spins: 3 },
  { milestone: "5 lượt chia sẻ", spins: 5 },
  { milestone: "10 lượt chia sẻ", spins: 10 },
];

const TAB_DATA = {
  login: MOCK_LOGIN,
  payment: MOCK_PAYMENT,
  share: MOCK_SHARE,
};

interface ReceiveTypeModalProps {
  type: "login" | "payment" | "share";
  onClose: () => void;
}

const ReceiveSpinModal = ({ type, onClose }: ReceiveTypeModalProps) => {
  const [activeTab, setActiveTab] = useState<"login" | "payment" | "share">(type);
  const rows = TAB_DATA[activeTab];
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
          className="relative z-10 flex flex-col items-center w-[41.46%] aspect-796/876 bg-cover bg-center bg-no-repeat overflow-hidden bg-[url('/images/section2_receive-spin-bg.webp')]"
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
                className={`flex-1 py-[2%] text-[1vw] font-bold leading-tight transition-colors ${
                  activeTab === "login"
                    ? "bg-[#D85C07] text-[#FAECE7]"
                    : "bg-[#5D8899] text-white"
                }`}
                onClick={() => setActiveTab("login")}
              >
                Đăng nhập
              </button>
              <button
                className={`flex-1 py-[2%] text-[1vw] font-bold leading-tight transition-colors ${
                  activeTab === "payment"
                    ? "bg-[#D85C07] text-[#FAECE7]"
                    : "bg-[#5D8899] text-white"
                }`}
                onClick={() => setActiveTab("payment")}
              >
                Nạp
              </button>
              <button
                className={`flex-1 py-[2%] text-[1vw] font-bold leading-tight transition-colors ${
                  activeTab === "share"
                    ? "bg-[#D85C07] text-[#FAECE7]"
                    : "bg-[#5D8899] text-white"
                }`}
                onClick={() => setActiveTab("share")}
              >
                Chia sẻ tường
              </button>
            </div>

            {/* Table header */}
            <div className="mt-[3%] flex shrink-0 border border-[#1D5B74] bg-[#5D8898]">
              <div className="flex-1 py-[1%] text-center text-[0.8vw] font-semibold text-white border-r border-[#1D5B74]">Mốc</div>
              <div className="flex-1 py-[1%] text-center text-[0.8vw] font-semibold text-white">Số lượt quay</div>
            </div>

            {/* Scrollable rows */}
            <div className="flex-1 min-h-0 overflow-y-auto">
              {rows.map((row, i) => (
                <div key={i} className="flex border-b border-x border-[#1D5B74] bg-white">
                  <div className="flex-1 py-[1.5%] text-center text-[0.8vw] text-black border-r border-[#1D5B74]">{row.milestone}</div>
                  <div className="flex-1 py-[1.5%] text-center text-[0.8vw] text-black">{row.spins}</div>
                </div>
              ))}
            </div>
          </div>
          <img src="/images/section2_history-checkin-close.webp" alt="" className="absolute bottom-0 w-[6.4%] object-contain img-btn" onClick={onClose} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReceiveSpinModal;