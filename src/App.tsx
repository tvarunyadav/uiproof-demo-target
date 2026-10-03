import { useState } from 'react';
import { Header } from './components/Header';
import { StoreView } from './components/StoreView';
import { AnalyticsView } from './components/AnalyticsView';
import { ProfileView } from './components/ProfileView';
import { DefectsRegistryView } from './components/DefectsRegistryView';
import { CartDrawer } from './components/CartDrawer';
import { INITIAL_PRODUCTS } from './data/products';
import { DEFECTS_REGISTRY } from './data/defects';
import type { Product, CartItem } from './types';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<'store' | 'analytics' | 'profile' | 'defects'>('store');
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.product.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white max-w-full">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-indigo-950 to-purple-950 text-white text-xs py-2 px-4 border-b border-emerald-900/50 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-2 max-w-7xl mx-auto w-full">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong className="text-emerald-300">DEMO TARGET APP:</strong> Corrected Fixture Version — All 4 controlled baseline audit defects resolved for UIProof AI Retest verification.
          </span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartItems={cartItems}
        setIsCartOpen={setIsCartOpen}
        defectsCount={DEFECTS_REGISTRY.length}
      />

      {/* Dynamic Main View */}
      <main className="flex-1 pb-16">
        {activeTab === 'store' && (
          <StoreView products={products} onAddToCart={handleAddToCart} />
        )}
        {activeTab === 'analytics' && <AnalyticsView />}
        {activeTab === 'profile' && <ProfileView />}
        {activeTab === 'defects' && (
          <DefectsRegistryView onNavigateTab={(tab) => setActiveTab(tab)} />
        )}
      </main>

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Footer Banner */}
      <footer className="glass-panel border-t border-gray-800 py-6 text-xs text-gray-400 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="font-semibold text-gray-300">UIProof AI Demo Target Suite</span>
            <span>• Retest & Verified Version 2.0</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-500">Separately Deployed Test Harness</span>
            <button
              onClick={() => setActiveTab('defects')}
              className="text-indigo-400 hover:text-indigo-300 font-bold underline flex items-center space-x-1"
            >
              <span>Inspect Defect Registry ({DEFECTS_REGISTRY.length})</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
