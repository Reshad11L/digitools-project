import React from 'react'

const CTABanner = ({ onExplore }) => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 py-20 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-200 text-sm sm:text-base mb-8 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />Start your free trial today.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-5">
          <button
            onClick={onExplore}
            className="bg-white text-purple-700 font-bold px-8 py-3 rounded-full text-sm hover:bg-purple-50 transition-all duration-200 hover:shadow-lg"
          >
            Explore Products
          </button>
          <button className="border-2 border-white/40 text-white font-semibold px-8 py-3 rounded-full text-sm hover:bg-white/10 transition-all duration-200">
            View Pricing
          </button>
        </div>

        <p className="text-purple-300 text-xs">
          14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  )
}

export default CTABanner
