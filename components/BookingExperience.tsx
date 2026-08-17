"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import type { RoutePrice } from "@/data/routes";
import { findRoute, locations } from "@/data/routes";
import { BrowserLocationProvider } from "@/lib/location";
import { estimateArrival, estimatePrice, type ServiceType, type VehicleType } from "@/lib/pricing";
import { captureAttribution } from "@/lib/tracking";

const hotline = "0987663883";
const formatPrice = (price: number | null) => price ? new Intl.NumberFormat("vi-VN").format(price) + "đ" : "Liên hệ báo giá";
const getTomorrow = () => { const date = new Date(); date.setDate(date.getDate() + 1); return date.toISOString().slice(0, 10); };

type Props = { routes: RoutePrice[] };
type BookingState = {
  pickup: string; dropoff: string; need: "ride" | "parcel"; service: ServiceType; vehicle: VehicleType;
  passengers: number; date: string; time: string; name: string; phone: string; pickupLat?: number; pickupLng?: number;
};

export default function BookingExperience({ routes }: Props) {
  const [booking, setBooking] = useState<BookingState>({ pickup: "Hải Dương", dropoff: "", need: "ride", service: "shared", vehicle: "4-seat", passengers: 1, date: getTomorrow(), time: "07:00", name: "", phone: "" });
  const [stage, setStage] = useState<"search" | "details" | "success">("search");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [locationMessage, setLocationMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const formRef = useRef<HTMLDivElement>(null);
  const selectedRoute = useMemo(() => findRoute(booking.pickup, booking.dropoff), [booking.pickup, booking.dropoff]);
  const price = useMemo(() => estimatePrice(selectedRoute, booking.need, booking.service, booking.vehicle, booking.passengers), [selectedRoute, booking.need, booking.service, booking.vehicle, booking.passengers]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const from = params.get("from"); const to = params.get("to");
    if (from || to) queueMicrotask(() => setBooking((old) => ({ ...old, pickup: from || old.pickup, dropoff: to || old.dropoff })));
  }, []);

  const update = <K extends keyof BookingState>(key: K, value: BookingState[K]) => setBooking((old) => ({ ...old, [key]: value }));
  const goToDetails = () => {
    const nextErrors: Record<string, string> = {};
    if (!booking.pickup.trim()) nextErrors.pickup = "Vui lòng chọn điểm đón.";
    if (!booking.dropoff.trim()) nextErrors.dropoff = "Vui lòng chọn điểm đến.";
    if (booking.pickup.trim() === booking.dropoff.trim()) nextErrors.dropoff = "Điểm đến cần khác điểm đón.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStage("details");
    requestAnimationFrame(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };
  const chooseRoute = (route: RoutePrice) => {
    setBooking((old) => ({ ...old, pickup: route.origin, dropoff: route.destination }));
    setStage("details");
    requestAnimationFrame(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };
  const useCurrentLocation = async () => {
    setLocationMessage("Đang xác định vị trí…");
    try {
      const result = await new BrowserLocationProvider().current();
      setBooking((old) => ({ ...old, pickup: result.label, pickupLat: result.lat, pickupLng: result.lng }));
      setLocationMessage("Đã lấy vị trí. Bạn vẫn có thể sửa địa chỉ đón.");
    } catch {
      setLocationMessage("Không sao, bạn có thể nhập điểm đón bằng tay.");
    }
  };
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!booking.name.trim()) nextErrors.name = "Vui lòng nhập họ tên để Phong Cách tiện xưng hô.";
    if (!/^(0|\+84)[0-9]{9}$/.test(booking.phone.replace(/\s/g, ""))) nextErrors.phone = "Vui lòng nhập số điện thoại Việt Nam hợp lệ.";
    if (!booking.date) nextErrors.date = "Vui lòng chọn ngày đi.";
    if (!booking.time) nextErrors.time = "Vui lòng chọn giờ muốn đón.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSaving(true);
    const id = `PC-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
    const payload = {
      booking_id: id, created_at: new Date().toISOString(), customer_name: booking.name.trim(), phone: booking.phone.trim(),
      pickup_address: booking.pickup, pickup_lat: booking.pickupLat || null, pickup_lng: booking.pickupLng || null,
      dropoff_address: booking.dropoff, dropoff_lat: null, dropoff_lng: null, departure_date: booking.date, departure_time: booking.time,
      service_type: booking.need === "parcel" ? "parcel" : booking.service, passenger_count: booking.need === "ride" ? booking.passengers : 0,
      vehicle_type: booking.vehicle, estimated_distance: selectedRoute?.distanceKm || null, estimated_duration: selectedRoute?.durationMinutes || null,
      estimated_price: price, status: "new", ...captureAttribution(),
    };
    try {
      const saved = JSON.parse(localStorage.getItem("phong-cach-bookings") || "[]");
      localStorage.setItem("phong-cach-bookings", JSON.stringify([payload, ...saved].slice(0, 50)));
      await fetch("/api/bookings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    } catch { /* Bản demo vẫn xác nhận sau khi lưu cục bộ. */ }
    setBookingId(id); setStage("success"); setSaving(false);
    requestAnimationFrame(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }));
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Trang chủ Xe Ghép Phong Cách"><span className="brand-mark">PC</span><span><strong>PHONG CÁCH</strong><small>Xe ghép liên tỉnh</small></span></a>
        <nav className="desktop-nav" aria-label="Điều hướng chính"><a href="#dich-vu">Dịch vụ</a><a href="#tuyen-xe">Tuyến xe</a><a href="#ly-do">Về Phong Cách</a></nav>
        <a className="header-phone" href={`tel:${hotline}`}><span>☎</span><span><small>Hotline 24/7</small><strong>0987 663 883</strong></span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> Có xe nhiều tuyến mỗi ngày</div>
            <h1>Xe ghép liên tỉnh.<br /><span>Đi gọn, đến nhanh.</span></h1>
            <p>Hải Dương đi Hà Nội, sân bay và các tỉnh miền Bắc. Xe 4–7 chỗ, ghép khách hoặc bao xe theo nhu cầu.</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#dat-xe">Tìm chuyến ngay <span>→</span></a><a className="btn btn-ghost" href={`tel:${hotline}`}>☎ Gọi 0987 663 883</a></div>
            <div className="trust-row"><span>✓ Xe đời mới</span><span>✓ Đón tận nơi</span><span>✓ Không vòng vèo</span></div>
          </div>
          <div className="hero-visual" aria-label="Minh hoạ xe liên tỉnh hiện đại">
            <div className="map-dot dot-one"><i />Hải Dương</div><div className="map-dot dot-two"><i />Hà Nội</div><div className="map-dot dot-three"><i />Nội Bài</div>
            <div className="route-line route-a" /><div className="route-line route-b" />
            <div className="car-card"><div className="car-emoji">🚙</div><div><strong>Phong Cách</strong><span>Đang trên đường đón bạn</span></div><b>4 phút</b></div>
          </div>
        </div>
      </section>

      <section className="booking-shell" id="dat-xe">
        <div className="booking-card" ref={formRef}>
          {stage === "success" ? (
            <div className="success-state" role="status"><div className="success-icon">✓</div><span className="success-kicker">Mã yêu cầu {bookingId}</span><h2>Đã nhận yêu cầu đặt xe</h2><div className="success-route"><strong>{booking.pickup}</strong><span>→</span><strong>{booking.dropoff}</strong></div><div className="summary-grid"><span><small>Ngày đi</small><b>{new Date(booking.date + "T00:00:00").toLocaleDateString("vi-VN")}</b></span><span><small>Giờ đón</small><b>{booking.time}</b></span><span><small>Nhu cầu</small><b>{booking.need === "parcel" ? "Gửi hàng" : `${booking.passengers} khách`}</b></span><span><small>Dự kiến</small><b>{formatPrice(price)}</b></span></div><p>Phong Cách sẽ liên hệ xác nhận xe và giá chuyến với bạn trong ít phút.</p><div className="success-actions"><a className="btn btn-primary" href={process.env.NEXT_PUBLIC_ZALO_URL || `tel:${hotline}`}>Nhắn Zalo</a><a className="btn btn-ghost" href={`tel:${hotline}`}>Gọi hotline</a></div><button className="text-button" onClick={() => setStage("search")}>Đặt thêm chuyến khác</button></div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="booking-head"><div><span className="step-label">ĐẶT XE NHANH</span><h2>Bạn muốn đi đâu?</h2></div><span className="safe-note">● Xác nhận trước khi đi</span></div>
              <div className="route-inputs">
                <label><span className="field-label"><i className="pin pickup-pin" />Điểm đón</span><input list="locations" value={booking.pickup} onChange={(e) => update("pickup", e.target.value)} placeholder="Nhập nơi đón" aria-invalid={!!errors.pickup} /><small className="error">{errors.pickup}</small></label>
                <button type="button" className="swap-button" onClick={() => setBooking((old) => ({ ...old, pickup: old.dropoff, dropoff: old.pickup }))} aria-label="Đổi điểm đón và điểm đến">⇅</button>
                <label><span className="field-label"><i className="pin dropoff-pin" />Điểm đến</span><input list="locations" value={booking.dropoff} onChange={(e) => update("dropoff", e.target.value)} placeholder="Bạn muốn đi đâu?" aria-invalid={!!errors.dropoff} /><small className="error">{errors.dropoff}</small></label>
                <datalist id="locations">{locations.map((item) => <option value={item} key={item} />)}</datalist>
              </div>
              <div className="quick-places"><span>Chọn nhanh:</span>{["Hà Nội", "Nội Bài", "Hải Phòng", "Quảng Ninh"].map((place) => <button type="button" key={place} onClick={() => update("dropoff", place)}>{place}</button>)}</div>
              <button type="button" className="location-button" onClick={useCurrentLocation}>⌖ Dùng vị trí của tôi</button>{locationMessage && <p className="location-message">{locationMessage}</p>}
              {stage === "search" && <button type="button" className="search-button" onClick={goToDetails}>Tìm xe <span>→</span></button>}

              {stage === "details" && <div className="details-panel">
                {selectedRoute ? <div className="route-summary"><div><span>{selectedRoute.origin}</span><b>→</b><span>{selectedRoute.destination}</span></div><p>Khoảng {selectedRoute.distanceKm} km · ~{Math.floor(selectedRoute.durationMinutes / 60)}h{selectedRoute.durationMinutes % 60 ? selectedRoute.durationMinutes % 60 : ""} · Dự kiến đến {estimateArrival(selectedRoute.durationMinutes, booking.service)}</p>{booking.service === "shared" && <small>Thời gian có thể chênh lệch 10–30 phút do lịch đón khách.</small>}</div> : <div className="route-summary unknown"><strong>Tuyến này chưa có giá tự động</strong><p>Bạn vẫn có thể gửi yêu cầu. Phong Cách sẽ gọi lại báo giá.</p></div>}
                <div className="form-section"><h3>1. Bạn cần gì?</h3><div className="choice-grid two"><Choice active={booking.need === "ride"} onClick={() => update("need", "ride")} icon="👤" title="Đi xe" note="Đi cá nhân hoặc theo nhóm" /><Choice active={booking.need === "parcel"} onClick={() => update("need", "parcel")} icon="📦" title="Gửi hàng" note="Gửi theo chuyến liên tỉnh" /></div></div>
                {booking.need === "ride" && <>
                  <div className="form-section"><h3>2. Chọn hình thức</h3><div className="choice-grid two"><Choice active={booking.service === "shared"} onClick={() => update("service", "shared")} icon="👥" title="Ghép chuyến" note="Tiết kiệm chi phí" badge="Phổ biến" /><Choice active={booking.service === "private"} onClick={() => update("service", "private")} icon="🚘" title="Bao xe" note="Riêng tư · Chủ động giờ" /></div></div>
                  <div className="form-section"><h3>3. Chọn loại xe</h3><div className="choice-grid three"><Choice active={booking.vehicle === "4-seat"} onClick={() => update("vehicle", "4-seat")} icon="🚗" title="4 chỗ" note="1–3 khách" /><Choice active={booking.vehicle === "7-seat"} onClick={() => update("vehicle", "7-seat")} icon="🚙" title="7 chỗ" note="4–6 khách" /><Choice active={booking.vehicle === "limo"} onClick={() => update("vehicle", "limo")} icon="🚐" title="Limo" note="Liên hệ báo giá" /></div></div>
                  <div className="passenger-row"><span><strong>Số người đi</strong><small>Tính cả trẻ em</small></span><div className="stepper"><button type="button" onClick={() => update("passengers", Math.max(1, booking.passengers - 1))}>−</button><b>{booking.passengers}</b><button type="button" onClick={() => update("passengers", Math.min(6, booking.passengers + 1))}>+</button></div></div>
                </>}
                <div className="form-section"><h3>{booking.need === "ride" ? "4" : "2"}. Thời gian & liên hệ</h3><div className="field-grid"><label><span>Ngày đi</span><input type="date" min={getTomorrow()} value={booking.date} onChange={(e) => update("date", e.target.value)} /><small className="error">{errors.date}</small></label><label><span>Giờ muốn đón</span><input type="time" value={booking.time} onChange={(e) => update("time", e.target.value)} /><small className="error">{errors.time}</small></label><label><span>Họ tên</span><input value={booking.name} onChange={(e) => update("name", e.target.value)} placeholder="Ví dụ: Anh Long" /><small className="error">{errors.name}</small></label><label><span>Số điện thoại</span><input inputMode="tel" value={booking.phone} onChange={(e) => update("phone", e.target.value)} placeholder="0987 663 883" /><small className="error">{errors.phone}</small></label></div></div>
                <div className="price-box"><div><span>Giá dự kiến</span><strong>{price ? formatPrice(price) : "Liên hệ báo giá"}</strong><small>{booking.service === "shared" && price ? `${formatPrice(selectedRoute?.sharedPrice || null)}/người` : "Giá chính xác được xác nhận trước chuyến đi."}</small></div><span className="demo-label">GIÁ THAM KHẢO</span></div>
                <button className="submit-button" disabled={saving}>{saving ? "Đang gửi yêu cầu…" : "ĐẶT XE NGAY"}<span>→</span></button><p className="privacy-note">Không cần đăng ký. Bằng việc đặt xe, bạn đồng ý để Phong Cách gọi xác nhận chuyến.</p>
              </div>}
            </form>
          )}
        </div>
      </section>

      <section className="section" id="tuyen-xe"><div className="section-heading"><div><span className="section-kicker">TUYẾN PHỔ BIẾN</span><h2>Tuyến được đặt nhiều</h2><p>Từ Hải Dương, đi các tỉnh chỉ với vài thao tác.</p></div><Link href="/tuyen-xe">Xem tất cả tuyến →</Link></div><div className="route-cards">{routes.map((route) => <article className="route-card" key={route.id}><div className="route-icon">{route.tag ? "✈" : "↗"}</div><span>{route.tag || "Xe ghép mỗi ngày"}</span><h3>{route.origin} <b>↔</b><br />{route.destination}</h3><div className="route-meta"><strong>{route.sharedPrice ? `Từ ${Math.round(route.sharedPrice / 1000)}k` : "Liên hệ giá"}</strong><small>~{Math.floor(route.durationMinutes / 60)}h{route.durationMinutes % 60}</small></div><button onClick={() => chooseRoute(route)}>Đặt chuyến <span>→</span></button></article>)}</div></section>

      <section className="section services" id="dich-vu"><div className="section-heading centered"><div><span className="section-kicker">CHỌN THEO NHU CẦU</span><h2>Chuyến đi nào cũng có xe phù hợp</h2></div></div><div className="service-grid"><Service icon="🚗" title="Xe 4 chỗ" text="Gọn gàng, linh hoạt cho 1–3 khách." /><Service icon="🚙" title="Xe 7 chỗ" text="Rộng rãi cho gia đình và nhóm khách." /><Service icon="✦" title="Bao xe riêng" text="Chủ động lịch trình, không ghép khách." /><Service icon="📦" title="Gửi hàng" text="Nhanh, tiện theo chuyến liên tỉnh." /></div></section>

      <section className="why" id="ly-do"><div className="why-inner"><div className="why-copy"><span className="section-kicker light">VÌ SAO CHỌN PHONG CÁCH?</span><h2>Nhà xe quen thuộc.<br />Cách làm việc bài bản.</h2><p>Bên mình tập trung vào một điều: giúp bạn tìm được chuyến phù hợp, nhanh và rõ ràng.</p><a className="btn btn-white" href={`tel:${hotline}`}>Gọi tư vấn ngay</a></div><div className="why-grid"><Reason n="01" title="Đi đúng tuyến" text="Hạn chế vòng vèo không cần thiết." /><Reason n="02" title="Đón tận nơi" text="Linh hoạt điểm đón và điểm trả." /><Reason n="03" title="Nhiều lựa chọn" text="Xe 4 chỗ, 7 chỗ và xe cao cấp." /><Reason n="04" title="Tài xế kinh nghiệm" text="Điềm đạm, lịch sự, quen tuyến." /></div></div></section>

      <section className="section steps"><div className="section-heading centered"><div><span className="section-kicker">RẤT ĐƠN GIẢN</span><h2>Đặt xe trong 3 bước</h2></div></div><div className="steps-grid"><Step n="1" title="Chọn điểm đi – điểm đến" /><Step n="2" title="Chọn giờ và loại xe" /><Step n="3" title="Phong Cách xác nhận xe" /></div></section>

      <section className="reviews section"><div className="section-heading"><div><span className="section-kicker">TRẢI NGHIỆM MẪU</span><h2>Khách nói gì về Phong Cách?</h2><p>Các nội dung dưới đây là dữ liệu minh hoạ, chờ thay bằng đánh giá thật.</p></div></div><div className="review-grid"><Review name="Anh Minh · Hải Dương" text="Thao tác đặt xe rất nhanh, thông tin tuyến và giá dễ hiểu." /><Review name="Chị Hoa · Hà Nội" text="Mình thích nhất là không cần tải app, chọn tuyến xong có người gọi xác nhận." /><Review name="Anh Nam · Cẩm Giàng" text="Phù hợp cả lúc cần đi sân bay lẫn gửi đồ lên Hà Nội." /></div></section>

      <section className="final-cta"><div><span>XE GHÉP PHONG CÁCH</span><h2>Cần xe đi tỉnh?</h2><p>Chọn tuyến hoặc gọi Phong Cách, bên mình tìm xe phù hợp cho bạn.</p></div><div><a className="btn btn-white" href="#dat-xe">Đặt xe ngay</a><a className="btn btn-outline-white" href={`tel:${hotline}`}>Gọi 0987 663 883</a></div></section>

      <footer><div className="footer-brand"><span className="brand-mark">PC</span><div><strong>XE GHÉP PHONG CÁCH</strong><p>Đi đúng tuyến. Đón đúng giờ.</p></div></div><div><strong>Liên hệ</strong><a href={`tel:${hotline}`}>0987 663 883</a><a href={process.env.NEXT_PUBLIC_ZALO_URL || `tel:${hotline}`}>Zalo Phong Cách</a></div><div><strong>Khám phá</strong><Link href="/tuyen-xe">Tất cả tuyến xe</Link><a href="#dich-vu">Dịch vụ</a></div><p className="copyright">© 2026 Xe Ghép Phong Cách. Giá trên website là giá tham khảo.</p></footer>

      <nav className="bottom-nav" aria-label="Điều hướng trên điện thoại"><a href="#top"><span>⌂</span>Trang chủ</a><a className="active" href="#dat-xe"><span>＋</span>Đặt xe</a><a href="#tuyen-xe"><span>↗</span>Tuyến xe</a><a href={`tel:${hotline}`}><span>☎</span>Liên hệ</a></nav>
    </main>
  );
}

function Choice({ active, onClick, icon, title, note, badge }: { active: boolean; onClick: () => void; icon: string; title: string; note: string; badge?: string }) { return <button type="button" className={`choice ${active ? "selected" : ""}`} onClick={onClick}>{badge && <em>{badge}</em>}<span className="choice-icon">{icon}</span><span><strong>{title}</strong><small>{note}</small></span><i>{active ? "✓" : ""}</i></button>; }
function Service({ icon, title, text }: { icon: string; title: string; text: string }) { return <article className="service-card"><span>{icon}</span><h3>{title}</h3><p>{text}</p><a href="#dat-xe">Đặt ngay →</a></article>; }
function Reason({ n, title, text }: { n: string; title: string; text: string }) { return <article><span>{n}</span><h3>{title}</h3><p>{text}</p></article>; }
function Step({ n, title }: { n: string; title: string }) { return <article><span>{n}</span><h3>{title}</h3></article>; }
function Review({ name, text }: { name: string; text: string }) { return <article><div className="stars">★★★★★</div><p>“{text}”</p><strong>{name}</strong><small>Dữ liệu minh hoạ</small></article>; }
