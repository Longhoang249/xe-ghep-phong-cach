# Canonical Business Contact Source of Truth

**Project**: Xe Ghép Phong Cách  
**Document**: `seo/contact-source.md`  
**Created**: 2026-09-09  
**Status**: VERIFIED & LOCKED  

---

## 1. Canonical Phone Definition

| Property | Canonical Value | Usage |
|---|---|---|
| **Display Phone** | `0987 663 883` | UI text, header, footer, CTAs, buttons, guide posts |
| **Phone Href** | `tel:+84987663883` | All `<a>` tags with `href="tel:..."` |
| **Schema Phone** | `+84987663883` | JSON-LD `LocalBusiness`, `Service`, `Organization` |
| **National Phone** | `0987663883` | SMS links, national format |
| **Zalo Official URL** | `https://zalo.me/0987663883` | Zalo consultation and booking chat |

---

## 2. Source of Truth & Provenance

1. **Configuration Anchor**: `lib/site.ts` (`siteConfig.phone`, `siteConfig.phoneDisplay`, `siteConfig.phoneHref`, `siteConfig.zaloFallbackUrl`).
2. **Owner Verification**: Documented in `BRIEF-TU-VAN-SEO-GEO.md` ("Hotline chính đang dùng cho SEO: 0987 663 883") and `GOOGLE_BUSINESS_PROFILE_SETUP.md`.
3. **Automated Verification**: `scripts/seo-check.mjs` strictly enforces:
   ```javascript
   check(html.includes("0987 663 883"), `${page.path} hiển thị hotline chuẩn`);
   ```
4. **Investigation of `0888 024 025`**:
   - Audit across all files in git: **0 occurrences found** in any code, markdown, JSON, or template.
   - Root Cause: A typographical error occurred exclusively in the conversational markdown response of an earlier assistant turn (step 1931), not in the repository.
   - Status: Confirmed that `0888 024 025` does NOT exist in source code and `0987 663 883` remains the sole, 100% consistent canonical hotline across the entire website.
