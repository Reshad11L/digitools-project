import React, { useState, useEffect } from 'react'

const Navbar = ({ cartCount, onCartClick }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-100'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <a href="#" className="brand text-2xl font-extrabold gradient-text tracking-tight">
            DigiTools
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Cart button */}
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full hover:bg-purple-50 transition-colors duration-200 group"
              aria-label="Open cart"
            >
              <span className="text-xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-fade-in">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Login */}
            <button className="hidden sm:block text-sm font-medium text-gray-600 border border-gray-200 px-4 py-2 rounded-full hover:border-purple-400 hover:text-purple-600 transition-all duration-200">
              Login
            </button>

            {/* Get Started */}
            <button className="text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-purple-200 hover:shadow-md">
              Get Started
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-gray-500"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <ul className="flex flex-col gap-3">
              {navLinks.map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm font-medium text-gray-600 hover:text-purple-600 py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
