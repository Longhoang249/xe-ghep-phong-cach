import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TrustPage from "@/components/TrustPage";
import TrackedLink from "@/components/TrackedLink";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Liên hệ đặt xe ghép Phong Cách",
  description: `Gọi ${siteConfig.phoneDisplay} hoặc nhắn Zalo để gửi yêu cầu xe ghép Hải Dương, Hải Phòng, Quảng Ninh và các tuyến liên tỉnh.`,
  alternates: { canonical: "/lien-he" },
};

export default function ContactPage() {
  const url = absoluteUrl("/lien-he");
  const zaloUrl = process.env.NEXT_PUBLIC_ZALO_URL || siteConfig.zaloFallbackUrl;
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", "@id": `${url}#webpage`, url, name: "Liên hệ Xe Ghép Phong Cách", inLanguage: siteConfig.language, dateModified: siteConfig.contentUpdatedAt, mainEntity: { "@id": `${absoluteUrl()}#organization` } }} />
      <TrustPage kicker="LIÊN HỆ" title="Gửi tuyến để Phong Cách kiểm tra xe" intro="Bạn chỉ cần gửi nơi đón, nơi trả, ngày giờ và số người đi. Tư vấn viên sẽ gọi hoặc nhắn lại để xác nhận xe và chi phí trước chuyến.">
        <section className="contact-cards"><div><span>HOTLINE ĐẶT XE</span><h2>{siteConfig.phoneDisplay}</h2><p>Dùng để gọi tư vấn và xác nhận yêu cầu chuyến.</p><TrackedLink className="btn btn-primary" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "contact_page" }}>Gọi ngay</TrackedLink></div><div><span>NHẮN ZALO</span><h2>Zalo Phong Cách</h2><p>Gửi địa chỉ, thời gian và nhu cầu để tư vấn viên kiểm tra.</p><TrackedLink className="btn btn-ghost" href={zaloUrl} target="_blank" rel="noopener noreferrer" eventName="click_zalo" eventData={{ placement: "contact_page" }}>Mở Zalo</TrackedLink></div></section>
        <section><h2>Thông tin nên chuẩn bị</h2><ul><li>Điểm đón và điểm trả dự kiến.</li><li>Ngày đi, giờ muốn đón và chiều đi hoặc chiều về.</li><li>Số khách, loại xe ghép hay bao xe.</li><li>Hành lý hoặc thông tin hàng hóa nếu có.</li></ul></section>
        <section><h2>Khu vực phục vụ</h2><p>Phong Cách ưu tiên Hải Dương, Hải Phòng và Quảng Ninh; đồng thời tiếp nhận yêu cầu trên các tuyến liên tỉnh đang hiển thị tại trang danh sách tuyến.</p></section>
      </TrustPage>
    </>
  );
}
