import React from 'react';
import { ShoppingBag, BarChart2, User, AlertTriangle, ShoppingCart, ShieldAlert } from 'lucide-react';
import type { CartItem } from '../types';

interface HeaderProps {
  activeTab: 'store' | 'analytics' | 'profile' | 'defects';
  setActiveTab: (tab: 'store' | 'analytics' | 'profile' | 'defects') => void;
  cartItems: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  defectsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartItems,
  setIsCartOpen,
  defectsCount
}) => {
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-gray-800 backdrop-blur-md bg-gray-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Target Badge */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg text-white tracking-tight">UIProof Demo Target</span>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  CONTROLLED QA FIXTURE
                </span>
              </div>
              <p className="text-xs text-gray-400">This website intentionally contains known defects for validating UIProof AI.</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-1 sm:space-x-2" aria-label="Main Navigation">
            <button
              id="nav-tab-store"
              onClick={() => setActiveTab('store')}
              aria-label="Navigate to Product Store"
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'store'
                  ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/60'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Store</span>
            </button>

            <button
              id="nav-tab-analytics"
              onClick={() => setActiveTab('analytics')}
              aria-label="Navigate to Analytics Dashboard"
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'analytics'
                  ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/60'
              }`}
            >
              <BarChart2 className="w-4 h-4" />
              <span>Analytics</span>
            </button>

            <button
              id="nav-tab-profile"
              onClick={() => setActiveTab('profile')}
              aria-label="Navigate to User Profile"
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'profile'
                  ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/60'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>

            <button
              id="nav-tab-defects"
              onClick={() => setActiveTab('defects')}
              aria-label="Navigate to Defects Specification Registry"
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'defects'
                  ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50 shadow-sm shadow-amber-900/50'
                  : 'text-amber-400/80 hover:text-amber-300 hover:bg-amber-950/40'
              }`}
            >
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Defects Spec ({defectsCount})</span>
            </button>
          </nav>

          {/* Cart Icon Button */}
          <div className="flex items-center space-x-3">
            <button
              id="header-cart-button"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Shopping Cart"
              className="relative p-2.5 rounded-lg bg-gray-800/80 text-gray-200 hover:bg-gray-700/80 transition-colors border border-gray-700/50 flex items-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5 text-indigo-400" />
              <span className="text-xs font-semibold text-gray-300 hidden sm:inline">
                ${totalPrice.toFixed(2)}
              </span>
              {totalItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-indigo-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
