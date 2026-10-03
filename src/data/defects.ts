import type { DefectItem } from '../types';

export const DEFECTS_REGISTRY: DefectItem[] = [
  {
    id: 'DEF-001',
    title: 'Missing Meta Description',
    category: 'SEO & Metadata',
    severity: 'Major',
    location: 'index.html',
    selector: 'head',
    description: 'Status: RESOLVED — <meta name="description" content="..."> added to index.html <head>.',
    expectedCategory: 'UI-MISSING-META-DESKTOP / UI-MISSING-META-MOBILE',
    howCreated: 'Originally omitted in baseline; restored in retest version.',
    expectedFix: 'Verified — Meta description element present in DOM.'
  },
  {
    id: 'DEF-002',
    title: 'Mobile Horizontal Overflow',
    category: 'Layout & Responsiveness',
    severity: 'Critical',
    location: 'Store Page -> Promotional Banner Container',
    selector: '[data-uiproof-fixture="mobile-overflow"]',
    description: 'Status: RESOLVED — Replaced fixed width (w-[480px]) with responsive container styling (w-full max-w-full), ensuring document.scrollWidth <= clientWidth at 390px viewport.',
    expectedCategory: 'UI-OVERFLOW-MOBILE',
    howCreated: 'Originally fixed width; converted to fluid responsive max-w-full container.',
    expectedFix: 'Verified — Page fits within 390px mobile viewport.'
  },
  {
    id: 'DEF-003',
    title: 'Broken Image',
    category: 'Resource Load',
    severity: 'Major',
    location: 'Store Page -> Featured Product Fixture Banner',
    selector: '[data-uiproof-fixture="broken-image"]',
    description: 'Status: RESOLVED — Replaced invalid missing image URL with bundled local asset src/assets/hero.png with alt="UIProof demo target hero feature".',
    expectedCategory: 'BROKEN_RESOURCE / broken image',
    howCreated: 'Originally missing image path; updated to load valid bundled local asset.',
    expectedFix: 'Verified — Image asset loads cleanly without network 404 failure.'
  },
  {
    id: 'DEF-004',
    title: 'Unlabeled Input',
    category: 'Accessibility',
    severity: 'Major',
    location: 'Store Sidebar -> Newsletter Subscription Input',
    selector: '[data-uiproof-fixture="unlabeled-input"]',
    description: 'Status: RESOLVED — Associated input with explicit <label htmlFor="newsletter-email"> and matching input id.',
    expectedCategory: 'basic accessibility / unlabeled input',
    howCreated: 'Originally missing label; associated with explicit <label> element.',
    expectedFix: 'Verified — Accessible name computed from associated <label>.'
  }
];
