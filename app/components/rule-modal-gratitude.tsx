"use client";

import { motion, AnimatePresence } from "framer-motion";

interface RuleModalProps {
  onClose: () => void;
}

const RuleModalGratitude = ({ onClose }: RuleModalProps) => {
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
          className="relative z-10 flex flex-col items-center w-full md:w-[41.46%] aspect-796/876 bg-cover bg-center bg-no-repeat overflow-hidden bg-[url('/images/section2_rule-bg.webp')]"
          initial={{ scale: 0.7, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.7, opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mt-[30%] w-[44.22%] aspect-352/477 flex flex-col overflow-y-auto text-[2.2vw] md:text-[1vw]">
            {/* Thể lệ tham gia và thời gian */}
            <p className="text-[#1D5B74] font-bold text-center leading-relaxed px-[4%]">
              THỂ LỆ THAM GIA VÀ THỜI GIAN
            </p>

            <p className="mt-[3%] text-[#1D5B74] font-semibold leading-relaxed px-[4%]">
              📅 <span className="text-[#D85C07] font-bold">24/04 - 04/05:</span>{" "}
              60 vị Thiếu hiệp trong danh sách dưới đây sẽ cùng nhau đua top tích lũy điểm
              khẳng định sức ảnh hưởng và sự gắn bó với Tiên Nghịch
            </p>

            {/* Quy tắc tính điểm */}
            <p className="mt-[4%] bg-[#D85C07] text-white font-bold text-center leading-relaxed px-[4%] mx-[15%]">
              QUY TẮC TÍNH ĐIỂM
            </p>

            <p className="mt-[2%] text-[#1D5B74] font-bold text-center leading-relaxed px-[4%]">
              1 triệu VND = 1 Điểm
            </p>

            <ul className="mt-[2%] space-y-[2%] px-[4%]">
              <li className="text-[#1D5B74] font-semibold leading-relaxed">
                - Cấp độ của người chơi sẽ được quy đổi thành điểm:{" "}
                <span className="font-bold">1 điểm = 100 level</span>{" "}
                (số lẻ có thể làm tròn)
              </li>
              <li className="text-[#1D5B74] font-semibold leading-relaxed">
                - Lực chiến của người chơi sẽ được quy đổi thành điểm:{" "}
                <span className="font-bold">1 điểm = 10tr lực chiến</span>{" "}
                (số lẻ có thể làm tròn)
              </li>
              <li className="text-[#1D5B74] font-semibold leading-relaxed">
                - Số điểm sẽ được làm tròn tới số thập phân thứ 3
              </li>
            </ul>

            <ul className="mt-[3%] space-y-[2%] px-[4%]">
              <li className="text-[#1D5B74] font-semibold leading-relaxed">
                🏆 <span className="text-[#D85C07] font-bold">05/05:</span>{" "}
                Công bố danh sách{" "}
                <span className="font-bold">Top 40</span>{" "}
                Thiếu hiệp xuất sắc nhất từ danh sách Top 60
                để nhận set quà tặng tri ân độc quyền
              </li>
              <li className="text-[#1D5B74] font-semibold leading-relaxed">
                🎁 <span className="text-[#D85C07] font-bold">07/05:</span>{" "}
                Tất cả quà tặng vận chuyển tới Thiếu hiệp nhằm tri ân
              </li>
            </ul>

            {/* Cách thức nhận quà */}
            <p className="mt-[4%] bg-[#D85C07] text-white font-bold text-center leading-relaxed px-[4%] mx-[15%]">
              CÁCH THỨC NHẬN QUÀ
            </p>

            <ul className="mt-[2%] space-y-[2%] px-[4%]">
              <li className="text-[#1D5B74] font-semibold leading-relaxed">
                - Sau khi Admin công bố danh sách,{" "}
                <span className="font-bold">40 vị Thiếu hiệp</span>{" "}
                vui lòng nhắn tin trực tiếp qua Fanpage kèm minh chứng và địa chỉ nhận quà.
              </li>
              <li className="text-[#1D5B74] font-semibold leading-relaxed">
                - Đội ngũ Admin sẽ xác minh và chuyển quà tận tay Thiếu hiệp
              </li>
              <li className="text-[#1D5B74] font-semibold leading-relaxed">
                📅 <span className="text-[#D85C07] font-bold">24/04 - 04/05:</span>{" "}
                60 vị Thiếu hiệp trong danh sách dưới đây sẽ cùng nhau đua top tích lũy điểm
                khẳng định sức ảnh hưởng và sự gắn bó với Tiên Nghịch
              </li>
            </ul>
          </div>
          <img src="/images/section2_history-checkin-close.webp" alt="" className="absolute bottom-0 w-[6.4%] object-contain img-btn" onClick={onClose} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RuleModalGratitude;