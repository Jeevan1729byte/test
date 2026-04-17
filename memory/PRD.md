# SheStylish — Luxury Abaya Landing Page

## Original Problem Statement
Build a luxury abaya landing page for @shestylish_designer (Oman-based, serving the GCC).  
Dark noir + gold palette, Cormorant Garamond serif, full-screen animated loader, sticky nav
with Instagram link, split-screen hero with WhatsApp CTA, scrolling gold marquee of GCC
countries, 4-card collection grid, 4-step booking process, GCC customer testimonials,
WhatsApp booking section with country flags, Instagram 9-grid preview, footer, floating
WhatsApp button. All bookings open WhatsApp with a pre-filled message. Mobile + desktop
responsive.

- WhatsApp number: `96891234567`
- Pre-filled message: `Hello She Stylish 🌟 I would like to book an abaya please`
- Instagram: https://www.instagram.com/shestylish_designer

## User Personas
- **Primary**: GCC-based women (Oman, UAE, Saudi, Kuwait, Qatar, Bahrain) seeking
  made-to-order luxury abayas. High disposable income, Instagram-first discovery,
  private / WhatsApp-based purchase flow.
- **Secondary**: Expats in the GCC, gifting.

## Architecture
- **Stack**: React (CRA) + Tailwind, framer-motion, react-fast-marquee, react-icons, lucide-react.
- **Backend**: Not used for this MVP — pure static marketing site. All CTAs deep-link to
  WhatsApp (`wa.me/96891234567`).
- **Fonts**: Cormorant Garamond (display) + Outfit (body), loaded via Google Fonts.
- **Aesthetic**: Dark noir (#0A0908) + warm gold (#D4AF37). No gradients on white,
  editorial asymmetric layout, corner frame accents, grain texture on loader.

## File Map
```
/app/frontend/src/
├── App.js                         # Composes the full page
├── index.css                      # Global styles, fonts, custom utilities
├── lib/brand.js                   # WhatsApp/Instagram constants & buildWaLink()
└── components/
    ├── AbayaSilhouette.jsx        # Inline SVG silhouettes (5 variants)
    ├── Loader.jsx                 # Full-screen animated brand loader
    ├── Navigation.jsx             # Sticky glass nav + Instagram link
    ├── Hero.jsx                   # Split-screen hero
    ├── GoldMarquee.jsx            # Scrolling GCC countries
    ├── Collections.jsx            # 4-card bento grid
    ├── HowItWorks.jsx             # 4-step process
    ├── Testimonials.jsx           # GCC reviews
    ├── WhatsAppBooking.jsx        # Booking section with GCC flags
    ├── InstagramGrid.jsx          # 9-tile IG preview
    ├── Footer.jsx                 # Footer + massive brand name
    └── FloatingWhatsApp.jsx       # Bottom-right pulsing gold button
```

## What's been implemented (Dec 2025)
- Full landing page with all 10 required sections.
- Animated brand loader (framer-motion, 2.6s duration) with gold-shimmer text reveal.
- Sticky glassmorphism navigation with scroll-aware blur, Instagram link, mobile drawer.
- Split-screen hero with editorial typography + SVG abaya silhouette in framed container.
- Scrolling gold marquee with 6 GCC countries (react-fast-marquee, fade-mask edges).
- 4-card asymmetric bento collections grid (7/5 → 5/7 split) with hover reveal CTA.
- 4-step "How It Works" flow with large ghost numerals and connector lines.
- GCC testimonials (4 quotes from Muscat, Dubai, Kuwait, Manama).
- WhatsApp booking section with 6 GCC country flag cards.
- Instagram 9-grid preview built from abaya SVG tiles.
- Footer with atelier blurb, links, contact and massive SheStylish italic treatment.
- Pulsing floating WhatsApp button bottom-right.
- All CTAs wired to `wa.me/96891234567` with the agreed pre-filled message.
- Fully responsive (mobile / tablet / desktop).

## Prioritized Backlog
**P0 (ready to go live — client decisions)**
- [ ] Replace SVG silhouettes with real product photography when available.
- [ ] Confirm final collection names & OMR prices (current: placeholders).

**P1 (nice-to-have)**
- [ ] Embed real Instagram feed via IG Basic Display API or 3rd party widget.
- [ ] Arabic language toggle (EN ↔ AR RTL).
- [ ] Product detail modals with swatches and made-to-measure sizing guide.

**P2**
- [ ] Lead capture form backed by MongoDB (currently everything goes through WhatsApp).
- [ ] Email drip / waitlist for seasonal drops.
- [ ] Blog / editorial journal.
