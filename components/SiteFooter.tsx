import Link from "next/link";
import { siteConfig } from "@/lib/site";
import TrackedLink from "@/components/TrackedLink";

type SiteFooterProps = {
  placement?: string;
};

export default function SiteFooter({ placement = "site_footer" }: SiteFooterProps) {
  const zaloUrl = process.env.NEXT_PUBLIC_ZALO_URL || siteConfig.zaloFallbackUrl;

  return (
    <footer>
      <div className="footer-brand">
        <span className="brand-mark">PC</span>
        <div>
          <strong>XE GHÉP PHONG CÁCH</strong>
          <p>Kết nối chuyến đi tỉnh từ Hải Dương.</p>
        </div>
      </div>
      <div>
        <strong>Tuyến trọng điểm</strong>
        <Link href="/xe-ghep-hai-duong-hai-phong">Hải Dương ⇄ Hải Phòng</Link>
        <Link href="/xe-ghep-hai-duong-quang-ninh">Hải Dương ⇄ Quảng Ninh</Link>
        <Link href="/xe-ghep-hai-phong-quang-ninh">Hải Phòng ⇄ Quảng Ninh</Link>
        <Link href="/xe-hai-duong-cat-bi">Hải Dương ⇄ Sân bay Cát Bi</Link>
        <Link href="/xe-ghep-hai-duong-ha-long">Hải Dương ⇄ Hạ Long</Link>
        <Link href="/xe-ghep-hai-duong-ha-noi">Hải Dương ⇄ Hà Nội</Link>
        <Link href="/xe-hai-duong-noi-bai">Hải Dương ⇄ Sân bay Nội Bài</Link>
      </div>
      <div>
        <strong>Tuyến liên tỉnh</strong>
        <Link href="/xe-ghep-hai-duong-phu-tho">Hải Dương ⇄ Phú Thọ</Link>
        <Link href="/xe-ghep-hai-duong-vinh-phuc">Hải Dương ⇄ Vĩnh Phúc</Link>
        <Link href="/xe-ghep-hai-duong-ninh-binh">Hải Dương ⇄ Ninh Bình</Link>
        <Link href="/xe-ghep-hai-duong-bac-ninh">Hải Dương ⇄ Bắc Ninh</Link>
        <Link href="/xe-ghep-hai-duong-hung-yen">Hải Dương ⇄ Hưng Yên</Link>
        <Link href="/xe-ghep-hai-duong-thai-nguyen">Hải Dương ⇄ Thái Nguyên</Link>
        <Link href="/xe-ghep-hai-duong-nam-dinh">Hải Dương ⇄ Nam Định</Link>
      </div>
      <div>
        <strong>Liên hệ</strong>
        <TrackedLink href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement }}>
          {siteConfig.phoneDisplay}
        </TrackedLink>
        <TrackedLink href={zaloUrl} target="_blank" rel="noopener noreferrer" eventName="click_zalo" eventData={{ placement }}>
          Zalo Phong Cách
        </TrackedLink>
        <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer">
          Facebook Nhà Xe
        </a>
        <Link href="/lien-he">Thông tin liên hệ</Link>
      </div>
      <div>
        <strong>Khám phá</strong>
        <Link href="/blog">Blog tuyến xe</Link>
        <Link href="/tuyen-xe">Tất cả tuyến xe</Link>
        <Link href="/gioi-thieu">Giới thiệu</Link>
        <Link href="/chinh-sach-dat-xe">Chính sách đặt xe</Link>
        <Link href="/an-toan-va-doi-xe">An toàn & đội xe</Link>
      </div>
      <p className="copyright">
        © 2026 Xe Ghép Phong Cách. Mức giá trên website là tham khảo và được xác nhận trước chuyến. Hình ảnh là hình minh họa được tạo bằng AI.
      </p>
    </footer>
  );
}
