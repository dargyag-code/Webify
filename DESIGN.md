# Webify Colombia — Design System & Engineering Specification (`DESIGN.md`)

## 1. Visual World & Aesthetic Direction
- **Mode:** `Persuade` + `Operate` (Interactive Live Demos & Quote Calculator).
- **Aesthetic System:** Swiss-Tech Editorial & High-Craft Light Mode (`taste-skill` v2.5.1 + `impeccable` v4.8.2 + `ui-ux-pro-max` + `emil-design-eng`).
- **Elevation Policy (`impeccable/craft-floor.md`):** Declared once via `1px solid` architectural borders (`#E2E8F0` on light surfaces, `#1E293B` on dark surfaces). No ghost-card drop shadows under `1px` borders.
- **Card Nesting Policy (`taste-skill/cards.md`):** Maximum two levels (`Card > Panel > Plain Rows with 1px Dividers`). No triple-nested boxes.

## 2. Color Tokens
| Token | Hex | Usage |
| :--- | :--- | :--- |
| Surface Light | `#F8FAFC` | Alabaster primary page ground |
| Surface Pure | `#FFFFFF` | Pure White interactive cards & simulator frames |
| Surface Warm | `#F4F3EF` | Manual process contrast surface |
| Surface Dark | `#090D16` | Obsidian Slate high-contrast blocks & WhatsApp ticket panels |
| Surface Dark Panel | `#0F172A` | Secondary dark panel inside Obsidian Slate |
| Border Light | `#E2E8F0` | `1px solid` structural hairline (light mode) |
| Border Dark | `#1E293B` | `1px solid` structural hairline (dark mode) |
| Accent Signal | `#10B981` | Emerald Signal surgical conversion & live status |
| Accent Deep | `#059669` | High-contrast emerald text on light backgrounds (WCAG AA >= 4.5:1) |

## 3. Typography
- **Display & UI (`--font-jakarta`):** `Plus Jakarta Sans` (`500`, `600`, `700`, `800`), `tracking-[-0.03em]` on `H1`/`H2`.
- **Data, COP Pricing & Tickets (`--font-jetbrains`):** `JetBrains Mono` (`400`, `500`, `600`, `700`) with `font-variant-numeric: tabular-nums`.

## 4. Motion & Animation System (`emil-design-eng` + `framer-motion`)
| Interaction | Tool | Curve / Spring | Duration | Details |
| :--- | :--- | :--- | :--- | :--- |
| Button press (`:active`) | CSS transition | `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` | `160ms` | `transform: scale(0.97)`, gated `:hover` via `@media (hover: hover) and (pointer: fine)` |
| Shared Tab / Toggle Pill | `framer-motion` (`layoutId`) | `{ type: "spring", duration: 0.38, bounce: 0.15 }` | Spring | `active-niche-tab` & `pricing-mode-pill` |
| Tab Content Crossfade | `framer-motion` (`AnimatePresence`) | `[0.23, 1, 0.32, 1]` | `180ms` | `opacity: 0, scale: 0.98, filter: "blur(2px)"` (never `scale(0)`) |
| Live Cart Line Items | `framer-motion` (`AnimatePresence`) | `[0.23, 1, 0.32, 1]` | `160ms` | `layout="position"` + `scale(0.96)` + `blur(2px)` |
| FAQ Accordion | `framer-motion` (`AnimatePresence`) | `[0.23, 1, 0.32, 1]` | `200ms` | `height: 0 -> "auto"` + `opacity: 0 -> 1` |
| Reduced Motion | CSS + `useReducedMotion()` | `ease` | `120–150ms` | Opacity-only transitions, zero spatial movement |
