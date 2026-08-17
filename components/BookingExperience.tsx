"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import RouteMap from "@/components/RouteMap";
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
        <a className="brand" href="#top" aria-label="Trang chủ Xe Ghép Phong Cách"><span className="brand-mark">PC</span><span><strong>PHONG CÁCH</strong><small>Xe ghép & bao xe liên tỉnh</small></span></a>
        <nav className="desktop-nav" aria-label="Điều hướng chính"><a href="#dich-vu">Dịch vụ</a><a href="#tuyen-xe">Tuyến xe</a><a href="#ly-do">Cách phục vụ</a></nav>
        <a className="header-phone" href={`tel:${hotline}`}><span>☎</span><span><small>Tư vấn chuyến đi</small><strong>0987 663 883</strong></span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> Kết nối chuyến đi từ Hải Dương</div>
            <h1>Đi tỉnh nhẹ nhàng.<br /><span>Để Phong Cách lo xe.</span></h1>
            <p>Một đầu mối để tìm xe ghép, bao xe, đi sân bay và gửi hàng. Bạn chỉ cần cho biết điểm đi — bên mình tư vấn chuyến phù hợp.</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#dat-xe">Kiểm tra chuyến phù hợp <span>→</span></a><a className="btn btn-ghost" href={`tel:${hotline}`}>☎ Gọi tư vấn ngay</a></div>
            <div className="trust-row"><span>✓ Xác nhận rõ ràng</span><span>✓ Đón tận nơi</span><span>✓ Thanh toán sau chuyến</span></div>
          </div>
          <div className="hero-visual hero-photo" aria-label="Xe 7 chỗ Phong Cách trên tuyến liên tỉnh">
            <Image src="/images/hero-phong-cach.jpg" alt="Xe 7 chỗ hiện đại chạy trên đường liên tỉnh miền Bắc" fill priority sizes="(max-width: 700px) 100vw, 48vw" />
            <div className="hero-photo-shade" />
            <div className="hero-photo-badge"><span>PC</span><div><strong>Chuyến đi được chăm sóc từ đầu</strong><small>Tư vấn tuyến · Xác nhận xe · Hỗ trợ hành trình</small></div></div>
            <div className="hero-route-pill"><i /> Hải Dương <b>→</b> Hà Nội · Nội Bài · Các tỉnh</div>
          </div>
        </div>
      </section>

      <section className="booking-shell" id="dat-xe">
        <div className="booking-card" ref={formRef}>
          {stage === "success" ? (
            <div className="success-state" role="status"><div className="success-icon">✓</div><span className="success-kicker">Mã yêu cầu {bookingId}</span><h2>Yêu cầu đã được gửi</h2><p className="success-lead">Bên mình đã có thông tin chuyến và sẽ gọi lại để xác nhận xe, giờ đón cùng mức giá cuối.</p><div className="success-route"><strong>{booking.pickup}</strong><span>→</span><strong>{booking.dropoff}</strong></div><div className="summary-grid"><span><small>Ngày đi</small><b>{new Date(booking.date + "T00:00:00").toLocaleDateString("vi-VN")}</b></span><span><small>Giờ đón</small><b>{booking.time}</b></span><span><small>Nhu cầu</small><b>{booking.need === "parcel" ? "Gửi hàng" : `${booking.passengers} khách`}</b></span><span><small>Tham khảo</small><b>{formatPrice(price)}</b></span></div><div className="payment-confirmation"><b>Chưa cần thanh toán</b><span>Tư vấn viên xác nhận trước khi đi · Hoàn thành chuyến rồi mới thanh toán</span></div><div className="success-actions"><a className="btn btn-primary" href={process.env.NEXT_PUBLIC_ZALO_URL || `tel:${hotline}`}>Nhắn Zalo</a><a className="btn btn-ghost" href={`tel:${hotline}`}>Gọi tư vấn viên</a></div><button className="text-button" onClick={() => setStage("search")}>Gửi thêm yêu cầu khác</button></div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="booking-head"><div><span className="step-label">YÊU CẦU XE NHANH</span><h2>Bạn cần đi đâu?</h2><p>Nhập tuyến để xem thời gian và mức giá tham khảo.</p></div><span className="safe-note">✓ Chưa cần thanh toán</span></div>
              <div className="booking-process" aria-label="Quy trình yêu cầu đặt xe"><span><b>1</b> Gửi yêu cầu</span><i>→</i><span><b>2</b> Gọi xác nhận</span><i>→</i><span><b>3</b> Đi xong trả tiền</span></div>
              <div className="route-inputs">
                <label><span className="field-label"><i className="pin pickup-pin" />Điểm đón</span><input list="locations" value={booking.pickup} onChange={(e) => update("pickup", e.target.value)} placeholder="Nhập nơi đón" aria-invalid={!!errors.pickup} /><small className="error">{errors.pickup}</small></label>
                <button type="button" className="swap-button" onClick={() => setBooking((old) => ({ ...old, pickup: old.dropoff, dropoff: old.pickup }))} aria-label="Đổi điểm đón và điểm đến">⇅</button>
                <label><span className="field-label"><i className="pin dropoff-pin" />Điểm đến</span><input list="locations" value={booking.dropoff} onChange={(e) => update("dropoff", e.target.value)} placeholder="Bạn muốn đi đâu?" aria-invalid={!!errors.dropoff} /><small className="error">{errors.dropoff}</small></label>
                <datalist id="locations">{locations.map((item) => <option value={item} key={item} />)}</datalist>
              </div>
              <div className="quick-places"><span>Chọn nhanh:</span>{["Hà Nội", "Nội Bài", "Hải Phòng", "Quảng Ninh"].map((place) => <button type="button" key={place} onClick={() => update("dropoff", place)}>{place}</button>)}</div>
              <button type="button" className="location-button" onClick={useCurrentLocation}>⌖ Dùng vị trí của tôi</button>{locationMessage && <p className="location-message">{locationMessage}</p>}
              {stage === "search" && <button type="button" className="search-button" onClick={goToDetails}>Xem chuyến phù hợp <span>→</span></button>}

              {stage === "details" && <div className="details-panel">
                {selectedRoute && <RouteMap origin={selectedRoute.origin} destination={selectedRoute.destination} distanceKm={selectedRoute.distanceKm} durationMinutes={selectedRoute.durationMinutes} />}
                {selectedRoute ? <div className="route-summary"><div><span>{selectedRoute.origin}</span><b>→</b><span>{selectedRoute.destination}</span></div><p>Khoảng {selectedRoute.distanceKm} km · ~{Math.floor(selectedRoute.durationMinutes / 60)}h{selectedRoute.durationMinutes % 60 ? selectedRoute.durationMinutes % 60 : ""} · Khung giờ đến dự kiến {estimateArrival(selectedRoute.durationMinutes, booking.service)}</p>{booking.service === "shared" && <small>Chuyến ghép có thể chênh 10–30 phút theo lịch đón thực tế. Tư vấn viên sẽ báo rõ trước khi bạn xác nhận.</small>}</div> : <div className="route-summary unknown"><strong>Tuyến này cần tư vấn riêng</strong><p>Bạn cứ gửi yêu cầu. Phong Cách sẽ kiểm tra xe và báo giá trước khi chốt chuyến.</p></div>}
                <div className="form-section"><h3>1. Bạn cần gì?</h3><div className="choice-grid two"><Choice active={booking.need === "ride"} onClick={() => update("need", "ride")} icon="👤" title="Đi xe" note="Đi cá nhân hoặc theo nhóm" /><Choice active={booking.need === "parcel"} onClick={() => update("need", "parcel")} icon="📦" title="Gửi hàng" note="Gửi theo chuyến liên tỉnh" /></div></div>
                {booking.need === "ride" && <>
                  <div className="form-section"><h3>2. Chọn hình thức</h3><div className="choice-grid two"><Choice active={booking.service === "shared"} onClick={() => update("service", "shared")} icon="👥" title="Ghép chuyến" note="Tiết kiệm chi phí" badge="Phổ biến" /><Choice active={booking.service === "private"} onClick={() => update("service", "private")} icon="🚘" title="Bao xe" note="Riêng tư · Chủ động giờ" /></div></div>
                  <div className="form-section"><h3>3. Chọn loại xe</h3><div className="choice-grid three"><Choice active={booking.vehicle === "4-seat"} onClick={() => update("vehicle", "4-seat")} icon="🚗" title="4 chỗ" note="1–3 khách" /><Choice active={booking.vehicle === "7-seat"} onClick={() => update("vehicle", "7-seat")} icon="🚙" title="7 chỗ" note="4–6 khách" /><Choice active={booking.vehicle === "limo"} onClick={() => update("vehicle", "limo")} icon="🚐" title="Limo" note="Liên hệ báo giá" /></div></div>
                  <div className="passenger-row"><span><strong>Số người đi</strong><small>Tính cả trẻ em</small></span><div className="stepper"><button type="button" onClick={() => update("passengers", Math.max(1, booking.passengers - 1))}>−</button><b>{booking.passengers}</b><button type="button" onClick={() => update("passengers", Math.min(6, booking.passengers + 1))}>+</button></div></div>
                </>}
                <div className="form-section"><h3>{booking.need === "ride" ? "4" : "2"}. Thời gian & liên hệ</h3><div className="field-grid"><label><span>Ngày đi</span><input type="date" min={getTomorrow()} value={booking.date} onChange={(e) => update("date", e.target.value)} /><small className="error">{errors.date}</small></label><label><span>Giờ muốn đón</span><input type="time" value={booking.time} onChange={(e) => update("time", e.target.value)} /><small className="error">{errors.time}</small></label><label><span>Họ tên</span><input value={booking.name} onChange={(e) => update("name", e.target.value)} placeholder="Ví dụ: Anh Long" /><small className="error">{errors.name}</small></label><label><span>Số điện thoại</span><input inputMode="tel" value={booking.phone} onChange={(e) => update("phone", e.target.value)} placeholder="0987 663 883" /><small className="error">{errors.phone}</small></label></div></div>
                <div className="price-box"><div><span>Mức giá tham khảo</span><strong>{price ? formatPrice(price) : "Liên hệ báo giá"}</strong><small>{booking.service === "shared" && price ? `${formatPrice(selectedRoute?.sharedPrice || null)}/người · Chốt lại qua điện thoại` : "Tư vấn viên báo giá chính xác trước khi bạn xác nhận."}</small></div><span className="demo-label">CHƯA THANH TOÁN</span></div>
                <div className="pay-later-note"><span>✓</span><p><strong>Gửi yêu cầu hoàn toàn miễn phí</strong><small>Phong Cách gọi lại xác nhận. Bạn thanh toán sau khi hoàn thành chuyến.</small></p></div>
                <button className="submit-button" disabled={saving}>{saving ? "Đang gửi yêu cầu…" : "GỬI YÊU CẦU ĐẶT XE"}<span>→</span></button><p className="privacy-note">Không cần đăng ký · Không thu tiền ở bước này</p>
              </div>}
            </form>
          )}
        </div>
      </section>

      <section className="section" id="tuyen-xe"><div className="section-heading"><div><span className="section-kicker">HÀNH TRÌNH QUEN THUỘC</span><h2>Chọn nhanh tuyến bạn cần</h2><p>Thời gian và mức giá được hiển thị để tham khảo trước khi tư vấn viên kiểm tra xe.</p></div><Link href="/tuyen-xe">Xem tất cả tuyến →</Link></div><div className="route-cards">{routes.map((route) => <article className="route-card" key={route.id}><div className="route-icon">{route.tag ? "✈" : "↗"}</div><span>{route.tag || "Có chuyến mỗi ngày"}</span><h3>{route.origin} <b>↔</b><br />{route.destination}</h3><div className="route-meta"><strong>{route.sharedPrice ? `Từ ${Math.round(route.sharedPrice / 1000)}k` : "Liên hệ giá"}</strong><small>~{Math.floor(route.durationMinutes / 60)}h{route.durationMinutes % 60}</small></div><button onClick={() => chooseRoute(route)}>Xem chuyến <span>→</span></button></article>)}</div></section>

      <section className="section services" id="dich-vu">
        <div className="section-heading centered"><div><span className="section-kicker">PHỤC VỤ THEO NHU CẦU</span><h2>Một đầu mối cho mọi chuyến đi tỉnh</h2><p>Từ chuyến đi cá nhân đến cả gia đình, sân bay hay gửi hàng — bên mình đều tư vấn phương án vừa đủ.</p></div></div>
        <div className="service-showcase">
          <div className="service-showcase-photo"><Image src="/images/don-tan-noi.jpg" alt="Tài xế hỗ trợ khách sắp xếp hành lý trước chuyến đi" fill sizes="(max-width: 700px) 100vw, 54vw" /></div>
          <div className="service-showcase-copy"><span>CHĂM TỪ ĐIỂM ĐÓN</span><h3>Không chỉ tìm xe.<br />Bên mình theo chuyến đến khi bạn tới nơi.</h3><p>Tư vấn viên kiểm tra lịch xe, thống nhất điểm đón, báo rõ chi phí và hỗ trợ khi lịch trình thay đổi.</p><div className="care-points"><b>✓ Tư vấn đúng nhu cầu</b><b>✓ Xác nhận trước khi đi</b><b>✓ Hỗ trợ trong hành trình</b></div></div>
        </div>
        <div className="service-grid"><Service image="/images/hero-phong-cach.jpg" position="68% center" label="01" title="Xe 4 chỗ" text="Gọn gàng, linh hoạt cho 1–3 khách và hành lý vừa phải." /><Service image="/images/hero-phong-cach.jpg" position="42% center" label="02" title="Xe 7 chỗ" text="Thoải mái hơn cho gia đình hoặc nhóm từ 4–6 khách." /><Service image="/images/don-tan-noi.jpg" position="55% center" label="03" title="Bao xe riêng" text="Chủ động giờ đón, không gian riêng và lịch trình theo nhu cầu." /><Service image="/images/don-tan-noi.jpg" position="24% center" label="04" title="Gửi hàng theo chuyến" text="Nhận gửi hàng gọn nhẹ trên các tuyến liên tỉnh đang hoạt động." /></div>
      </section>

      <section className="why" id="ly-do"><div className="why-inner"><div className="why-copy"><span className="section-kicker light">PHONG CÁCH PHỤC VỤ</span><h2>Đi đường dài,<br />mọi thứ nên rõ từ đầu.</h2><p>Xe nào đón, giờ nào đi, chi phí dự kiến ra sao — tư vấn viên trao đổi trước để bạn chủ động quyết định.</p><a className="btn btn-white" href={`tel:${hotline}`}>Trao đổi với tư vấn viên</a></div><div className="why-grid"><Reason n="01" title="Rõ xe, rõ giờ" text="Thông tin chuyến được gọi xác nhận trước khi xe đến đón." /><Reason n="02" title="Một đầu mối hỗ trợ" text="Có người tiếp nhận và theo sát yêu cầu trong suốt hành trình." /><Reason n="03" title="Chọn xe vừa nhu cầu" text="Xe ghép, bao xe, 4 chỗ hay 7 chỗ đều được tư vấn phù hợp." /><Reason n="04" title="Đi xong mới trả tiền" text="Không thu tiền khi gửi yêu cầu; thanh toán sau khi hoàn thành chuyến." /></div></div></section>

      <section className="section steps"><div className="section-heading centered"><div><span className="section-kicker">CHỈ MẤT KHOẢNG 1 PHÚT</span><h2>Gửi yêu cầu xe trong 3 bước</h2><p>Không cần tài khoản, không cọc online tại bước gửi yêu cầu.</p></div></div><div className="steps-grid"><Step n="1" title="Chọn tuyến & nhu cầu" text="Cho biết nơi đón, điểm đến và loại chuyến." /><Step n="2" title="Nhận cuộc gọi xác nhận" text="Thống nhất xe, giờ đón và mức giá cuối." /><Step n="3" title="Đi xong mới thanh toán" text="Hoàn thành chuyến rồi thanh toán cho nhà xe." /></div></section>

      <section className="assurance section"><div className="section-heading"><div><span className="section-kicker">CAM KẾT TRONG QUY TRÌNH</span><h2>Yên tâm từ lúc gửi yêu cầu</h2><p>Mỗi bước đều ngắn gọn, rõ trách nhiệm và không tạo áp lực thanh toán.</p></div></div><div className="assurance-grid"><Assurance n="01" title="Chưa phát sinh giao dịch" text="Gửi thông tin chỉ để Phong Cách kiểm tra và giữ liên hệ với bạn." /><Assurance n="02" title="Bạn quyết định sau cuộc gọi" text="Chỉ xác nhận khi xe, thời gian và chi phí đã phù hợp với nhu cầu." /><Assurance n="03" title="Chi phí được nói rõ" text="Giá hiển thị là tham khảo; mức cuối được trao đổi trước chuyến đi." /></div></section>

      <section className="final-cta"><div><span>CẦN TƯ VẤN CHUYẾN?</span><h2>Chưa chắc nên đi ghép hay bao xe?</h2><p>Cứ gửi tuyến. Tư vấn viên sẽ gọi lại đề xuất phương án phù hợp — miễn phí và chưa cần thanh toán.</p></div><div><a className="btn btn-white" href="#dat-xe">Gửi yêu cầu để được gọi lại</a><a className="btn btn-outline-white" href={`tel:${hotline}`}>Gọi 0987 663 883</a></div></section>

      <footer><div className="footer-brand"><span className="brand-mark">PC</span><div><strong>XE GHÉP PHONG CÁCH</strong><p>Kết nối chuyến đi tỉnh từ Hải Dương.</p></div></div><div><strong>Liên hệ</strong><a href={`tel:${hotline}`}>0987 663 883</a><a href={process.env.NEXT_PUBLIC_ZALO_URL || `tel:${hotline}`}>Zalo Phong Cách</a></div><div><strong>Khám phá</strong><Link href="/tuyen-xe">Tất cả tuyến xe</Link><a href="#dich-vu">Dịch vụ</a></div><p className="copyright">© 2026 Xe Ghép Phong Cách. Mức giá trên website là tham khảo và được xác nhận trước chuyến.</p></footer>

      <nav className="bottom-nav" aria-label="Điều hướng trên điện thoại"><a href="#top"><span>⌂</span>Trang chủ</a><a className="active" href="#dat-xe"><span>＋</span>Đặt xe</a><a href="#tuyen-xe"><span>↗</span>Tuyến xe</a><a href={`tel:${hotline}`}><span>☎</span>Liên hệ</a></nav>
    </main>
  );
}

function Choice({ active, onClick, icon, title, note, badge }: { active: boolean; onClick: () => void; icon: string; title: string; note: string; badge?: string }) { return <button type="button" className={`choice ${active ? "selected" : ""}`} onClick={onClick}>{badge && <em>{badge}</em>}<span className="choice-icon">{icon}</span><span><strong>{title}</strong><small>{note}</small></span><i>{active ? "✓" : ""}</i></button>; }
function Service({ image, position, label, title, text }: { image: string; position: string; label: string; title: string; text: string }) { return <article className="service-card"><div className="service-card-image"><Image src={image} alt="" fill sizes="(max-width: 700px) 50vw, 25vw" style={{ objectPosition: position }} /></div><div className="service-card-body"><span>{label}</span><h3>{title}</h3><p>{text}</p><a href="#dat-xe">Gửi yêu cầu →</a></div></article>; }
function Reason({ n, title, text }: { n: string; title: string; text: string }) { return <article><span>{n}</span><h3>{title}</h3><p>{text}</p></article>; }
function Step({ n, title, text }: { n: string; title: string; text: string }) { return <article><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>; }
function Assurance({ n, title, text }: { n: string; title: string; text: string }) { return <article><span>{n}</span><h3>{title}</h3><p>{text}</p></article>; }
