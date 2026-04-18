"use client";

import { motion, AnimatePresence } from "framer-motion";

interface RuleModalProps {
  onClose: () => void;
}

const RuleModal = ({ onClose }: RuleModalProps) => {
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
          className="relative z-10 flex flex-col items-center w-[41.46%] aspect-796/876 bg-cover bg-center bg-no-repeat overflow-hidden bg-[url('/images/section2_rule-bg.webp')]"
          initial={{ scale: 0.7, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.7, opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mt-[30%] w-[44.22%] aspect-352/477 flex flex-col overflow-y-auto text-[1vw]">
            <p className="text-[#1D5B74] font-semibold text-center leading-relaxed px-[4%]">
              Thiếu hiệp thân mến, để nhận được lượt quay Thiếu hiệp{" "}
              <br />
              <span className="text-[#D85C07]">vui lòng hoàn thành nhiệm vụ ngày:</span>
            </p>

            <ul className="mt-[4%] space-y-[3%] px-[4%]">
              <li className="text-[#1D5B74] font-semibold text-center leading-relaxed">
                - Đăng nhập bằng tài khoản Zalo để nhận lượt bình chọn
              </li>
              <li className="text-[#1D5B74] font-semibold text-center leading-relaxed">
                - Đăng nhập hằng ngày nhận lượt quay hằng ngày{" "}
                (tối đa <span className="text-[#D85C07]">+1 lượt quay/ngày</span>).
              </li>
            </ul>

            <p className="mt-[4%] text-[#1D5B74] font-semibold text-center leading-relaxed px-[4%]">
              Ngoài ra để nhận thêm lượt quay mỗi ngày,
              Thiếu Hiệp có thể nạp nhận lượt:
            </p>

            <ul className="mt-[3%] px-[4%]">
              <li className="text-[#1D5B74] font-semibold text-center leading-relaxed">
                - User nạp lần đầu{" "}
                <span className="text-[#D85C07]">(bất kì mệnh giá nào)</span>
                <span className="text-[#D85C07]">+5 lượt quay</span>
                <br />
                (1 lần duy nhất đối với 1 tài khoản).
              </li>
              <li className="text-[#1D5B74] font-semibold text-center leading-relaxed">
                - Users nạp tích lũy các mốc sau sẽ nhận được lượt quay tương ứng{" "}
                (xem chi tiết tại mục{" "}
                <span className="text-[#D85C07]">"Nạp"</span>
                {" "}của phần{" "}
                <span className="text-[#D85C07]">"Nhận Lượt"</span>)
              </li>
            </ul>
          </div>
          <img src="/images/section2_history-checkin-close.webp" alt="" className="absolute bottom-0 w-[6.4%] object-contain img-btn" onClick={onClose} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RuleModal;