import React from 'react'

const Banner = ({ onExplore }) => {
  return (
    <section className="pt-24 pb-0 bg-white overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-64px-180px)] py-12">

          {/* Left – text */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              New: AI-Powered Tools Available
            </div>

            <h1 className="font-syne text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
              Supercharge Your<br />
              <span className="gradient-text">Digital Workflow</span>
            </h1>

            <p className="text-gray-500 leading-relaxed mb-3 text-sm sm:text-base max-w-md">
              Access premium AI tools, design assets, templates, and productivity software—all in one place.
            </p>
            <p className="text-purple-600 font-medium text-sm mb-8 cursor-pointer hover:underline" onClick={onExplore}>
              Explore Products →
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onExplore}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-7 py-3 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-purple-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Products
              </button>
              <button className="flex items-center gap-2 border border-gray-200 hover:border-purple-300 text-gray-600 hover:text-purple-600 font-medium px-6 py-3 rounded-full text-sm transition-all duration-200">
                <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs">▶</span>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right – image / illustration */}
          <div className="animate-fade-up delay-200 relative">
            <div className="shimmer-bg rounded-2xl h-80 lg:h-96 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-purple-100">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-30 blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-200 rounded-full opacity-30 blur-2xl"></div>

              {/* Central illustration */}
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-3">🖥️</div>
                <div className="font-syne font-bold text-purple-700 text-lg">Digital Tools Hub</div>
                <div className="text-purple-400 text-xs mt-1 font-dm">200+ premium tools in one place</div>
              </div>

              {/* Floating cards */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 text-xs font-semibold text-purple-700 animate-fade-in delay-400">
                🛒 50K+ Active Users
              </div>
              <div className="absolute top-6 right-6 bg-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 text-xs font-semibold text-emerald-700 animate-fade-in delay-500">
                ⭐ 4.9 Rating
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Banner
