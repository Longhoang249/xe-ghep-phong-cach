import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TrustPage from "@/components/TrustPage";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chính sách đặt và xác nhận chuyến xe",
  description: "Quy trình gửi yêu cầu, xác nhận giá, thay đổi chuyến và thanh toán khi đặt xe với Xe Ghép Phong Cách.",
  alternates: { canonical: "/chinh-sach-dat-xe" },
};

export default function BookingPolicyPage() {
  const url = absoluteUrl("/chinh-sach-dat-xe");
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#webpage`, url, name: "Chính sách đặt và xác nhận chuyến xe", inLanguage: siteConfig.language, dateModified: siteConfig.contentUpdatedAt }} />
      <TrustPage kicker="CHÍNH SÁCH ĐẶT XE" title="Xác nhận rõ trước khi khách quyết định đi" intro="Gửi biểu mẫu trên website chưa làm phát sinh giao dịch. Phong Cách sẽ liên hệ để thống nhất xe, giờ đón và mức chi phí cuối trước chuyến.">
        <section><h2>1. Gửi yêu cầu</h2><p>Khách cung cấp thông tin chuyến qua website, hotline hoặc Zalo. Việc gửi yêu cầu không yêu cầu thanh toán trước.</p></section>
        <section><h2>2. Xác nhận chuyến</h2><p>Tư vấn viên kiểm tra khả năng bố trí xe và trao đổi lại điểm đón, điểm trả, thời gian, loại xe, số khách, hành lý và chi phí. Chuyến chỉ được coi là đã thống nhất sau bước xác nhận này.</p></section>
        <section><h2>3. Giá và phụ phí</h2><p>Giá trên website là mức tham khảo. Mức cuối có thể thay đổi theo địa chỉ đón trả, thời điểm, số khách, loại xe, hành lý hoặc yêu cầu chờ. Mọi khoản chi phí cần được thông báo trước chuyến.</p></section>
        <section><h2>4. Thay đổi hoặc hủy yêu cầu</h2><p>Nếu cần đổi thời gian, địa chỉ hoặc hủy chuyến, khách nên liên hệ sớm qua hotline. Khả năng thay đổi phụ thuộc tình trạng xe tại thời điểm tiếp nhận.</p></section>
        <section><h2>5. Thanh toán</h2><p>Khách thanh toán sau khi hoàn thành chuyến đi, theo mức đã được xác nhận với tư vấn viên.</p></section>
        <section><h2>6. Dữ liệu và đo lường</h2><p>Thông tin khách cung cấp trong biểu mẫu được dùng để tiếp nhận và xác nhận chuyến. Website có thể đo lượt xem tuyến và thao tác liên hệ để đánh giá hiệu quả, nhưng không gửi họ tên, số điện thoại hoặc địa chỉ vào công cụ analytics.</p></section>
      </TrustPage>
    </>
  );
}
