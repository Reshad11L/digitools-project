import React, { useState } from 'react'

const tagStyles = {
  bestseller: 'bg-amber-100 text-amber-800',
  popular:    'bg-purple-100 text-purple-800',
  new:        'bg-emerald-100 text-emerald-800',
}

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  const [flash, setFlash] = useState(false)

  const handleBuy = () => {
    if (isInCart) return
    onAddToCart(product)
    setFlash(true)
    setTimeout(() => setFlash(false), 1800)
  }

  return (
    <div className="card-hover relative bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-3 hover:border-purple-300 animate-fade-up">

      {/* Tag badge */}
      <span
        className={`absolute top-4 right-4 text-[11px] font-bold px-3 py-1 rounded-full ${
          tagStyles[product.tagType] || 'bg-gray-100 text-gray-600'
        }`}
      >
        {product.tag}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-2xl">
        {product.icon}
      </div>

      {/* Name + desc */}
      <div>
        <h3 className="font-syne font-bold text-gray-900 text-base mb-1">{product.name}</h3>
        <p className="text-gray-400 text-xs leading-relaxed">{product.description}</p>
      </div>

      {/* Price */}
      <div className="font-syne font-extrabold text-gray-900 text-2xl tracking-tight">
        ${product.price}
        <span className="text-xs font-normal text-gray-400 ml-1">/{product.period}</span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-1.5 flex-1">
        {product.features.map((f, i) => (
          <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
            <span className="text-purple-600 font-bold">✓</span>
            {f}
          </li>
        ))}
      </ul>

      {/* Buy button */}
      <button
        onClick={handleBuy}
        disabled={isInCart}
        className={`w-full mt-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
          flash || isInCart
            ? 'bg-emerald-500 text-white cursor-default'
            : 'bg-purple-600 hover:bg-purple-700 text-white hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5'
        }`}
      >
        {flash || isInCart ? '✓ Added to Cart' : 'Buy Now'}
      </button>
    </div>
  )
}

export default ProductCard
