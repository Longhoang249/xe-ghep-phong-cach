import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TrustPage from "@/components/TrustPage";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Giới thiệu Xe Ghép Phong Cách",
  description: "Thông tin về dịch vụ xe ghép, bao xe 4–7 chỗ và gửi hàng theo chuyến trên các tuyến Hải Dương, Hải Phòng, Quảng Ninh.",
  alternates: { canonical: "/gioi-thieu" },
};

export default function AboutPage() {
  const url = absoluteUrl("/gioi-thieu");
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", "@id": `${url}#webpage`, url, name: "Giới thiệu Xe Ghép Phong Cách", inLanguage: siteConfig.language, dateModified: siteConfig.contentUpdatedAt, about: { "@id": `${absoluteUrl()}#organization` } }} />
      <TrustPage kicker="VỀ PHONG CÁCH" title="Xe ghép liên tỉnh, rõ thông tin trước chuyến" intro="Xe Ghép Phong Cách tiếp nhận nhu cầu đi xe, bao xe và gửi hàng theo chuyến, tập trung trên hành lang Hải Dương – Hải Phòng – Quảng Ninh và một số tuyến liên tỉnh khác.">
        <section><h2>Phong Cách đang phục vụ những nhu cầu nào?</h2><div className="trust-grid"><div><h3>Xe ghép</h3><p>Ghép chuyến theo tuyến và khung giờ phù hợp để tối ưu chi phí cho hành khách.</p></div><div><h3>Bao xe 4–7 chỗ</h3><p>Phù hợp với gia đình, nhóm khách hoặc người cần chủ động hơn về hành trình.</p></div><div><h3>Gửi hàng theo chuyến</h3><p>Tiếp nhận hàng gọn nhẹ; chi phí được tính theo tuyến, kích thước và khối lượng.</p></div></div></section>
        <section><h2>Cách Phong Cách tiếp nhận một chuyến xe</h2><ol><li>Khách gửi điểm đón, điểm trả, ngày giờ và số điện thoại.</li><li>Tư vấn viên kiểm tra xe, xác nhận hình thức đi và chi phí.</li><li>Khách chỉ quyết định sau khi các thông tin chính đã được thống nhất.</li><li>Thanh toán sau khi hoàn thành chuyến đi.</li></ol></section>
        <section><h2>Khu vực trọng điểm</h2><p>Ba tuyến được ưu tiên là Hải Dương ⇄ Hải Phòng, Hải Dương ⇄ Quảng Ninh và Hải Phòng ⇄ Quảng Ninh. Khách có thể gửi yêu cầu hai chiều trên cùng một trang tuyến.</p></section>
      </TrustPage>
    </>
  );
}
