"use client";

import { motion, AnimatePresence } from "framer-motion";

interface NoticeModalProps {
  onClose: () => void;
}

const NoticeModal = ({ onClose }: NoticeModalProps) => {
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
          className="relative z-10 flex flex-col items-center w-full md:w-[41.46%] aspect-796/807 bg-cover bg-center bg-no-repeat overflow-hidden bg-[url('/images/section5_notice-bg.webp')]"
          initial={{ scale: 0.7, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.7, opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img src="/images/section2_history-checkin-close.webp" alt="" className="absolute bottom-0 w-[6.4%] object-contain img-btn" onClick={onClose} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NoticeModal;