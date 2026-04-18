"use client";

import { motion, AnimatePresence } from "framer-motion";

const PRIZES: Record<number, string> = {
  1: "Phần thưởng 1",
  2: "Phần thưởng 2",
  3: "Phần thưởng 3",
  4: "Phần thưởng 4",
  5: "Phần thưởng 5",
  6: "Phần thưởng 6",
};

interface SpinResultModalProps {
  result: number | null;
  onClose: () => void;
}

const SpinResultModal = ({ result, onClose }: SpinResultModalProps) => {
  const prize = result !== null ? PRIZES[result] : null;

  return (
    <AnimatePresence>
      {result !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70" />
          {result === 1 && <motion.div
            className="relative z-10 flex flex-col items-center w-[32.4%] aspect-622/526 bg-cover bg-center bg-no-repeat overflow-hidden bg-[url('/images/section2_reward-1-bg.webp')]"
            initial={{ scale: 0.7, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/images/section2_reward-1-title.webp" alt="" className="w-[75.24%] object-contain" />
            <img src="/images/section2_reward-1-name.webp" alt="" className="absolute bottom-[3%] w-full object-contain" />
            <img src="/images/section2_reward-1-point.webp" alt="" className="absolute bottom-[20%] right-[25%] w-[16.56%] object-contain" />
            <img src="/images/section2_reward-1-btn-receive.webp" alt="" className="absolute bottom-0 w-[36.66%] object-contain img-btn" onClick={onClose} />
          </motion.div>}

          {result === 2 && <motion.div
            className="relative z-10 flex flex-col items-center w-[30.78%] aspect-591/299 bg-cover bg-center bg-no-repeat overflow-hidden bg-[url('/images/section2_reward-2-bg.webp')]"
            initial={{ scale: 0.7, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/images/section2_reward-4-title.webp" alt="" className="w-[79.19%] object-contain" />
            <img src="/images/section2_reward-4-btn-receive.webp" alt="" className="absolute bottom-[18%] w-[38.58%] object-contain img-btn" onClick={onClose} />
          </motion.div>}

          {result === 3 && <motion.div
            className="relative z-10 flex flex-col items-center w-[30.78%] aspect-591/526 bg-cover bg-center bg-no-repeat overflow-hidden bg-[url('/images/section2_reward-3-bg.webp')]"
            initial={{ scale: 0.7, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/images/section2_reward-3-title.webp" alt="" className="w-[79.19%] object-contain" />
            <img src="/images/section2_reward-3-name.webp" alt="" className="absolute bottom-[3%] w-[59.22%] object-contain" />
            <img src="/images/section2_reward-3-point.webp" alt="" className="absolute bottom-[20%] right-[22%] w-[17.43%] object-contain" />
            <img src="/images/section2_reward-3-btn-receive.webp" alt="" className="absolute bottom-0 w-[38.58%] object-contain img-btn" onClick={onClose} />
          </motion.div>}

          {result === 4 && <motion.div
            className="relative z-10 flex flex-col items-center w-[30.78%] aspect-591/299 bg-cover bg-center bg-no-repeat overflow-hidden bg-[url('/images/section2_reward-4-bg.webp')]"
            initial={{ scale: 0.7, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/images/section2_reward-4-title.webp" alt="" className="w-[79.19%] object-contain" />
            <img src="/images/section2_reward-4-btn-receive.webp" alt="" className="absolute bottom-[18%] w-[38.58%] object-contain img-btn" onClick={onClose} />
          </motion.div>}

          {result === 5 && <motion.div
            className="relative z-10 flex flex-col items-center w-[30.78%] aspect-591/526 bg-cover bg-center bg-no-repeat overflow-hidden bg-[url('/images/section2_reward-5-bg.webp')]"
            initial={{ scale: 0.7, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/images/section2_reward-5-title.webp" alt="" className="w-[79.19%] object-contain" />
            <img src="/images/section2_reward-5-name.webp" alt="" className="absolute bottom-[3%] w-[57.53%] object-contain" />
            <img src="/images/section2_reward-5-point.webp" alt="" className="absolute bottom-[20%] right-[22%] w-[17.43%] object-contain" />
            <img src="/images/section2_reward-5-btn-receive.webp" alt="" className="absolute bottom-0 w-[38.58%] object-contain img-btn" onClick={onClose} />
          </motion.div>}

          {result === 6 && <motion.div
            className="relative z-10 flex flex-col items-center w-[30.78%] aspect-591/299 bg-cover bg-center bg-no-repeat overflow-hidden bg-[url('/images/section2_reward-4-bg.webp')]"
            initial={{ scale: 0.7, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/images/section2_reward-4-title.webp" alt="" className="w-[79.19%] object-contain" />
            <img src="/images/section2_reward-4-btn-receive.webp" alt="" className="absolute bottom-[18%] w-[38.58%] object-contain img-btn" onClick={onClose} />
          </motion.div>}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpinResultModal;
