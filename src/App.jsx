import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar          from './components/Navbar'
import Banner          from './components/Banner'
import Stats           from './components/Stats'
import ProductsSection from './components/ProductsSection'
import Steps           from './components/Steps'
import Pricing         from './components/Pricing'
import CTABanner       from './components/CTABanner'
import Footer          from './components/Footer'

const App = () => {
  const [cart, setCart]           = useState([])
  const [activeTab, setActiveTab] = useState('products')

  /* ── Cart handlers ── */
  const handleAddToCart = (product) => {
    if (cart.find(i => i.id === product.id)) {
      toast.info(`"${product.name}" is already in your cart!`, { icon: 'ℹ️' })
      return
    }
    setCart(prev => [...prev, product])
    toast.success(`"${product.name}" added to cart! 🛒`)
  }

  const handleRemove = (product) => {
    setCart(prev => prev.filter(i => i.id !== product.id))
    toast.error(`"${product.name}" removed from cart.`, { icon: '🗑️' })
  }

  const handleCheckout = () => {
    if (cart.length === 0) return
    setCart([])
    toast.success('Order placed! 🎉 Thank you for your purchase.', {
      autoClose: 4000,
    })
  }

  /* ── Switch to cart tab (navbar cart icon click) ── */
  const handleCartClick = () => {
    setActiveTab('cart')
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  /* ── Switch to products tab ── */
  const handleExplore = () => {
    setActiveTab('products')
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen font-dm">

      <Navbar
        cartCount={cart.length}
        onCartClick={handleCartClick}
      />

      <main>
        <Banner onExplore={handleExplore} />
        <Stats />
        <ProductsSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          cart={cart}
          onAddToCart={handleAddToCart}
          onRemove={handleRemove}
          onCheckout={handleCheckout}
        />
        <Steps />
        <Pricing />
        <CTABanner onExplore={handleExplore} />
      </main>

      <Footer />

      {/* React-Toastify container */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        toastStyle={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.875rem',
          borderRadius: '12px',
        }}
      />
    </div>
  )
}

export default App
