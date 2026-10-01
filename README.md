# UIProof Demo Target — Controlled QA Fixture

> **CONTROLLED QA FIXTURE**  
> *This website intentionally contains known defects for validating UIProof AI.*

This repository provides a dedicated, lightweight React + TypeScript + Vite target website designed specifically to validate the deterministic audit engine, AI fix guidance, and Retest verification features of the **UIProof AI Platform**.

---

## 🎯 Controlled Baseline Defects Specification

The baseline environment contains **exactly four (4)** controlled audit defects:

### 1. DEF-001 — Missing Meta Description
* **Defect ID**: `DEF-001`
* **Expected UIProof Category**: `UI-MISSING-META-DESKTOP` / `UI-MISSING-META-MOBILE`
* **Source Location**: `index.html`
* **How Created**: The document `<head>` contains a valid `<title>` tag but intentionally omits the `<meta name="description">` element.
* **Expected Fix**: Add `<meta name="description" content="UIProof Demo Target store catalog and analytics dashboard.">` to `<head>`.

---

### 2. DEF-002 — Mobile Horizontal Overflow
* **Defect ID**: `DEF-002`
* **Expected UIProof Category**: `UI-OVERFLOW-MOBILE`
* **Source Location**: `src/components/StoreView.tsx`
* **How Created**: An element with `data-uiproof-fixture="mobile-overflow"` uses a fixed width of `480px` (`w-[480px]`). On a 1440px desktop screen it fits safely within layout bounds (`scrollWidth <= 1440px`), but on a 390px mobile viewport it causes root `document.scrollWidth > 390px`.
* **Expected Fix**: Replace fixed width `w-[480px]` with responsive layout classes such as `w-full max-w-md`.

---

### 3. DEF-003 — Broken Image
* **Defect ID**: `DEF-003`
* **Expected UIProof Category**: `BROKEN_RESOURCE / broken image`
* **Source Location**: `src/components/StoreView.tsx`
* **How Created**: An `<img data-uiproof-fixture="broken-image" src="/assets/uiproof-missing-demo-image.png" alt="UIProof controlled broken resource" />` references a non-existent image asset while retaining a valid `alt` attribute.
* **Expected Fix**: Update `src` attribute to point to a valid accessible image file.

---

### 4. DEF-004 — Unlabeled Input
* **Defect ID**: `DEF-004`
* **Expected UIProof Category**: `basic accessibility / unlabeled input`
* **Source Location**: `src/components/StoreView.tsx`
* **How Created**: An `<input data-uiproof-fixture="unlabeled-input" type="email" placeholder="Email address" />` element contains placeholder text but intentionally lacks an associated `<label>`, `aria-label`, or `aria-labelledby` attribute.
* **Expected Fix**: Add `aria-label="Email address"` or bind to an explicit `<label>` element.

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
