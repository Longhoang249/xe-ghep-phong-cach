"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { locationCoordinates } from "@/data/location-coordinates";
import type { RoutePrice } from "@/data/routes";
import { findPublishedRoute, publishedLocations as locations } from "@/data/seo/published-content";
import { estimatePrice, type ServiceType, type VehicleType } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";
import { captureAttribution, initializeAttribution } from "@/lib/tracking";
const formatPrice = (price: number | null) => price ? new Intl.NumberFormat("vi-VN").format(price) + "đ" : "Đang tính giá";
const getTomorrow = () => { const date = new Date(); date.setDate(date.getDate() + 1); return date.toISOString().slice(0, 10); };
const normalizeRouteText = (value: string) => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/đ/g, "d").toLocaleLowerCase("vi");
const locationProvince: Record<string, string> = { "Nội Bài": "Hà Nội", "Cát Bi": "Hải Phòng", "Phủ Lý": "Hà Nam" };
const provinceOf = (location: string) => locationProvince[location] || location;

const spotlightRouteOrder = ["hd-hp", "hd-qn", "hp-qn", "hd-hn", "hd-nb", "hd-cb"];
const spotlightRouteIds = new Set(spotlightRouteOrder);
const spotlightRouteRank = new Map(spotlightRouteOrder.map((routeId, index) => [routeId, index]));
const featuredProvinces = new Set(["Hải Dương", "Hải Phòng", "Quảng Ninh"]);
const provinceShortcutOrder = ["Hải Dương", "Hải Phòng", "Quảng Ninh", "Hà Nội", "Bắc Ninh", "Bắc Giang", "Thái Nguyên", "Vĩnh Phúc", "Phú Thọ", "Thái Bình", "Nam Định", "Hưng Yên", "Hà Nam", "Ninh Bình", "Thanh Hoá"];
const provinceShortcutRank = new Map(provinceShortcutOrder.map((province, index) => [province, index]));
const heroSlides = [
  { src: "/images/hero-xe-ghep-phong-cach.png", alt: "Xe Ghép Phong Cách chuyên tuyến Hải Dương, Hải Phòng và Quảng Ninh", fit: "contain" as const, position: "center" },
  { src: "/images/hero-phong-cach-fleet.png", alt: "Đội xe 4 đến 7 chỗ phục vụ các tuyến liên tỉnh của Phong Cách", fit: "cover" as const, position: "center 62%" },
  { src: "/images/dich-vu-xe-4-cho.png", alt: "Xe 4 chỗ Phong Cách dành cho khách lẻ và nhóm nhỏ", fit: "cover" as const, position: "center 58%" },
  { src: "/images/dich-vu-xe-7-cho.png", alt: "Xe 7 chỗ Phong Cách dành cho gia đình và nhóm khách", fit: "cover" as const, position: "center 58%" },
  { src: "/images/don-tan-noi.jpg", alt: "Tài xế Phong Cách hỗ trợ hành lý khi đón khách tận nơi", fit: "cover" as const, position: "55% center" },
];

type Props = { routes: RoutePrice[] };
type BookingState = {
  pickup: string; dropoff: string; need: "ride" | "parcel"; service: ServiceType; vehicle: VehicleType;
  passengers: number; date: string; time: string; name: string; phone: string;
  pickupCity?: string; dropoffCity?: string; pickupLat?: number; pickupLng?: number; dropoffLat?: number; dropoffLng?: number;
  cargoName: string; cargoLength: number; cargoWidth: number; cargoHeight: number; cargoWeight: number;
};

const inferCity = (value: string) => locations.find((location) => value.toLocaleLowerCase("vi").includes(location.toLocaleLowerCase("vi"))) || "";

function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [manualPaused, setManualPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const active = heroSlides[activeSlide];

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (manualPaused || interacting || reducedMotion) return;
    const timer = window.setTimeout(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 6000);
    return () => window.clearTimeout(timer);
  }, [activeSlide, interacting, manualPaused]);

  const goTo = (index: number) => setActiveSlide((index + heroSlides.length) % heroSlides.length);

  return (
    <div
      className="hero-visual hero-photo hero-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hình ảnh dịch vụ xe ghép liên tỉnh Phong Cách"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false);
      }}
      onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const delta = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
        if (Math.abs(delta) > 45) goTo(activeSlide + (delta < 0 ? 1 : -1));
        touchStartX.current = null;
      }}
    >
      <div className="hero-carousel-slide" key={active.src} aria-live={manualPaused ? "polite" : "off"}>
        <Image
          src={active.src}
          alt={active.alt}
          fill
          loading="eager"
          fetchPriority={activeSlide === 0 ? "high" : "auto"}
          sizes="(max-width: 700px) calc(100vw - 36px), 48vw"
          style={{ objectFit: active.fit, objectPosition: active.position }}
        />
      </div>
      <button type="button" className="hero-carousel-arrow previous" aria-label="Xem ảnh trước" onClick={() => goTo(activeSlide - 1)}>‹</button>
      <button type="button" className="hero-carousel-arrow next" aria-label="Xem ảnh tiếp theo" onClick={() => goTo(activeSlide + 1)}>›</button>
      <div className="hero-carousel-toolbar">
        <div className="hero-carousel-dots" aria-label="Chọn ảnh">
          {heroSlides.map((slide, index) => (
            <button
              type="button"
              className={index === activeSlide ? "active" : ""}
              aria-label={`Xem ảnh ${index + 1}: ${slide.alt}`}
              aria-current={index === activeSlide ? "true" : undefined}
              key={slide.src}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <button type="button" className="hero-carousel-pause" aria-label={manualPaused ? "Tiếp tục tự chuyển ảnh" : "Dừng tự chuyển ảnh"} aria-pressed={manualPaused} onClick={() => setManualPaused((paused) => !paused)}>
          {manualPaused ? "▶" : "Ⅱ"}
        </button>
      </div>
    </div>
  );
}

export default function BookingExperience({ routes }: Props) {
  const [booking, setBooking] = useState<BookingState>({ pickup: "Hải Dương", pickupCity: "Hải Dương", pickupLat: locationCoordinates["Hải Dương"][0], pickupLng: locationCoordinates["Hải Dương"][1], dropoff: "", need: "ride", service: "shared", vehicle: "4-seat", passengers: 1, date: getTomorrow(), time: "07:00", name: "", phone: "", cargoName: "", cargoLength: 30, cargoWidth: 20, cargoHeight: 15, cargoWeight: 2 });
  const [stage, setStage] = useState<"form" | "success">("form");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [routeQuery, setRouteQuery] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const formRef = useRef<HTMLDivElement>(null);
  const routeProvinces = useMemo(() => Array.from(new Set(routes.flatMap((route) => [provinceOf(route.origin), provinceOf(route.destination)]))).sort((provinceA, provinceB) => {
    const rankA = provinceShortcutRank.get(provinceA) ?? Number.MAX_SAFE_INTEGER;
    const rankB = provinceShortcutRank.get(provinceB) ?? Number.MAX_SAFE_INTEGER;
    return rankA - rankB || provinceA.localeCompare(provinceB, "vi");
  }), [routes]);
  const selectedRoute = useMemo(() => findPublishedRoute(booking.pickupCity || inferCity(booking.pickup), booking.dropoffCity || inferCity(booking.dropoff)), [booking.pickup, booking.pickupCity, booking.dropoff, booking.dropoffCity]);
  const approximateDistanceKm = useMemo(() => {
    if (!booking.pickupLat || !booking.pickupLng || !booking.dropoffLat || !booking.dropoffLng) return undefined;
    const earthRadius = 6371; const toRadians = (value: number) => value * Math.PI / 180;
    const latitudeDelta = toRadians(booking.dropoffLat - booking.pickupLat); const longitudeDelta = toRadians(booking.dropoffLng - booking.pickupLng);
    const a = Math.sin(latitudeDelta / 2) ** 2 + Math.cos(toRadians(booking.pickupLat)) * Math.cos(toRadians(booking.dropoffLat)) * Math.sin(longitudeDelta / 2) ** 2;
    return Math.max(1, Math.round(earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 1.2));
  }, [booking.dropoffLat, booking.dropoffLng, booking.pickupLat, booking.pickupLng]);
  const price = useMemo(() => estimatePrice(selectedRoute, booking.need, booking.service, booking.vehicle, booking.passengers, approximateDistanceKm, { lengthCm: booking.cargoLength, widthCm: booking.cargoWidth, heightCm: booking.cargoHeight, weightKg: booking.cargoWeight }), [approximateDistanceKm, booking.cargoHeight, booking.cargoLength, booking.cargoWeight, booking.cargoWidth, booking.need, booking.passengers, booking.service, booking.vehicle, selectedRoute]);

  useEffect(() => {
    initializeAttribution();
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
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!booking.pickup.trim()) nextErrors.pickup = "Nhập điểm đón.";
    if (!booking.dropoff.trim()) nextErrors.dropoff = "Nhập điểm đến.";
    if (booking.pickup.trim().toLocaleLowerCase("vi") === booking.dropoff.trim().toLocaleLowerCase("vi")) nextErrors.dropoff = "Điểm đến cần khác điểm đón.";
    if (!booking.name.trim()) nextErrors.name = "Vui lòng nhập họ tên để Phong Cách tiện xưng hô.";
    if (!/^(0|\+84)[0-9]{9}$/.test(booking.phone.replace(/\s/g, ""))) nextErrors.phone = "Vui lòng nhập số điện thoại Việt Nam hợp lệ.";
    if (!booking.date) nextErrors.date = "Vui lòng chọn ngày đi.";
    if (!booking.time) nextErrors.time = "Vui lòng chọn giờ muốn đón.";
    if (booking.need === "parcel" && !booking.cargoName.trim()) nextErrors.cargoName = "Nhập tên hàng hóa.";
    if (booking.need === "parcel" && [booking.cargoLength, booking.cargoWidth, booking.cargoHeight, booking.cargoWeight].some((value) => !value || value <= 0)) nextErrors.cargoSize = "Kích thước và cân nặng cần lớn hơn 0.";
    setErrors(nextErrors);
    if (nextErrors.cargoName || nextErrors.cargoSize) setShowAdvanced(true);
    if (Object.keys(nextErrors).length) return;
    trackEvent("booking_form_submit", {
      route_slug: selectedRoute?.slug || "custom-route",
      need: booking.need,
      service: booking.service,
      vehicle: booking.vehicle,
      passengers: booking.passengers,
    });
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
    let delivery = "local";
    try {
      const saved = JSON.parse(localStorage.getItem("phong-cach-bookings") || "[]");
      localStorage.setItem("phong-cach-bookings", JSON.stringify([payload, ...saved].slice(0, 50)));
      const response = await fetch("/api/bookings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      delivery = response.ok ? "api" : "api-error";
    } catch { delivery = "local-fallback"; }
    trackEvent("booking_form_saved", { route_slug: selectedRoute?.slug || "custom-route", delivery });
    setBookingId(id); setStage("success"); setSaving(false);
    requestAnimationFrame(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }));
  };

  const chooseQuickRoute = (route: RoutePrice) => {
    const pickupCoordinates = locationCoordinates[route.origin];
    const dropoffCoordinates = locationCoordinates[route.destination];
    setStage("form");
    setErrors({});
    setBooking((old) => ({
      ...old,
      pickup: route.origin,
      pickupCity: route.origin,
      pickupLat: pickupCoordinates?.[0],
      pickupLng: pickupCoordinates?.[1],
      dropoff: route.destination,
      dropoffCity: route.destination,
      dropoffLat: dropoffCoordinates?.[0],
      dropoffLng: dropoffCoordinates?.[1],
    }));
    trackEvent("route_view", { route_slug: route.slug, origin: route.origin, destination: route.destination, placement: "home_quick_finder" });
    requestAnimationFrame(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (!section) return;
    const target = section.querySelector<HTMLElement>(".section-heading, .booking-head, h2") || section;
    const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight || 0;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight - 18);
    window.scrollTo({ top, behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };
  const selectProvinceShortcut = (province: string) => {
    setRouteQuery(province);
    setSelectedProvince(province);
    trackEvent("route_filter", { province, placement: "home_province_shortcuts" });
    requestAnimationFrame(() => {
      const section = document.getElementById("tuyen-xe");
      if (!section) return;
      const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight || 0;
      const top = Math.max(0, section.getBoundingClientRect().top + window.scrollY - headerHeight - 14);
      window.scrollTo({ top, behavior: "smooth" });
      window.history.replaceState(null, "", "#tuyen-xe");
    });
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Trang chủ Xe Ghép Phong Cách"><span className="brand-mark">PC</span><span><strong>Xe Ghép Phong Cách</strong><small>Xe ghép & bao xe liên tỉnh</small></span></a>
        <nav className="desktop-nav" aria-label="Điều hướng chính"><a href="#tuyen-xe" onClick={(event) => scrollToSection(event, "tuyen-xe")}>Tìm chuyến</a><a href="#dich-vu" onClick={(event) => scrollToSection(event, "dich-vu")}>Dịch vụ</a><Link href="/blog">Blog</Link><a href="#dat-xe" onClick={(event) => scrollToSection(event, "dat-xe")}>Đặt xe nhanh</a><a href="#lien-he" onClick={(event) => scrollToSection(event, "lien-he")}>Liên hệ</a></nav>
        <a className="header-phone" href={siteConfig.phoneHref} onClick={() => trackEvent("click_call", { placement: "home_header" })}>
          <span className="phone-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </span>
          <span><small>Tư vấn chuyến đi</small><strong>{siteConfig.phoneDisplay}</strong></span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1><span className="hero-line hero-line-dark">Xe Ghép Liên Tỉnh</span><span className="hero-line">Đón tận nhà,</span><span className="hero-line">trả khách tận nơi!</span></h1>
            <p>Xe đúng tuyến, không lòng vòng, phục vụ nhanh chóng, văn minh.</p>
            <div className="hero-actions">
              <a className="btn btn-primary call-now-button" href={siteConfig.phoneHref} onClick={(event) => { trackEvent("click_call", { placement: "home_hero" }); if (!window.confirm(`Gọi ngay Nhà Xe Phong Cách?\n${siteConfig.phoneDisplay}`)) event.preventDefault(); }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" className="btn-icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Gọi ngay {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
          <HeroCarousel />
        </div>
      </section>

      <nav className="province-shortcuts-shell" aria-label="Chọn nhanh tỉnh thành có tuyến xe">
        <div className="province-shortcuts">
          <span className="province-shortcuts-label"><small>ĐI ĐÂU?</small><strong>Chọn nhanh tỉnh</strong></span>
          <div className="province-shortcut-track">
            {routeProvinces.map((province) => <button type="button" className={`${featuredProvinces.has(province) ? "featured" : ""}${selectedProvince === province ? " active" : ""}`} aria-pressed={selectedProvince === province} key={province} onClick={() => selectProvinceShortcut(province)}>{province}</button>)}
          </div>
        </div>
      </nav>

      <QuickRouteFinder routes={routes} onSelect={chooseQuickRoute} query={routeQuery} selectedProvince={selectedProvince} onQueryChange={setRouteQuery} onProvinceChange={setSelectedProvince} />

      <section className="section services" id="dich-vu">
        <div className="section-heading centered services-heading"><div><span className="section-kicker">DI CHUYỂN AN TÂM</span><h2>Xe Ghép Phong Cách Liên Tỉnh</h2><p><span>Chuyên tuyến Hải Dương - Hải Phòng - Quảng Ninh</span><span>Dịch vụ chuyên nghiệp, giá cả hợp lý</span></p></div></div>
        <div className="service-showcase">
          <div className="service-showcase-photo campaign-photo"><Image src="/images/luon-co-xe-hop-chuyen.jpg" alt="Hình minh họa dịch vụ xe ghép liên tỉnh Phong Cách" fill sizes="(max-width: 700px) 100vw, 54vw" /></div>
          <div className="service-showcase-copy"><span>XE GHÉP LIÊN TỈNH MIỀN BẮC</span><h3>Dịch vụ xe ghép Hải Dương, Hải Phòng, Quảng Ninh tiếp nhận yêu cầu đưa đón 2 chiều tận nơi.</h3><div className="care-points"><b>✓ Kiểm tra xe theo yêu cầu</b><b>✓ Xác nhận giờ đón trước chuyến</b><b>✓ Thống nhất điểm đón và trả</b></div></div>
        </div>
        <div className="service-grid"><Service image="/images/dich-vu-xe-4-cho.png" position="center 58%" label="01" title="Xe 4 chỗ" text="Gọn gàng, linh hoạt cho 1–3 khách và hành lý vừa phải." /><Service image="/images/dich-vu-xe-7-cho.png" position="center 58%" label="02" title="Xe 7 chỗ" text="Thoải mái hơn cho gia đình hoặc nhóm từ 4–6 khách." /><Service image="/images/don-tan-noi.jpg" position="55% center" label="03" title="Bao xe riêng" text="Chủ động giờ đón, không gian riêng và lịch trình theo nhu cầu." /><Service image="/images/gui-hang-theo-chuyen.png" position="center 54%" label="04" title="Gửi hàng theo chuyến" text="Nhận gửi hàng gọn nhẹ trên các tuyến liên tỉnh đang hoạt động." /></div>
      </section>

      <section className="assurance section" id="cam-ket"><div className="section-heading assurance-heading"><div><span className="section-kicker">03 NGUYÊN TẮC</span><h2>Xe Ghép Phong Cách</h2></div></div><div className="assurance-grid"><Assurance n="01" title="Kiểm tra chuyến theo yêu cầu" text="Tiếp nhận điểm đón, điểm trả và khung giờ để kiểm tra xe phù hợp" /><Assurance n="02" title="Xác nhận trước khi đi" text="Trao đổi lại xe, giờ đón và hành trình trước chuyến" /><Assurance n="03" title="Chi phí rõ ràng" text="Mức cuối được xác nhận trước chuyến, hoàn thành chuyến mới thanh toán" /></div></section>

      <section className="booking-shell booking-shell-bottom" id="dat-xe">
        <div className="booking-card" ref={formRef}>
          {stage === "success" ? (
            <div className="success-state" role="status"><div className="success-icon">✓</div><span className="success-kicker">Mã yêu cầu {bookingId}</span><h2>Yêu cầu đã được gửi</h2><p className="success-lead">Bên mình sẽ gọi lại để xác nhận xe, giờ đón và mức giá cuối.</p><div className="success-route"><strong>{booking.pickup}</strong><span>→</span><strong>{booking.dropoff}</strong></div><div className="summary-grid"><span><small>Ngày đi</small><b>{new Date(booking.date + "T00:00:00").toLocaleDateString("vi-VN")}</b></span><span><small>Giờ đón</small><b>{booking.time}</b></span><span><small>Nhu cầu</small><b>{booking.need === "parcel" ? "Gửi hàng" : `${booking.passengers} khách`}</b></span><span><small>Tham khảo</small><b>{formatPrice(price)}</b></span></div><div className="payment-confirmation"><b>Đặt trước miễn phí, đến nơi mới thanh toán</b></div><div className="success-actions"><a className="btn btn-primary" href={process.env.NEXT_PUBLIC_ZALO_URL || siteConfig.zaloFallbackUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("click_zalo", { placement: "booking_success" })}>Nhắn Zalo</a><a className="btn btn-ghost" href={siteConfig.phoneHref} onClick={() => trackEvent("click_call", { placement: "booking_success" })}>Gọi tư vấn viên</a></div><button className="text-button" onClick={() => setStage("form")}>Gửi thêm yêu cầu khác</button></div>
          ) : (
            <form className="compact-booking" onSubmit={submit} noValidate>
              <div className="booking-head"><div><span className="step-label">Đặt xe nhanh</span><h2>Đón tận nơi, đưa về tận cửa</h2></div></div>
              <div className="plain-address-stack">
                <label className="plain-address-field"><span>Đón tại</span><input value={booking.pickup} onChange={(event) => { const value = event.target.value; setBooking((old) => ({ ...old, pickup: value, pickupCity: inferCity(value), pickupLat: undefined, pickupLng: undefined })); }} placeholder="Ví dụ: 30 Nguyễn Khuyến, Hà Nội" /><small>{errors.pickup}</small></label>
                <button type="button" className="plain-address-swap" onClick={() => setBooking((old) => ({ ...old, pickup: old.dropoff, pickupCity: old.dropoffCity, pickupLat: old.dropoffLat, pickupLng: old.dropoffLng, dropoff: old.pickup, dropoffCity: old.pickupCity, dropoffLat: old.pickupLat, dropoffLng: old.pickupLng }))} aria-label="Đổi điểm đón và điểm đến">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" className="swap-icon">
                    <polyline points="17 1 21 5 17 9"/>
                    <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                    <polyline points="7 23 3 19 7 15"/>
                    <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                  </svg>
                </button>
                <label className="plain-address-field"><span>Trả tại</span><input value={booking.dropoff} onChange={(event) => { const value = event.target.value; setBooking((old) => ({ ...old, dropoff: value, dropoffCity: inferCity(value), dropoffLat: undefined, dropoffLng: undefined })); }} placeholder="Ví dụ: 40 Hồ Sen, Hải Phòng" /><small>{errors.dropoff}</small></label>
              </div>
              <div className="booking-primary-grid">
                <div className="compact-control passenger-primary"><span>Số khách</span><div className="mini-stepper"><button type="button" onClick={() => update("passengers", Math.max(1, booking.passengers - 1))}>−</button><b>{booking.passengers}</b><button type="button" onClick={() => update("passengers", Math.min(6, booking.passengers + 1))}>+</button></div></div>
                <label className="primary-booking-field"><span>Ngày đi</span><input type="date" min={getTomorrow()} value={booking.date} onChange={(event) => update("date", event.target.value)} /><small>{errors.date}</small></label>
                <label className="primary-booking-field"><span>Giờ đón</span><input type="time" value={booking.time} onChange={(event) => update("time", event.target.value)} /><small>{errors.time}</small></label>
                <label className="primary-booking-field"><span>Số điện thoại</span><input inputMode="tel" value={booking.phone} onChange={(event) => update("phone", event.target.value)} placeholder={siteConfig.phoneDisplay} /><small>{errors.phone}</small></label>
                <label className="primary-booking-field customer-name-field"><span>Họ tên</span><input value={booking.name} onChange={(event) => update("name", event.target.value)} placeholder="Tên người đi" /><small>{errors.name}</small></label>
              </div>
              <button type="button" className="advanced-toggle" aria-expanded={showAdvanced} onClick={() => setShowAdvanced((shown) => !shown)}><span><b>{showAdvanced ? "Thu gọn lựa chọn" : "Mở rộng lựa chọn"}</b><small>Nhu cầu, hình thức, loại xe và hàng hóa</small></span><i>{showAdvanced ? "−" : "+"}</i></button>
              {showAdvanced && <div className="advanced-booking-panel">
                <div className="compact-config">
                  <CompactOptions label="Nhu cầu" value={booking.need} options={[{ value: "ride", label: "Đi xe" }, { value: "parcel", label: "Gửi hàng" }]} onChange={(value) => update("need", value as BookingState["need"])} />
                  {booking.need === "ride" && <CompactOptions label="Hình thức" value={booking.service} options={[{ value: "shared", label: "Xe ghép" }, { value: "private", label: "Bao xe" }]} onChange={(value) => update("service", value as ServiceType)} />}
                  {booking.need === "ride" && <CompactOptions label="Loại xe" value={booking.vehicle} options={[{ value: "4-seat", label: "4 chỗ" }, { value: "7-seat", label: "7 chỗ" }]} onChange={(value) => update("vehicle", value as VehicleType)} />}
                </div>
                {booking.need === "parcel" && <div className="cargo-details"><label className="cargo-name"><span>Tên hàng hóa</span><input value={booking.cargoName} onChange={(event) => update("cargoName", event.target.value)} placeholder="Ví dụ: Thùng quần áo, hồ sơ…" /><small>{errors.cargoName}</small></label><div className="cargo-measures"><Measure label="Dài" unit="cm" value={booking.cargoLength} onChange={(value) => update("cargoLength", value)} /><Measure label="Rộng" unit="cm" value={booking.cargoWidth} onChange={(value) => update("cargoWidth", value)} /><Measure label="Cao" unit="cm" value={booking.cargoHeight} onChange={(value) => update("cargoHeight", value)} /><Measure label="Nặng" unit="kg" value={booking.cargoWeight} onChange={(value) => update("cargoWeight", value)} /></div>{errors.cargoSize && <small className="cargo-error">{errors.cargoSize}</small>}<p>Giá tính theo quãng đường và trọng lượng quy đổi Dài × Rộng × Cao / 6.000.</p></div>}
              </div>}
              <div className="compact-checkout"><button className="submit-button" disabled={saving}>{saving ? "Đang gửi…" : "Gửi yêu cầu"}<span>→</span></button></div>
              <div className="compact-payment-note">✓ Đặt trước miễn phí, đến nơi mới thanh toán</div>
            </form>
          )}
        </div>
      </section>

      <section className="final-cta" id="lien-he"><div><span>LIÊN HỆ NGAY</span><h2>Tư vấn thêm về chuyến xe sắp tới của bạn</h2></div><div><a className="btn btn-white" href={siteConfig.phoneHref} onClick={() => trackEvent("click_call", { placement: "home_final_cta" })}>Gọi {siteConfig.phoneDisplay}</a></div></section>

      <footer><div className="footer-brand"><span className="brand-mark">PC</span><div><strong>XE GHÉP PHONG CÁCH</strong><p>Kết nối chuyến đi tỉnh từ Hải Dương.</p></div></div><div><strong>Liên hệ</strong><a href={siteConfig.phoneHref} onClick={() => trackEvent("click_call", { placement: "home_footer" })}>{siteConfig.phoneDisplay}</a><a href={process.env.NEXT_PUBLIC_ZALO_URL || siteConfig.zaloFallbackUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("click_zalo", { placement: "home_footer" })}>Zalo Phong Cách</a><Link href="/lien-he">Thông tin liên hệ</Link></div><div><strong>Khám phá</strong><Link href="/blog">Blog tuyến xe</Link><Link href="/tuyen-xe">Tất cả tuyến xe</Link><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/chinh-sach-dat-xe">Chính sách đặt xe</Link><Link href="/an-toan-va-doi-xe">An toàn & đội xe</Link></div><p className="copyright">© 2026 Xe Ghép Phong Cách. Mức giá trên website là tham khảo và được xác nhận trước chuyến. Hình ảnh là hình minh họa được tạo bằng AI.</p></footer>

      <aside className="floating-contacts" aria-label="Liên hệ nhanh">
        <a className="floating-contact floating-phone" href={siteConfig.phoneHref} onClick={() => trackEvent("click_call", { placement: "floating_contact" })} aria-label={`Gọi ngay ${siteConfig.phoneDisplay}`} title={`Gọi ${siteConfig.phoneDisplay}`}>
          <span aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </span>
        </a>
        <a className="floating-contact floating-zalo" href={process.env.NEXT_PUBLIC_ZALO_URL || siteConfig.zaloFallbackUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("click_zalo", { placement: "floating_contact" })} aria-label={`Nhắn Zalo ${siteConfig.phoneDisplay}`} title={`Nhắn Zalo ${siteConfig.phoneDisplay}`}>
          <span aria-hidden="true">Zalo</span>
        </a>
      </aside>

      <nav className="bottom-nav" aria-label="Điều hướng trên điện thoại">
        <a href="#tuyen-xe" onClick={(event) => scrollToSection(event, "tuyen-xe")}>
          <span className="bottom-nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
          </span>
          <span className="bottom-nav-text">Tìm chuyến</span>
        </a>
        <a href="#dich-vu" onClick={(event) => scrollToSection(event, "dich-vu")}>
          <span className="bottom-nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="1" y="3" width="15" height="13" rx="2" ry="2"/><line x1="16" y1="8" x2="20" y2="8"/><line x1="16" y1="13" x2="23" y2="13"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </span>
          <span className="bottom-nav-text">Dịch vụ</span>
        </a>
        <Link href="/blog">
          <span className="bottom-nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </span>
          <span className="bottom-nav-text">Blog</span>
        </Link>
        <a className="bottom-nav-booking" href="#dat-xe" onClick={(event) => scrollToSection(event, "dat-xe")}>
          <span className="bottom-nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </span>
          <span className="bottom-nav-text">Đặt nhanh</span>
        </a>
        <a href="#lien-he" onClick={(event) => scrollToSection(event, "lien-he")}>
          <span className="bottom-nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </span>
          <span className="bottom-nav-text">Liên hệ</span>
        </a>
      </nav>
    </main>
  );
}

function CompactOptions({ label, value, options, onChange }: { label: string; value: string; options: Array<{ value: string; label: string }>; onChange: (value: string) => void }) { return <div className="compact-control"><span>{label}</span><div>{options.map((option) => <button type="button" className={value === option.value ? "active" : ""} key={option.value} onClick={() => onChange(option.value)}>{option.label}</button>)}</div></div>; }
function QuickRouteFinder({ routes, onSelect, query, selectedProvince, onQueryChange, onProvinceChange }: { routes: RoutePrice[]; onSelect: (route: RoutePrice) => void; query: string; selectedProvince: string; onQueryChange: (query: string) => void; onProvinceChange: (province: string) => void }) {
  const resultsRef = useRef<HTMLDivElement>(null);
  const normalizedQuery = normalizeRouteText(query.trim());
  const provinces = useMemo(() => Array.from(new Set(routes.flatMap((route) => [provinceOf(route.origin), provinceOf(route.destination)]))), [routes]);
  const shownRoutes = useMemo(() => selectedProvince
    ? routes.filter((route) => provinceOf(route.origin) === selectedProvince || provinceOf(route.destination) === selectedProvince)
    : normalizedQuery ? routes.filter((route) => normalizeRouteText(`${route.origin} ${route.destination}`).includes(normalizedQuery)) : routes, [normalizedQuery, routes, selectedProvince]);
  const orderedRoutes = useMemo(() => [...shownRoutes].sort((routeA, routeB) => {
    const rankA = spotlightRouteRank.get(routeA.id) ?? Number.MAX_SAFE_INTEGER;
    const rankB = spotlightRouteRank.get(routeB.id) ?? Number.MAX_SAFE_INTEGER;
    return rankA - rankB;
  }), [shownRoutes]);
  const selectProvince = (province: string) => {
    onQueryChange(province);
    onProvinceChange(province);
    requestAnimationFrame(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }));
  };
  const renderRoute = (route: RoutePrice) => {
    const isPriority = spotlightRouteIds.has(route.id);
    return <article className={`quick-route-tile${isPriority ? " priority" : ""}`} key={route.id}>
      <button type="button" onClick={() => onSelect(route)} aria-label={`Chọn đặt tuyến ${route.origin} đi ${route.destination}, ${route.sharedPrice ? `từ ${Math.round(route.sharedPrice / 1000)} nghìn đồng` : "liên hệ báo giá"}`}>
        <span className="route-tile-pair">
          <b>{route.origin}</b>
          <i className="route-arrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 4px' }}>
              <path d="M7 16V4M7 4L3 8M7 4L11 8M17 8v12M17 20l-4-4M17 20l4-4"/>
            </svg>
          </i>
          <b>{route.destination}</b>
        </span>
        <strong className="route-tile-price">{route.sharedPrice ? `Từ ${Math.round(route.sharedPrice / 1000)}k` : "Liên hệ giá"}</strong>
      </button>
      <Link href={`/${route.slug}`}>Xem chi tiết tuyến →</Link>
    </article>;
  };

  return <section className="section route-finder-section" id="tuyen-xe">
    <div className="section-heading route-finder-heading"><div><span className="section-kicker">TÌM CHUYẾN</span><h2>Tìm tuyến xe phù hợp</h2></div></div>
    <div className="route-search-panel">
      <div className="route-search-box">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" className="search-icon">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </span>
        <label><small>Bạn muốn đi đâu?</small><input value={query} onChange={(event) => { onQueryChange(event.target.value); onProvinceChange(""); }} placeholder="Nhập Hải Phòng, Nội Bài, Bắc Ninh…" aria-label="Tìm tuyến theo nơi đi hoặc nơi đến" /></label>
        {query && <button type="button" onClick={() => { onQueryChange(""); onProvinceChange(""); }} aria-label="Xoá nội dung tìm kiếm">×</button>}
      </div>
      <div className="route-suggestions"><span>Tìm nhanh:</span>{provinces.map((province) => <button type="button" className={selectedProvince === province ? "active" : ""} key={province} onClick={() => selectProvince(province)}>{province}</button>)}</div>
    </div>
    <div className="route-results" ref={resultsRef}>
      {normalizedQuery && <div className="route-result-summary" aria-live="polite"><strong>{shownRoutes.length ? `${shownRoutes.length} chuyến phù hợp` : "Chưa tìm thấy chuyến"}</strong>{selectedProvince && shownRoutes.length > 0 && <span>Liên quan đến {selectedProvince}</span>}</div>}
      {!shownRoutes.length ? (
        <div className="route-finder-empty">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" className="empty-search-icon">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
          <h3>Chưa thấy tuyến bạn đang tìm</h3>
          <p>Gọi <a href={siteConfig.phoneHref} onClick={() => trackEvent("click_call", { placement: "route_finder_empty" })}>{siteConfig.phoneDisplay}</a>, bên mình sẽ kiểm tra chuyến giúp bạn.</p>
          <button type="button" onClick={() => { onQueryChange(""); onProvinceChange(""); }}>Xem lại toàn bộ tuyến</button>
        </div>
      ) : (
        <div className="route-corridor-block">
          <div className="quick-route-grid">{orderedRoutes.map(renderRoute)}</div>
          {!normalizedQuery && <div className="route-cargo-note"><span aria-hidden="true">◇</span><div><strong>Nhận gửi hàng hoá 2 chiều</strong><small>Nhanh chóng · Bảo mật</small></div><b>Chỉ từ 150k</b></div>}
        </div>
      )}
    </div>
  </section>;
}
function Measure({ label, unit, value, onChange }: { label: string; unit: string; value: number; onChange: (value: number) => void }) { return <label><span>{label}</span><div><input type="number" inputMode="decimal" min="0.1" step="0.1" value={value} onChange={(event) => onChange(Number(event.target.value))} /><small>{unit}</small></div></label>; }
function Service({ image, position, label, title, text }: { image: string; position: string; label: string; title: string; text: string }) { return <article className="service-card"><div className="service-card-image"><Image src={image} alt={`Hình minh họa ${title.toLowerCase()} của Xe Ghép Phong Cách`} fill sizes="(max-width: 700px) 50vw, 25vw" style={{ objectPosition: position }} /></div><div className="service-card-body"><span>{label}</span><h3>{title}</h3><p>{text}</p><a href="#dat-xe">Gửi yêu cầu →</a></div></article>; }
function Assurance({ n, title, text }: { n: string; title: string; text: string }) { return <article><span>{n}</span><h3>{title}</h3><p>{text}</p></article>; }
