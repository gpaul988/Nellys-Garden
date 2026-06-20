# Nellys-Garden Design System

## Vision
A futuristic Nigerian horticulturist platform celebrating tropical gardening, indigenous plants, and agricultural heritage through bold, modern design.

---

## Color Palette

**Primary Colors:**
- **Deep Space:** `#0a0e27` — Main background
- **Emerald Green:** `#1a8d5e` — Primary accent, plant themes
- **Gold:** `#d4a574` — Secondary accent, highlights, luxury feel
- **Neon Cyan:** `#00d9ff` — Interactive, hover states, tech accent

**Semantic:**
- **Success:** `#00ff88` (bright green)
- **Warning:** `#ffa500` (orange)
- **Error:** `#ff4444` (red)
- **Text Primary:** `#f5f5f5` (off-white)
- **Text Secondary:** `#b0b0b0` (muted gray)
- **Border:** `#2a2f48` (dark slate)

---

## Typography

**Display Font:** `Poppins` (700, 600, 500)
- Hero titles, section headers, CTAs
- Size: 48px (h1), 32px (h2), 24px (h3)
- Letter spacing: -0.02em (tight, bold aesthetic)

**Body Font:** `Poppins` (400, 500)
- All body text, descriptions, content
- Size: 16px (base), 14px (small)
- Line height: 1.6 (generous for readability)

---

## Layout & Spacing

**Grid System:**
- Max-width: 1280px
- Padding: 24px (mobile), 48px (desktop)
- Column gap: 32px

**Vertical Rhythm:**
- Section spacing: 80px (large sections)
- Component spacing: 32px (cards, groups)
- Element spacing: 16px (internal padding)

---

## Components

### Cards
- Background: `rgba(255, 255, 255, 0.05)` (glass-morphism)
- Border: `1px solid rgba(212, 165, 116, 0.2)` (subtle gold)
- Border-radius: `8px`
- Backdrop-filter: `blur(10px)`
- Hover: Scale 1.02, border color shifts to `rgba(0, 217, 255, 0.4)`

### Buttons
- **Primary:** Emerald (`#1a8d5e`) background, white text, no border
- **Secondary:** Transparent with gold border, gold text
- **Hover:** Brightness +10%, Cyan glow on shadow
- Border-radius: `6px`
- Padding: `12px 24px`

### Hero Section
- Background: Dark gradient + botanical pattern overlay
- Headline: Bold, 48px, white text
- Subheading: 18px, muted gold
- CTA button: Primary style

### Navigation
- Sticky top, semi-transparent backdrop blur
- Logo on left, nav links on right
- Links: White, hover → gold
- Mobile: Hamburger menu, full-screen overlay

---

## Visual Effects

**Gradients:**
- Background: Linear from deep space to slightly lighter space
- Accents: Emerald to cyan for interactive elements

**Animations:**
- Page load: Staggered fade-in for sections (200ms each)
- Button hover: Smooth scale + color transition (200ms)
- Card hover: Lift effect + border glow
- Scroll: Subtle parallax on hero image

**Shadows:**
- Cards: `0 8px 24px rgba(0, 0, 0, 0.3)`
- Hover: `0 16px 48px rgba(0, 217, 255, 0.15)`

---

## Pages & Structure

1. **Homepage** — Hero, featured plants, quick tips, CTA
2. **Plants Guide** — Grid of Nigerian plants with descriptions
3. **Growing Tips** — Climate, soil, watering, pest management
4. **Community** — Photo gallery placeholder
5. **Resources** — Planting calendar, soil guide
6. **Contact** — Simple contact form

---

## Mobile Breakpoints

- **Mobile:** < 768px (stack, full-width)
- **Tablet:** 768px–1024px (2-column, adjusted spacing)
- **Desktop:** ≥ 1024px (full grid, max-width container)

---

## Accessibility

- WCAG AA compliant
- Sufficient color contrast (text: 4.5:1 on backgrounds)
- Focus states: Gold outline on keyboard nav
- Alt text on all images
- Semantic HTML (nav, main, section, footer)
