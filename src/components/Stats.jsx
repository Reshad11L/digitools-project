import React from 'react'

const stats = [
  { number: '50K+', label: 'Active Users' },
  { number: '200+', label: 'Premium Tools' },
  { number: '4.9',  label: 'Rating' },
]

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-3 divide-x divide-purple-500">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center px-4 sm:px-8 py-2">
              <div className="font-syne text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {stat.number}
              </div>
              <div className="text-purple-200 text-xs sm:text-sm mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
