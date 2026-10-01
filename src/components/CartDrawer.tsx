import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import type { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-gray-900 border-l border-gray-800 text-gray-100 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white">Your Shopping Cart</h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close Shopping Cart Drawer"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-gray-600 mx-auto" />
                <p className="text-gray-400 text-sm font-medium">Your cart is currently empty</p>
                <p className="text-gray-500 text-xs">Add items from the store catalog to inspect cart behavior.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="glass-card p-4 rounded-xl border border-gray-800 flex items-center space-x-4"
                >
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-lg object-cover bg-gray-900 border border-gray-800"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white line-clamp-1">{item.product.name}</h4>
                    <span className="text-xs text-indigo-400 font-semibold block">
                      ${item.product.price.toFixed(2)} x {item.quantity}
                    </span>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    aria-label={`Remove ${item.product.name} from cart`}
                    className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-950/40 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-gray-800 bg-gray-950/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400 font-semibold">Subtotal</span>
                <span id="cart-total-amount" className="text-xl font-extrabold text-white">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={onClearCart}
                  aria-label="Clear all items from shopping cart"
                  className="px-4 py-3 rounded-xl text-xs font-semibold text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  Clear
                </button>
                <button
                  onClick={() => alert(`Proceeding to checkout with total: $${totalAmount.toFixed(2)}`)}
                  aria-label="Proceed to checkout"
                  className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/30 transition-all"
                >
                  <span>Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
