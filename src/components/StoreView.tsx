import React, { useState } from 'react';
import { Search, SlidersHorizontal, AlertTriangle } from 'lucide-react';
import type { Product } from '../types';

import { ProductCard } from './ProductCard';

interface StoreViewProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const StoreView: React.FC<StoreViewProps> = ({ products, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Peripherals', 'Displays', 'Audio', 'Furniture', 'Accessories'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner introducing the Controlled QA Target */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/80 via-purple-950/50 to-gray-900 border border-indigo-500/30 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xl">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight mb-1">
            Hardware & Tech Product Catalog
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl">
            CONTROLLED QA FIXTURE — This website intentionally contains known defects for validating UIProof AI.
          </p>
        </div>
        <div className="flex items-center space-x-3 shrink-0">
          <div className="px-4 py-2.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-mono flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>4 Controlled Audit Fixtures</span>
          </div>
        </div>
      </div>

      {/* DEF-002: MOBILE HORIZONTAL OVERFLOW FIXTURE */}
      {/* w-[480px] fits safely inside 1440px desktop grid, but exceeds 390px mobile viewport */}
      <div className="flex justify-start">
        <div
          data-uiproof-fixture="mobile-overflow"
          className="w-[480px] p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-300 flex items-center space-x-3"
        >
          <div className="p-2 rounded-lg bg-indigo-600/30 text-indigo-300 font-mono font-bold shrink-0">
            DEF-002
          </div>
          <div>
            <strong className="text-white block">Controlled Mobile Overflow Banner</strong>
            <span>Fixed 480px container width (causes document.scrollWidth &gt; 390px on mobile).</span>
          </div>
        </div>
      </div>

      {/* Controlled Fixture Spotlight Box: DEF-003 Broken Image */}
      <div className="glass-panel p-5 rounded-2xl border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center shrink-0 overflow-hidden">
            {/* DEF-003: BROKEN IMAGE FIXTURE */}
            <img
              data-uiproof-fixture="broken-image"
              src="/assets/uiproof-missing-demo-image.png"
              alt="UIProof controlled broken resource"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-mono text-amber-400 font-bold block mb-0.5">DEF-003 • BROKEN RESOURCE FIXTURE</span>
            <h3 className="text-sm font-bold text-white">Controlled Missing Resource Test</h3>
            <p className="text-xs text-gray-400">Intentionally broken image path while retaining valid alt tag.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-panel p-5 rounded-2xl border border-gray-800">
            <div className="flex items-center space-x-2 mb-4">
              <SlidersHorizontal className="w-5 h-5 text-indigo-400" />
              <h2 className="text-base font-bold text-white">Catalog Filters</h2>
            </div>

            {/* Restored normal text contrast (Fixes old DEF-003) */}
            <div className="mb-6 p-3 rounded-xl bg-gray-900 border border-gray-800">
              <p id="store-filter-header-subtext" className="text-xs font-medium text-gray-300">
                Refine catalog selection by category and keyword search.
              </p>
            </div>

            {/* Search Input with proper aria-label */}
            <div className="relative mb-6">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                aria-label="Search products"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700/80 rounded-xl pl-9 pr-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="mb-6">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-3">
                Categories
              </label>
              <div className="space-y-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    aria-label={`Filter by category ${cat}`}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      selectedCategory === cat
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/60'
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* DEF-004: UNLABELED INPUT FIXTURE */}
            <div className="pt-4 border-t border-gray-800">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-2">
                DEF-004 • UNLABELED INPUT FIXTURE
              </span>
              <p className="text-[11px] text-gray-400 mb-2">
                Subscribe to catalog updates:
              </p>
              {/* Intentionally NO label, aria-label, or aria-labelledby */}
              <input
                data-uiproof-fixture="unlabeled-input"
                type="email"
                placeholder="Email address"
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Product Grid Container */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium text-gray-400">
              Showing <strong className="text-white">{filteredProducts.length}</strong> items
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
