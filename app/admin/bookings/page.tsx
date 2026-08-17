import type { Metadata } from "next";
import Link from "next/link";
import AdminBookings from "@/components/AdminBookings";
export const metadata:Metadata={title:"Booking nội bộ",robots:{index:false,follow:false}};
export default function AdminPage(){return <main className="admin-page"><header className="inner-header"><Link className="brand" href="/"><span className="brand-mark">PC</span><span><strong>PHONG CÁCH</strong><small>Khu vực nội bộ · Demo</small></span></Link><Link href="/">← Về website</Link></header><section><span className="section-kicker">BOOKING MVP</span><h1>Yêu cầu đặt xe</h1><p>Danh sách booking được tạo trên trình duyệt này.</p><AdminBookings/></section></main>}
