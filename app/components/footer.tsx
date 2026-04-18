const Footer = () => {
  return (
    <section className="relative w-full aspect-750/1334 md:aspect-1920/286 bg-cover bg-center bg-no-repeat overflow-hidden
    bg-[url('/images/section2_mb-bg.webp')] md:bg-[url('/images/footer_pc-bg.webp')] flex flex-col items-center">
      <img src="/images/logo-zagoo.webp" alt="" className="mt-[2%] w-[8.5%] object-contain" />
      <div className="mt-[1%] px-[10%] flex flex-col items-center gap-[0.4%] text-center text-white text-[1vw] leading-relaxed">
        <p className="font-bold">Công ty TNHH Giải Trí ZIE.</p>
        <p>Địa chỉ trụ sở chính: Tầng 17, Tòa nhà ROX Tower, số 54A Nguyễn Chí Thanh, Phường Láng, Thành phố Hà Nội</p>
        <p>Giấy chứng nhận cung cấp dịch vụ trò chơi điện tử G2 trên mạng: số 369/GCN-SVHTT do Sở Văn hóa và Thể thao thành phố Hà Nội cấp ngày 07/08/2025</p>
        <p>Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 39/QĐ-PTTH&TTĐT do Bộ Thông tin và Truyền thông cấp ngày 18/02/2025</p>
        <p>Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng: số 43/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 21/01/2025</p>
      </div>
    </section>
  );
};

export default Footer;