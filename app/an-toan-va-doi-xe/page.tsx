import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TrustPage from "@/components/TrustPage";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "An toàn và loại xe phục vụ",
  description: "Thông tin về xe 4 chỗ, xe 7 chỗ, quy trình xác nhận chuyến và lưu ý an toàn của Xe Ghép Phong Cách.",
  alternates: { canonical: "/an-toan-va-doi-xe" },
};

export default function SafetyPage() {
  const url = absoluteUrl("/an-toan-va-doi-xe");
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#webpage`, url, name: "An toàn và loại xe phục vụ", inLanguage: siteConfig.language, dateModified: siteConfig.contentUpdatedAt, about: { "@id": `${absoluteUrl()}#organization` } }} />
      <TrustPage kicker="AN TOÀN & ĐỘI XE" title="Chọn loại xe phù hợp với nhu cầu chuyến đi" intro="Phong Cách tiếp nhận nhu cầu xe 4 chỗ, xe 7 chỗ, xe ghép và bao xe. Loại xe cụ thể được tư vấn viên xác nhận khi bố trí chuyến.">
        <section><div className="trust-grid"><div><h2>Xe 4 chỗ</h2><p>Phù hợp với cá nhân hoặc nhóm nhỏ có lượng hành lý vừa phải.</p></div><div><h2>Xe 7 chỗ</h2><p>Phù hợp với gia đình, nhóm đông hơn hoặc khách cần thêm không gian hành lý.</p></div><div><h2>Bao xe riêng</h2><p>Dành cho khách muốn chủ động hơn về không gian và hành trình.</p></div></div></section>
        <section><h2>Thông tin được xác nhận trước chuyến</h2><ul><li>Loại xe được bố trí.</li><li>Giờ và vị trí đón dự kiến.</li><li>Điểm trả và nhu cầu hành lý.</li><li>Mức chi phí cuối của chuyến.</li></ul></section>
        <section><h2>Lưu ý về hình ảnh trên website</h2><p>Hình ảnh xe trên website được tạo để minh họa cho loại hình dịch vụ và phong cách thương hiệu; không đại diện cho một chiếc xe, biển số hoặc tài xế cụ thể. Thông tin xe thực tế của từng chuyến được xác nhận trực tiếp khi bố trí xe.</p></section>
      </TrustPage>
    </>
  );
}
