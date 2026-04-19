"use client";

import { motion, useAnimate } from "framer-motion";
import { useState } from "react";
import SpinResultModal from "./spin-result-modal";
import HistoryModal from "./history-modal";
import ReceiveSpinModal from "./receive-sprin-modal";
import RuleModal from "./rule-modal";

// Mock API — replace with real endpoint later
const fetchSpinResult = async (): Promise<number> => {
  await new Promise((r) => setTimeout(r, 300));
  return Math.floor(Math.random() * 6) + 1;
};

// Each of the 6 segments occupies 60°.
// Segment N's center is at (N-1)*60 + 30 degrees clockwise from 12 o'clock.
// To align segment N under the 12 o'clock arrow via clockwise rotation:
//   offset = (360 - ((N-1)*60 + 30)) % 360
const getTargetRotation = (currentRotation: number, result: number): number => {
  const segmentCenter = (result - 1) * 60 + 30;
  const targetOffset = (360 - segmentCenter) % 360;
  const currentVisual = currentRotation % 360;
  // How many more degrees from the current visual position to reach the target segment
  const adjustment = (targetOffset - currentVisual + 360) % 360;
  return currentRotation + adjustment + 6 * 360;
};

const Section2 = () => {
  const [spinRef, animate] = useAnimate();
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [spinResult, setSpinResult] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);
  const [showRuleModal, setShowRuleModal] = useState(false);

  const handleSpin = async () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const result = await fetchSpinResult();
    const target = getTargetRotation(currentRotation, result);

    await animate(
      spinRef.current,
      { rotate: target },
      {
        duration: 5,
        ease: [0.17, 0.67, 0.12, 0.99],
      }
    );

    setCurrentRotation(target);
    setSpinResult(result);
    setShowModal(true);
    setIsSpinning(false);
  };

  return (
    <section className="relative w-full aspect-768/780 md:aspect-1920/1080 bg-cover bg-center bg-no-repeat overflow-hidden
    bg-[url('/images/section2_mb-bg.webp')] md:bg-[url('/images/section2_pc-bg.webp')] flex flex-col items-center">
      <img src="/images/section2_pc-title.webp" alt="" className="hidden md:block w-[64.43%] object-contain" />
      <img src="/images/section2_mb-title.webp" alt="" className="md:hidden w-full object-contain" />
      <div className="-mt-[11.5%] md:-mt-[5.5%] w-[46.22%] md:w-[28.96%] flex justify-between">
        <img src="/images/section2_btn-history.webp" alt="" className="w-[28.23%] object-contain img-btn" onClick={() => setShowHistoryModal(true)} />
        <img src="/images/section2_btn-receive-ticket.webp" alt="" className="w-[38.67%] object-contain img-btn" onClick={() => setShowReceiveModal(true)} />
        <img src="/images/section2_btn-rule.webp" alt="" className="w-[28.24%] object-contain img-btn" onClick={() => setShowRuleModal(true)} />
      </div>
      <div className="mt-[1%] w-[53.26%] md:w-[19.22%] aspect-369/41 bg-cover bg-center bg-no-repeat bg-[url('/images/section2_sub-text.webp')] flex items-center justify-center">
        <p className="text-center text-white text-[2vw] md:text-[0.8vw] font-bold">Xin chào, Đại Hiệp đang có <span className="text-yellow-500">XXX</span> lượt quay</p> 
      </div>
      <motion.img
        src="/images/section2_tru-1.webp"
        alt=""
        className="hidden md:block z-10 absolute w-[37.19%] -bottom-[5%] left-[19%] object-contain"
        initial={{ opacity: 0, filter: "blur(12px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.img
        src="/images/section2_tru-2.webp"
        alt=""
        className="hidden md:block z-10 absolute w-[37.19%] -bottom-[5%] right-[19%] object-contain"
        initial={{ opacity: 0, filter: "blur(12px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
      <img src="/images/section2_pc-effect.webp" alt="" className="pointer-events-none z-20 absolute w-full bottom-0 object-cover" />
      <p className="z-40 absolute bottom-[6%] md:bottom-[3%] text-[2.8vw] md:text-[1.2vw] text-[#0E50A8] font-semibold">Điểm hiện tại: 19xxxx</p>

      {/* vong quay */}
      <div className="relative z-30 mt-[1.5%] w-[54.3%] md:w-[32.81%] aspect-630/657 bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col items-center
      bg-[url('/images/section2_vong-quay.webp')]">
        <div className="absolute top-[9%] w-[75.56%] aspect-square bg-cover bg-center bg-no-repeat overflow-hidden
        bg-[url('/images/section2_spin-effect.webp')] flex items-center justify-center">
          <img
            ref={spinRef}
            src="/images/section2_spin-bg.webp"
            alt=""
            className="w-[92%] object-cover"
          />
          <img src="/images/section2_center-arrow.webp" alt="" className="absolute top-[30%] w-[22.48%] object-cover" />
        </div>
        <img
          src="/images/section2_btn-spin.webp"
          alt=""
          className={`absolute bottom-[8%] w-[52.54%] object-contain img-btn transition-opacity ${isSpinning ? "opacity-50 pointer-events-none" : "opacity-100"}`}
          onClick={handleSpin}
        />
      </div>

      <SpinResultModal
        result={showModal ? spinResult : null}
        onClose={() => setShowModal(false)}
      />
      {showHistoryModal && <HistoryModal
        type="checkin"
        onClose={() => setShowHistoryModal(false)}
      />}

      {showReceiveModal && <ReceiveSpinModal
        type="login"
        onClose={() => setShowReceiveModal(false)}
      />}

      {showRuleModal && <RuleModal
        onClose={() => setShowRuleModal(false)}
      />}
    </section>
  );
};

export default Section2;
