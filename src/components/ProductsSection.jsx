import React from 'react'
import ProductCard from './ProductCard'
import Cart from './Cart'
import products from '../data/products.json'

const ProductsSection = ({ activeTab, setActiveTab, cart, onAddToCart, onRemove, onCheckout }) => {
  return (
    <section className="py-16 px-4 bg-white" id="products">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-gray-900 text-center tracking-tight mb-2">
          Premium Digital Tools
        </h2>
        <p className="text-gray-400 text-center text-sm sm:text-base mb-8 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-purple-50 rounded-full p-1 gap-1">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-250 ${
                activeTab === 'products'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-250 ${
                activeTab === 'cart'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, idx) => (
              <div key={product.id} style={{ animationDelay: `${idx * 0.07}s` }}>
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                  isInCart={cart.some(i => i.id === product.id)}
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'cart' && (
          <Cart
            items={cart}
            onRemove={onRemove}
            onCheckout={onCheckout}
          />
        )}

      </div>
    </section>
  )
}

export default ProductsSection
