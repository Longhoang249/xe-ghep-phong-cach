import type { Metadata } from "next";
import Link from "next/link";
import RoutesDirectory from "@/components/RoutesDirectory";
import { routes } from "@/data/routes";
export const metadata:Metadata={title:"Tất cả tuyến xe",description:"Tìm tuyến xe ghép, bao xe từ Hải Dương đi Hà Nội, sân bay và các tỉnh. Gửi yêu cầu miễn phí, đi xong mới thanh toán.",alternates:{canonical:"/tuyen-xe"}};
export default function RoutesPage(){return <main className="inner-page"><header className="inner-header"><Link className="brand" href="/"><span className="brand-mark">PC</span><span><strong>PHONG CÁCH</strong><small>Xe ghép & bao xe liên tỉnh</small></span></Link><a className="btn btn-primary" href="tel:0987663883">☎ Gọi tư vấn</a></header><section className="directory-hero"><Link href="/">← Trang chủ</Link><span className="section-kicker">MẠNG LƯỚI TUYẾN XE</span><h1>Từ Hải Dương,<br/>kết nối mọi hành trình.</h1><p>Chọn tuyến để xem thời gian, mức giá tham khảo và gửi yêu cầu cho tư vấn viên kiểm tra xe.</p></section><RoutesDirectory routes={routes}/></main>}
