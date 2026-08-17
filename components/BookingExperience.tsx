"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import type { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import AddressField, { type AddressSuggestion } from "@/components/AddressField";
import RouteMap from "@/components/RouteMap";
import { locationCoordinates } from "@/data/location-coordinates";
import type { RoutePrice } from "@/data/routes";
import { findRoute, locations } from "@/data/routes";
import { BrowserLocationProvider } from "@/lib/location";
import { estimatePrice, type ServiceType, type VehicleType } from "@/lib/pricing";
import { captureAttribution } from "@/lib/tracking";

const hotline = "0987663883";
const formatPrice = (price: number | null) => price ? new Intl.NumberFormat("vi-VN").format(price) + "đ" : "Đang tính giá";
const getTomorrow = () => { const date = new Date(); date.setDate(date.getDate() + 1); return date.toISOString().slice(0, 10); };
const subscribeMobile = (callback: () => void) => { const query = window.matchMedia("(max-width: 700px)"); query.addEventListener("change", callback); return () => query.removeEventListener("change", callback); };
const getMobileSnapshot = () => window.matchMedia("(max-width: 700px)").matches;
const getMobileServerSnapshot = () => false;

type Props = { routes: RoutePrice[] };
type BookingState = {
  pickup: string; dropoff: string; need: "ride" | "parcel"; service: ServiceType; vehicle: VehicleType;
  passengers: number; date: string; time: string; name: string; phone: string;
  pickupCity?: string; dropoffCity?: string; pickupLat?: number; pickupLng?: number; dropoffLat?: number; dropoffLng?: number;
  cargoName: string; cargoLength: number; cargoWidth: number; cargoHeight: number; cargoWeight: number;
};

const inferCity = (value: string) => locations.find((location) => value.toLocaleLowerCase("vi").includes(location.toLocaleLowerCase("vi"))) || "";
const nearestCity = (lat: number, lng: number) => Object.entries(locationCoordinates).sort(([, a], [, b]) => ((a[0] - lat) ** 2 + (a[1] - lng) ** 2) - ((b[0] - lat) ** 2 + (b[1] - lng) ** 2))[0]?.[0] || "";

export default function BookingExperience({ routes }: Props) {
  const [booking, setBooking] = useState<BookingState>({ pickup: "Hải Dương", pickupCity: "Hải Dương", pickupLat: locationCoordinates["Hải Dương"][0], pickupLng: locationCoordinates["Hải Dương"][1], dropoff: "", need: "ride", service: "shared", vehicle: "4-seat", passengers: 1, date: getTomorrow(), time: "07:00", name: "", phone: "", cargoName: "", cargoLength: 30, cargoWidth: 20, cargoHeight: 15, cargoWeight: 2 });
  const [stage, setStage] = useState<"form" | "success">("form");
  const [showMobileMap, setShowMobileMap] = useState(false);
  const isMobile = useSyncExternalStore(subscribeMobile, getMobileSnapshot, getMobileServerSnapshot);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [locationMessage, setLocationMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const formRef = useRef<HTMLDivElement>(null);
  const selectedRoute = useMemo(() => findRoute(booking.pickupCity || inferCity(booking.pickup), booking.dropoffCity || inferCity(booking.dropoff)), [booking.pickup, booking.pickupCity, booking.dropoff, booking.dropoffCity]);
  const approximateDistanceKm = useMemo(() => {
    if (!booking.pickupLat || !booking.pickupLng || !booking.dropoffLat || !booking.dropoffLng) return undefined;
    const earthRadius = 6371; const toRadians = (value: number) => value * Math.PI / 180;
    const latitudeDelta = toRadians(booking.dropoffLat - booking.pickupLat); const longitudeDelta = toRadians(booking.dropoffLng - booking.pickupLng);
    const a = Math.sin(latitudeDelta / 2) ** 2 + Math.cos(toRadians(booking.pickupLat)) * Math.cos(toRadians(booking.dropoffLat)) * Math.sin(longitudeDelta / 2) ** 2;
    return Math.max(1, Math.round(earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 1.2));
  }, [booking.dropoffLat, booking.dropoffLng, booking.pickupLat, booking.pickupLng]);
  const price = useMemo(() => estimatePrice(selectedRoute, booking.need, booking.service, booking.vehicle, booking.passengers, approximateDistanceKm, { lengthCm: booking.cargoLength, widthCm: booking.cargoWidth, heightCm: booking.cargoHeight, weightKg: booking.cargoWeight }), [approximateDistanceKm, booking.cargoHeight, booking.cargoLength, booking.cargoWeight, booking.cargoWidth, booking.need, booking.passengers, booking.service, booking.vehicle, selectedRoute]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const from = params.get("from"); const to = params.get("to");
    if (from || to) queueMicrotask(() => setBooking((old) => {
      const pickup = from || old.pickup; const dropoff = to || old.dropoff;
      const pickupCity = inferCity(pickup) || old.pickupCity; const dropoffCity = inferCity(dropoff);
      const fromCoordinates = pickupCity ? locationCoordinates[pickupCity] : undefined; const toCoordinates = dropoffCity ? locationCoordinates[dropoffCity] : undefined;
      return { ...old, pickup, dropoff, pickupCity, dropoffCity, pickupLat: fromCoordinates?.[0] || old.pickupLat, pickupLng: fromCoordinates?.[1] || old.pickupLng, dropoffLat: toCoordinates?.[0], dropoffLng: toCoordinates?.[1] };
    }));
  }, []);

  const update = <K extends keyof BookingState>(key: K, value: BookingState[K]) => setBooking((old) => ({ ...old, [key]: value }));
  const chooseRoute = (route: RoutePrice) => {
    const from = locationCoordinates[route.origin]; const to = locationCoordinates[route.destination];
    setBooking((old) => ({ ...old, pickup: route.origin, pickupCity: route.origin, pickupLat: from?.[0], pickupLng: from?.[1], dropoff: route.destination, dropoffCity: route.destination, dropoffLat: to?.[0], dropoffLng: to?.[1] }));
    setShowMobileMap(false);
    requestAnimationFrame(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };
  const selectAddress = (side: "pickup" | "dropoff", suggestion: AddressSuggestion) => {
    setShowMobileMap(false);
    setBooking((old) => {
      const typedValue = side === "pickup" ? old.pickup.trim() : old.dropoff.trim();
      const label = /\d/.test(typedValue) ? typedValue : suggestion.label;
      return side === "pickup"
        ? { ...old, pickup: label, pickupCity: suggestion.city || inferCity(suggestion.label), pickupLat: suggestion.lat, pickupLng: suggestion.lng }
        : { ...old, dropoff: label, dropoffCity: suggestion.city || inferCity(suggestion.label), dropoffLat: suggestion.lat, dropoffLng: suggestion.lng };
    });
  };
  const useCurrentLocation = async () => {
    setLocationMessage("Đang xác định vị trí…");
    try {
      const result = await new BrowserLocationProvider().current();
      setBooking((old) => ({ ...old, pickup: result.label, pickupCity: result.lat && result.lng ? nearestCity(result.lat, result.lng) : old.pickupCity, pickupLat: result.lat, pickupLng: result.lng }));
      setLocationMessage("Đã lấy vị trí. Bạn vẫn có thể sửa địa chỉ đón.");
    } catch {
      setLocationMessage("Không sao, bạn có thể nhập điểm đón bằng tay.");
    }
  };
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!booking.pickup.trim()) nextErrors.pickup = "Nhập điểm đón.";
    if (!booking.dropoff.trim()) nextErrors.dropoff = "Nhập điểm đến.";
    if (!booking.pickupLat || !booking.pickupLng) nextErrors.pickup = "Chọn một địa chỉ trong danh sách gợi ý.";
    if (!booking.dropoffLat || !booking.dropoffLng) nextErrors.dropoff = "Chọn một địa chỉ trong danh sách gợi ý.";
    if (booking.pickupLat === booking.dropoffLat && booking.pickupLng === booking.dropoffLng) nextErrors.dropoff = "Điểm đến cần khác điểm đón.";
    if (!booking.name.trim()) nextErrors.name = "Vui lòng nhập họ tên để Phong Cách tiện xưng hô.";
    if (!/^(0|\+84)[0-9]{9}$/.test(booking.phone.replace(/\s/g, ""))) nextErrors.phone = "Vui lòng nhập số điện thoại Việt Nam hợp lệ.";
    if (!booking.date) nextErrors.date = "Vui lòng chọn ngày đi.";
    if (!booking.time) nextErrors.time = "Vui lòng chọn giờ muốn đón.";
    if (booking.need === "parcel" && !booking.cargoName.trim()) nextErrors.cargoName = "Nhập tên hàng hóa.";
    if (booking.need === "parcel" && [booking.cargoLength, booking.cargoWidth, booking.cargoHeight, booking.cargoWeight].some((value) => !value || value <= 0)) nextErrors.cargoSize = "Kích thước và cân nặng cần lớn hơn 0.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSaving(true);
    const id = `PC-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
    const payload = {
      booking_id: id, created_at: new Date().toISOString(), customer_name: booking.name.trim(), phone: booking.phone.trim(),
      pickup_address: booking.pickup, pickup_lat: booking.pickupLat || null, pickup_lng: booking.pickupLng || null,
      dropoff_address: booking.dropoff, dropoff_lat: booking.dropoffLat || null, dropoff_lng: booking.dropoffLng || null, departure_date: booking.date, departure_time: booking.time,
      service_type: booking.need === "parcel" ? "parcel" : booking.service, passenger_count: booking.need === "ride" ? booking.passengers : 0,
      vehicle_type: booking.vehicle, estimated_distance: selectedRoute?.distanceKm || approximateDistanceKm || null, estimated_duration: selectedRoute?.durationMinutes || null,
      estimated_price: price, cargo_name: booking.need === "parcel" ? booking.cargoName.trim() : null,
      cargo_length_cm: booking.need === "parcel" ? booking.cargoLength : null, cargo_width_cm: booking.need === "parcel" ? booking.cargoWidth : null,
      cargo_height_cm: booking.need === "parcel" ? booking.cargoHeight : null, cargo_weight_kg: booking.need === "parcel" ? booking.cargoWeight : null,
      status: "new", ...captureAttribution(),
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
            <div className="hero-kicker"><span /> XE GHÉP LIÊN TỈNH</div>
            <h1><span className="hero-line hero-line-dark">Đi tỉnh êm ru,</span><span className="hero-line">Ngủ một hơi là&nbsp;đến!</span></h1>
            <p>Nhà Xe Phong Cách chuyên xe ghép tuyến tỉnh</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#dat-xe">Tìm Chuyến Ngay <span>→</span></a><a className="btn btn-ghost" href={`tel:${hotline}`}>Gọi tư vấn</a></div>
            <div className="trust-row"><span className="brand-values">Văn Minh - An Toàn - Tử Tế</span></div>
          </div>
          <div className="hero-visual hero-photo" aria-label="Xe 7 chỗ Phong Cách trên tuyến liên tỉnh">
            <Image src="/images/hero-phong-cach.jpg" alt="Xe Phong Cách di chuyển trên tuyến đường liên tỉnh" fill priority sizes="(max-width: 700px) 100vw, 48vw" />
            <div className="hero-photo-shade" />
            <div className="hero-route-pill"><i /> Xe ghép liên tỉnh</div>
            <div className="hero-service-pill"><span>⌖</span><div><small>Đưa đón tận nơi</small><strong>Xe 4 chỗ · 7 chỗ</strong></div></div>
          </div>
        </div>
      </section>

      <section className="booking-shell" id="dat-xe">
        <div className="booking-card" ref={formRef}>
          {stage === "success" ? (
            <div className="success-state" role="status"><div className="success-icon">✓</div><span className="success-kicker">Mã yêu cầu {bookingId}</span><h2>Yêu cầu đã được gửi</h2><p className="success-lead">Bên mình sẽ gọi lại để xác nhận xe, giờ đón và mức giá cuối.</p><div className="success-route"><strong>{booking.pickup}</strong><span>→</span><strong>{booking.dropoff}</strong></div><div className="summary-grid"><span><small>Ngày đi</small><b>{new Date(booking.date + "T00:00:00").toLocaleDateString("vi-VN")}</b></span><span><small>Giờ đón</small><b>{booking.time}</b></span><span><small>Nhu cầu</small><b>{booking.need === "parcel" ? "Gửi hàng" : `${booking.passengers} khách`}</b></span><span><small>Tham khảo</small><b>{formatPrice(price)}</b></span></div><div className="payment-confirmation"><b>Đặt trước miễn phí, đến nơi mới thanh toán</b></div><div className="success-actions"><a className="btn btn-primary" href={process.env.NEXT_PUBLIC_ZALO_URL || `tel:${hotline}`}>Nhắn Zalo</a><a className="btn btn-ghost" href={`tel:${hotline}`}>Gọi tư vấn viên</a></div><button className="text-button" onClick={() => setStage("form")}>Gửi thêm yêu cầu khác</button></div>
          ) : (
            <form className="compact-booking" onSubmit={submit} noValidate>
              <div className="booking-head"><div><span className="step-label">Đặt xe nhanh</span><h2>Đón tận nơi, đưa về tận cửa</h2></div></div>
              <div className="address-search-stack">
                <AddressField label="Đón tại" value={booking.pickup} placeholder="Ví dụ: 30 Nguyễn Khuyến, Hà Nội" tone="pickup" error={errors.pickup} onChange={(value) => { setShowMobileMap(false); setBooking((old) => ({ ...old, pickup: value, pickupCity: inferCity(value), pickupLat: undefined, pickupLng: undefined })); }} onSelect={(suggestion) => selectAddress("pickup", suggestion)} />
                <button type="button" className="compact-swap" onClick={() => setBooking((old) => ({ ...old, pickup: old.dropoff, pickupCity: old.dropoffCity, pickupLat: old.dropoffLat, pickupLng: old.dropoffLng, dropoff: old.pickup, dropoffCity: old.pickupCity, dropoffLat: old.pickupLat, dropoffLng: old.pickupLng }))} aria-label="Đổi điểm đón và điểm đến">⇅</button>
                <AddressField label="Trả tại" value={booking.dropoff} placeholder="Ví dụ: 40 Hồ Sen, Hải Phòng" tone="dropoff" error={errors.dropoff} onChange={(value) => { setShowMobileMap(false); setBooking((old) => ({ ...old, dropoff: value, dropoffCity: inferCity(value), dropoffLat: undefined, dropoffLng: undefined })); }} onSelect={(suggestion) => selectAddress("dropoff", suggestion)} />
              </div>
              <div className="address-actions"><button type="button" onClick={useCurrentLocation}>⌖ Dùng vị trí hiện tại</button><span>{locationMessage || "Chọn địa chỉ trong gợi ý để ghim đúng bản đồ"}</span></div>
              {booking.pickupLat && booking.pickupLng && booking.dropoffLat && booking.dropoffLng ? <>
                {isMobile && !showMobileMap ? <button type="button" className="route-map-trigger" onClick={() => setShowMobileMap(true)}><span>⌖</span><div><strong>Xem hành trình</strong><small>{selectedRoute?.distanceKm || approximateDistanceKm} km · kiểm tra điểm đón và trả</small></div><b>→</b></button> : <div className="booking-map-open"><RouteMap compact origin={booking.pickup} destination={booking.dropoff} originCoordinates={[booking.pickupLat, booking.pickupLng]} destinationCoordinates={[booking.dropoffLat, booking.dropoffLng]} distanceKm={selectedRoute?.distanceKm || approximateDistanceKm} durationMinutes={selectedRoute?.durationMinutes} />{isMobile && <button type="button" className="map-collapse" onClick={() => setShowMobileMap(false)}>Thu gọn bản đồ</button>}</div>}
              </> : <div className="map-awaiting"><span>⌖</span><div><strong>Chọn đủ hai địa chỉ</strong><small>Sau đó có thể xem hành trình và số km.</small></div></div>}
              <div className="compact-config">
                <CompactOptions label="Nhu cầu" value={booking.need} options={[{ value: "ride", label: "Đi xe" }, { value: "parcel", label: "Gửi hàng" }]} onChange={(value) => update("need", value as BookingState["need"])} />
                {booking.need === "ride" && <CompactOptions label="Hình thức" value={booking.service} options={[{ value: "shared", label: "Xe ghép" }, { value: "private", label: "Bao xe" }]} onChange={(value) => update("service", value as ServiceType)} />}
                {booking.need === "ride" && <CompactOptions label="Loại xe" value={booking.vehicle} options={[{ value: "4-seat", label: "4 chỗ" }, { value: "7-seat", label: "7 chỗ" }]} onChange={(value) => update("vehicle", value as VehicleType)} />}
                {booking.need === "ride" && <div className="compact-control passenger-compact"><span>Số khách</span><div className="mini-stepper"><button type="button" onClick={() => update("passengers", Math.max(1, booking.passengers - 1))}>−</button><b>{booking.passengers}</b><button type="button" onClick={() => update("passengers", Math.min(6, booking.passengers + 1))}>+</button></div></div>}
              </div>
              {booking.need === "parcel" && <div className="cargo-details"><label className="cargo-name"><span>Tên hàng hóa</span><input value={booking.cargoName} onChange={(event) => update("cargoName", event.target.value)} placeholder="Ví dụ: Thùng quần áo, hồ sơ…" /><small>{errors.cargoName}</small></label><div className="cargo-measures"><Measure label="Dài" unit="cm" value={booking.cargoLength} onChange={(value) => update("cargoLength", value)} /><Measure label="Rộng" unit="cm" value={booking.cargoWidth} onChange={(value) => update("cargoWidth", value)} /><Measure label="Cao" unit="cm" value={booking.cargoHeight} onChange={(value) => update("cargoHeight", value)} /><Measure label="Nặng" unit="kg" value={booking.cargoWeight} onChange={(value) => update("cargoWeight", value)} /></div>{errors.cargoSize && <small className="cargo-error">{errors.cargoSize}</small>}<p>Giá tính theo quãng đường và trọng lượng quy đổi Dài × Rộng × Cao / 6.000.</p></div>}
              <div className="compact-fields">
                <label><span>Ngày đi</span><input type="date" min={getTomorrow()} value={booking.date} onChange={(event) => update("date", event.target.value)} /><small>{errors.date}</small></label>
                <label><span>Giờ đón</span><input type="time" value={booking.time} onChange={(event) => update("time", event.target.value)} /><small>{errors.time}</small></label>
                <label><span>Họ tên</span><input value={booking.name} onChange={(event) => update("name", event.target.value)} placeholder="Tên người đi" /><small>{errors.name}</small></label>
                <label><span>Số điện thoại</span><input inputMode="tel" value={booking.phone} onChange={(event) => update("phone", event.target.value)} placeholder="0987 663 883" /><small>{errors.phone}</small></label>
              </div>
              <div className="compact-checkout"><div><span>Giá ước tính</span><strong>{price ? formatPrice(price) : "Chọn điểm đến"}</strong><small>Giá cuối được xác nhận qua điện thoại</small></div><button className="submit-button" disabled={saving}>{saving ? "Đang gửi…" : "Gửi yêu cầu"}<span>→</span></button></div>
              <div className="compact-payment-note">✓ Đặt trước miễn phí, đến nơi mới thanh toán</div>
            </form>
          )}
        </div>
      </section>

      <section className="section" id="tuyen-xe"><div className="section-heading"><div><span className="section-kicker">HÀNH TRÌNH QUEN THUỘC</span><h2>Chọn nhanh tuyến bạn cần</h2><p>Thời gian và mức giá được hiển thị để tham khảo trước khi tư vấn viên kiểm tra xe.</p></div><Link href="/tuyen-xe">Xem tất cả tuyến →</Link></div><div className="route-cards">{routes.map((route) => <article className="route-card" key={route.id}><div className="route-icon">{route.tag ? "✈" : "↗"}</div><span>{route.tag || "Có chuyến mỗi ngày"}</span><h3>{route.origin} <b>↔</b><br />{route.destination}</h3><div className="route-meta"><strong>{route.sharedPrice ? `Từ ${Math.round(route.sharedPrice / 1000)}k` : "Liên hệ giá"}</strong><small>~{Math.floor(route.durationMinutes / 60)}h{route.durationMinutes % 60}</small></div><button onClick={() => chooseRoute(route)}>Xem chuyến <span>→</span></button></article>)}</div></section>

      <section className="section services" id="dich-vu">
        <div className="section-heading centered"><div><span className="section-kicker">PHỤC VỤ THEO NHU CẦU</span><h2>Một đầu mối cho mọi chuyến đi tỉnh</h2><p>Từ chuyến đi cá nhân đến cả gia đình, sân bay hay gửi hàng — bên mình đều tư vấn phương án vừa đủ.</p></div></div>
        <div className="service-showcase">
          <div className="service-showcase-photo campaign-photo"><Image src="/images/luon-co-xe-hop-chuyen.jpg" alt="Xe ghép Phong Cách luôn có xe hợp chuyến" fill sizes="(max-width: 700px) 100vw, 54vw" /></div>
          <div className="service-showcase-copy"><span>CHĂM TỪ ĐIỂM ĐÓN</span><h3>Không chỉ tìm xe.<br />Bên mình theo chuyến đến khi bạn tới nơi.</h3><p>Tư vấn viên kiểm tra lịch xe, thống nhất điểm đón, báo rõ chi phí và hỗ trợ khi lịch trình thay đổi.</p><div className="care-points"><b>✓ Tư vấn đúng nhu cầu</b><b>✓ Xác nhận trước khi đi</b><b>✓ Hỗ trợ trong hành trình</b></div></div>
        </div>
        <div className="service-grid"><Service image="/images/hero-xe-ghep-phong-cach.jpg" position="70% center" label="01" title="Xe 4 chỗ" text="Gọn gàng, linh hoạt cho 1–3 khách và hành lý vừa phải." /><Service image="/images/hero-xe-ghep-phong-cach.jpg" position="88% center" label="02" title="Xe 7 chỗ" text="Thoải mái hơn cho gia đình hoặc nhóm từ 4–6 khách." /><Service image="/images/don-tan-noi.jpg" position="55% center" label="03" title="Bao xe riêng" text="Chủ động giờ đón, không gian riêng và lịch trình theo nhu cầu." /><Service image="/images/don-tan-noi.jpg" position="24% center" label="04" title="Gửi hàng theo chuyến" text="Nhận gửi hàng gọn nhẹ trên các tuyến liên tỉnh đang hoạt động." /></div>
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

function CompactOptions({ label, value, options, onChange }: { label: string; value: string; options: Array<{ value: string; label: string }>; onChange: (value: string) => void }) { return <div className="compact-control"><span>{label}</span><div>{options.map((option) => <button type="button" className={value === option.value ? "active" : ""} key={option.value} onClick={() => onChange(option.value)}>{option.label}</button>)}</div></div>; }
function Measure({ label, unit, value, onChange }: { label: string; unit: string; value: number; onChange: (value: number) => void }) { return <label><span>{label}</span><div><input type="number" inputMode="decimal" min="0.1" step="0.1" value={value} onChange={(event) => onChange(Number(event.target.value))} /><small>{unit}</small></div></label>; }
function Service({ image, position, label, title, text }: { image: string; position: string; label: string; title: string; text: string }) { return <article className="service-card"><div className="service-card-image"><Image src={image} alt="" fill sizes="(max-width: 700px) 50vw, 25vw" style={{ objectPosition: position }} /></div><div className="service-card-body"><span>{label}</span><h3>{title}</h3><p>{text}</p><a href="#dat-xe">Gửi yêu cầu →</a></div></article>; }
function Reason({ n, title, text }: { n: string; title: string; text: string }) { return <article><span>{n}</span><h3>{title}</h3><p>{text}</p></article>; }
function Step({ n, title, text }: { n: string; title: string; text: string }) { return <article><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>; }
function Assurance({ n, title, text }: { n: string; title: string; text: string }) { return <article><span>{n}</span><h3>{title}</h3><p>{text}</p></article>; }
