import type { Metadata } from "next";
import Link from "next/link";
import RoutesDirectory from "@/components/RoutesDirectory";
import { routes } from "@/data/routes";
export const metadata:Metadata={title:"Tất cả tuyến xe",description:"Danh sách tuyến xe ghép, bao xe từ Hải Dương đi Hà Nội, sân bay và các tỉnh.",alternates:{canonical:"/tuyen-xe"}};
export default function RoutesPage(){return <main className="inner-page"><header className="inner-header"><Link className="brand" href="/"><span className="brand-mark">PC</span><span><strong>PHONG CÁCH</strong><small>Xe ghép liên tỉnh</small></span></Link><a className="btn btn-primary" href="tel:0987663883">☎ 0987 663 883</a></header><section className="directory-hero"><Link href="/">← Trang chủ</Link><span className="section-kicker">MẠNG LƯỚI TUYẾN XE</span><h1>Hải Dương đi đâu,<br/>Phong Cách có tuyến.</h1><p>Tìm nhanh tuyến xe ghép, bao xe hoặc chuyến đi sân bay phù hợp với bạn.</p></section><RoutesDirectory routes={routes}/></main>}
