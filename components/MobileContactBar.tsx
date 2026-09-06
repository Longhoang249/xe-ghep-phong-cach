"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

export default function MobileContactBar() {
  const pathname = usePathname();

  // Hide on admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const zaloUrl = process.env.NEXT_PUBLIC_ZALO_URL || siteConfig.zaloFallbackUrl;

  return (
    <aside className="mobile-contact-bar" aria-label="Liên hệ nhanh">
      <div className="mobile-contact-bar-inner">
        <a
          href={siteConfig.phoneHref}
          className="mobile-bar-btn mobile-bar-call"
          onClick={() => trackEvent("click_call", { placement: "mobile_sticky_bar", path: pathname })}
        >
          <span className="mobile-bar-icon pulse" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </span>
          <span className="mobile-bar-copy">
            <small>GỌI ĐẶT XE</small>
            <strong>{siteConfig.phoneDisplay}</strong>
          </span>
        </a>

        <a
          href={zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-btn mobile-bar-zalo"
          onClick={() => trackEvent("click_zalo", { placement: "mobile_sticky_bar", path: pathname })}
        >
          <span className="mobile-bar-icon zalo-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.03 2 11c0 2.87 1.5 5.43 3.86 7.02-.17.92-.62 2.5-1.35 3.56-.12.18-.04.42.16.48.24.08 1.94.3 4.08-.85 1.02.26 2.11.39 3.25.39 5.52 0 10-4.03 10-9s-4.48-9-10-9zm-1.5 12.5h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.29l-2.71-3.61c-.05-.07-.08-.15-.08-.24 0-.36.29-.65.65-.65h3c.28 0 .5.22.5.5s-.22.5-.5.5H8.36l2.71 3.61c.05.07.08.15.08.24 0 .36-.29.65-.65.65zm3.5 0c-.83 0-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5zm0-1c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3c0 .28.22.5.5.5z" />
            </svg>
          </span>
          <span className="mobile-bar-copy">
            <small>CHAT TƯ VẤN</small>
            <strong>Nhắn Zalo</strong>
          </span>
        </a>
      </div>
    </aside>
  );
}
