# UIProof Demo Target — Controlled QA Fixture (Retest Verified)

> **CONTROLLED QA TARGET — RETEST VERIFIED**

> *This website serves as the Retest target for validating UIProof AI fix verification. All 4 controlled baseline defects have been resolved.*

This repository provides a dedicated, lightweight React + TypeScript + Vite target website designed specifically to validate the deterministic audit engine, AI fix guidance, and Retest verification features of the **UIProof AI Platform**.

---

## 🎯 Controlled Defects & Resolution Status

### 1. DEF-001 — Missing Meta Description
* **Defect ID**: `DEF-001`
* **Audit Category**: `UI-MISSING-META-DESKTOP` / `UI-MISSING-META-MOBILE`
* **Source Location**: `index.html`
* **Baseline Issue**: The document `<head>` contained a valid `<title>` tag but omitted the `<meta name="description">` element.
* **Retest Resolution**: Added `<meta name="description" content="UIProof Demo Target store catalog, performance analytics dashboard, and verified QA test harness." />` to `index.html`.

---

### 2. DEF-002 — Mobile Horizontal Overflow
* **Defect ID**: `DEF-002`
* **Audit Category**: `UI-OVERFLOW-MOBILE`
* **Source Location**: `src/components/StoreView.tsx`
* **Baseline Issue**: An element with `data-uiproof-fixture="mobile-overflow"` used a fixed width of `480px` (`w-[480px]`), causing `document.scrollWidth > 390px` on mobile screens.
* **Retest Resolution**: Replaced fixed width `w-[480px]` with fluid responsive container classes `w-full max-w-full`. Ensured all parent layout containers fit within 390px mobile viewports without using clipping workarounds.

---

### 3. DEF-003 — Broken Image
* **Defect ID**: `DEF-003`
* **Audit Category**: `BROKEN_RESOURCE / broken image`
* **Source Location**: `src/components/StoreView.tsx`
* **Baseline Issue**: An `<img data-uiproof-fixture="broken-image" src="/assets/uiproof-missing-demo-image.png" alt="..." />` element referenced a non-existent image path.
* **Retest Resolution**: Replaced missing asset path with bundled local image `src/assets/hero.png` while maintaining meaningful `alt` attribute text and responsive dimensions.

---

### 4. DEF-004 — Unlabeled Input
* **Defect ID**: `DEF-004`
* **Audit Category**: `basic accessibility / unlabeled input`
* **Source Location**: `src/components/StoreView.tsx`
* **Baseline Issue**: An `<input data-uiproof-fixture="unlabeled-input" type="email" placeholder="Email address" />` lacked an associated `<label>` element or `aria-label`.
* **Retest Resolution**: Associated the input element with an explicit `<label htmlFor="newsletter-email">` element.

---

## 🛠️ Local Development & Build

### Running the App
```bash
npm run dev
```
The application will launch on `http://localhost:5173/`.

### Verifying the Production Build
```bash
npm run build
```
Runs TypeScript typechecks (`tsc -b`) and bundles assets via Vite.
