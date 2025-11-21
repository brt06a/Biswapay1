# Biswa Tech Solutions - Payment Page Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing from premium payment platforms like Stripe, Razorpay, and PayPal, combined with mobile-first design principles for Telegram in-app browser optimization. Each tier will have distinct visual identity while maintaining cohesive branding.

## Typography System
**Font Stack**: Google Fonts via CDN
- **Primary Font**: Inter (clean, modern, excellent readability)
- **Display Font**: Poppins (for pricing and headings)

**Hierarchy**:
- Plan Name: Poppins Bold, text-3xl (mobile) / text-4xl (desktop)
- Price: Poppins Bold, text-5xl (mobile) / text-6xl (desktop)
- Feature List: Inter Regular, text-base
- Buttons: Inter Semibold, text-lg
- Footer/Fine Print: Inter Regular, text-sm

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16 (p-4, m-6, gap-8, etc.)

**Container Structure**:
- Mobile-first: w-full with px-4
- Max-width: max-w-md (centered for payment focus)
- Vertical rhythm: py-8 between major sections, py-4 for component spacing

## Page Structure (Per Tier)

### Header Section
- Biswa Tech Solutions logo (svg/png, h-12)
- Tier indicator badge
- Navigation breadcrumb showing all 4 plans (with current highlighted)

### Hero/Pricing Card
- Centered card design with tier-specific gradient background
- Plan name with tier badge (Basic/Standard/Pro/Premium)
- Large, prominent price display with ₹ symbol
- "per month" or billing period subtitle
- Feature list (4-6 key features with checkmark icons from Heroicons)
- Spacing: p-8 for card, gap-4 for feature items

### Payment Methods Section
Two equal-width options with clear visual separation:

**UPI QR Code Column**:
- Generated QR code display (200x200px minimum for scanability)
- "Scan to Pay" heading
- UPI ID displayed: bishwa6@ptyes
- Amount pre-filled indicator
- Subtle border with tier accent

**UPI Button Column**:
- Large, prominent CTA button
- "Pay ₹[amount] via UPI" text
- Heroicons arrow-right icon
- Secondary instruction text: "Opens payment app"

### Trust Elements
- Security badge row: "Secure Payment" + "Instant Activation" + "24/7 Support"
- Icons from Heroicons (shield-check, lightning-bolt, chat)
- Horizontal flex layout with gap-6

### Footer
- Terms & Privacy links
- "Powered by Biswa Tech Solutions" branding
- Support contact link

## Tier Differentiation Strategy

### ₹49 Plan (Entry/Basic)
- Visual Weight: Lighter, approachable
- Badge: "BASIC" or "STARTER"
- Gradient: Subtle, single-direction
- Features: 3-4 essential items

### ₹99 Plan (Standard)
- Visual Weight: Balanced, professional
- Badge: "STANDARD" or "POPULAR" (with small star icon)
- Gradient: Moderate depth, bi-directional
- Features: 5-6 items with mix of basic + advanced

### ₹199 Plan (Pro)
- Visual Weight: Rich, feature-focused
- Badge: "PRO" with distinctive icon
- Gradient: Vibrant, multi-directional
- Features: 6-8 items highlighting advanced capabilities
- Add subtle glow/shadow effect to card

### ₹399 Plan (Premium)
- Visual Weight: Maximum impact, luxury feel
- Badge: "PREMIUM" or "ENTERPRISE" with crown/star icon
- Gradient: Bold, dynamic multi-directional
- Features: 8-10 comprehensive items
- Enhanced card elevation with stronger shadow
- Optional: Subtle animated gradient background (very subtle if used)

## Component Library

### Buttons
- Primary: Large rounded-xl, py-4 px-8, w-full on mobile
- Hover state: Slight scale (transform: scale(1.02))
- Icons: Right-aligned arrow or payment icon

### Cards
- Border radius: rounded-2xl
- Padding: p-6 (mobile), p-8 (desktop)
- Shadow: Tier-based elevation (shadow-lg to shadow-2xl)

### Icons
- Library: Heroicons (outline for features, solid for badges)
- Size: w-6 h-6 for feature checkmarks, w-5 h-5 for trust badges
- Placement: Inline-start for list items

### QR Code Container
- Background: White always (for scannability)
- Padding: p-4 around QR
- Border: 2px solid with tier accent
- Shadow: shadow-md

## Navigation Between Tiers
Horizontal pill navigation showing all 4 plans:
- Sticky to top on scroll (mobile)
- Current plan highlighted with filled background
- Others show as outlined pills
- Gap-2 between pills, text-sm

## Mobile Optimization
- Single column layout throughout
- Touch targets minimum 44x44px
- QR code maintains 200x200px minimum
- Payment button spans full width (w-full)
- Generous spacing for thumb-friendly interaction

## Images
**Logo**: SVG preferred, placed in header with h-12 w-auto, centered on mobile

**No hero images required** - this is a conversion-focused payment page where clarity and trust are paramount. Visual distinction comes through tier-based styling, not imagery.

## Accessibility
- High contrast text (ensure readability against gradients)
- Alt text for logo: "Biswa Tech Solutions"
- ARIA labels for payment buttons: "Pay [amount] via UPI"
- Focus states on all interactive elements with visible outline

## Critical UX Principles
- Minimize scrolling: Keep primary CTA above fold
- Clear pricing: No hidden fees or confusing terms
- Dual payment options: Accommodate QR scanner and button preferences
- Instant feedback: Visual confirmation when button clicked
- Trust signals: Security badges, clear UPI ID display
- Cross-tier consistency: Maintain familiar layout across all plans