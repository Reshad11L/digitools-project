import React from 'react'

const Cart = ({ items, onRemove, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0)

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className="border border-gray-100 rounded-2xl p-8 text-center bg-white shadow-sm">
          <div className="text-6xl mb-4">🛒</div>
          <p className="font-syne font-bold text-gray-700 text-lg mb-2">Your cart is empty</p>
          <p className="text-gray-400 text-sm">Browse our products and add something awesome!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm">
        <h2 className="font-syne font-bold text-gray-900 text-xl mb-5">Your Cart</h2>

        {/* Cart items */}
        <div className="flex flex-col gap-3 mb-4">
          {items.map(item => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-purple-50/60 rounded-xl p-4 group animate-fade-in"
            >
              {/* Icon */}
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm flex-shrink-0">
                {item.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-sm truncate">{item.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">${item.price} / {item.period}</p>
              </div>

              {/* Remove */}
              <button
                onClick={() => onRemove(item)}
                className="text-rose-500 hover:text-rose-700 text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-rose-50 transition-all duration-200 flex-shrink-0"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Divider + total */}
        <div className="border-t border-gray-100 pt-4 flex items-center justify-between mb-4">
          <span className="text-gray-400 text-sm">Total:</span>
          <span className="font-syne font-extrabold text-gray-900 text-3xl tracking-tight">
            ${total}
          </span>
        </div>

        {/* Checkout */}
        <button
          onClick={onCheckout}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold py-4 rounded-xl text-sm tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-purple-300 hover:-translate-y-0.5"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
