import type { DefectItem } from '../types';

export const DEFECTS_REGISTRY: DefectItem[] = [
  {
    id: 'DEF-001',
    title: 'Missing Meta Description',
    category: 'SEO & Metadata',
    severity: 'Major',
    location: 'index.html',
    selector: 'head',
    description: 'Document <head> contains a valid <title> tag but intentionally omits the <meta name="description"> tag.',
    expectedCategory: 'UI-MISSING-META-DESKTOP / UI-MISSING-META-MOBILE',
    howCreated: 'The meta description tag was omitted from the index.html file.',
    expectedFix: 'Add <meta name="description" content="..."> to index.html <head>.'
  },
  {
    id: 'DEF-002',
    title: 'Mobile Horizontal Overflow',
    category: 'Layout & Responsiveness',
    severity: 'Critical',
    location: 'Store Page -> Promotional Banner Container',
    selector: '[data-uiproof-fixture="mobile-overflow"]',
    description: 'Element with data-uiproof-fixture="mobile-overflow" uses a fixed width of 480px. At desktop (1440px) it fits within container bounds, but at mobile (390px) it causes document.scrollWidth > 390px.',
    expectedCategory: 'UI-OVERFLOW-MOBILE',
    howCreated: 'A child banner container in StoreView is given a fixed width (w-[480px]) exceeding the 390px mobile viewport.',
    expectedFix: 'Change element width to responsive class w-full max-w-full.'
  },
  {
    id: 'DEF-003',
    title: 'Broken Image',
    category: 'Resource Load',
    severity: 'Major',
    location: 'Store Page -> Featured Product Fixture Banner',
    selector: '[data-uiproof-fixture="broken-image"]',
    description: 'Image element points to non-existent URL /assets/uiproof-missing-demo-image.png while retaining a valid alt attribute.',
    expectedCategory: 'BROKEN_RESOURCE / broken image',
    howCreated: '<img data-uiproof-fixture="broken-image" src="/assets/uiproof-missing-demo-image.png" alt="UIProof controlled broken resource" />',
    expectedFix: 'Replace image src with a valid accessible image URL.'
  },
  {
    id: 'DEF-004',
    title: 'Unlabeled Input',
    category: 'Accessibility',
    severity: 'Major',
    location: 'Store Sidebar -> Newsletter Subscription Input',
    selector: '[data-uiproof-fixture="unlabeled-input"]',
    description: 'Input element contains placeholder text but intentionally has no associated <label>, aria-label, or aria-labelledby attributes.',
    expectedCategory: 'basic accessibility / unlabeled input',
    howCreated: '<input data-uiproof-fixture="unlabeled-input" type="email" placeholder="Email address" />',
    expectedFix: 'Add aria-label="Email address" or associate with a <label> element.'
  }
];
