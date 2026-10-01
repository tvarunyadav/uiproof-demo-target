import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div
      id={`product-card-${product.id}`}
      className="glass-card rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/30 group"
    >
      {/* Product Image Section */}
      <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-900 aspect-video flex items-center justify-center border border-gray-800">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge Overlay */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-lg backdrop-blur-md shadow-md bg-indigo-600/80 text-white border border-indigo-400/40">
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">
            {product.category}
          </span>
          <div className="flex items-center space-x-1 text-amber-400 text-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span className="font-semibold">{product.rating}</span>
          </div>
        </div>

        <h3 className="text-base font-bold text-gray-100 mb-1 group-hover:text-indigo-300 transition-colors">
          {product.name}
        </h3>

        <p className="text-xs text-gray-400 mb-4 line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Price & Action Button Area */}
      <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between mt-auto">
        <div>
          <span className="text-xs text-gray-500 block">Price</span>
          <span className="text-lg font-extrabold text-white">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <button
          id={`${product.id}-add-cart-btn`}
          onClick={() => onAddToCart(product)}
          aria-label={`Add ${product.name} to Cart`}
          className="px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all active:scale-95 bg-gray-800 hover:bg-indigo-600 text-gray-200 hover:text-white border border-gray-700 hover:border-indigo-500"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};
