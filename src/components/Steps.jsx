import React from 'react'

const steps = [
  {
    num: '01',
    icon: '👤',
    name: 'Create Account',
    desc: 'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    num: '02',
    icon: '📦',
    name: 'Choose Products',
    desc: 'Browse our catalog and select the tools that fit your needs.',
  },
  {
    num: '03',
    icon: '🚀',
    name: 'Start Creating',
    desc: 'Download and start using your premium tools immediately.',
  },
]

const Steps = () => {
  return (
    <section className="bg-gray-50 py-16 px-4" id="testimonials">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-gray-900 text-center tracking-tight mb-2">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-400 text-center text-sm mb-10">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="card-hover relative bg-white border border-gray-100 rounded-2xl p-7 text-center hover:border-purple-200"
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              {/* Step number badge */}
              <span className="absolute top-4 right-4 bg-purple-600 text-white text-[10px] font-bold w-7 h-7 rounded-full flex items-center justify-center">
                {step.num}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-5">
                {step.icon}
              </div>

              <h3 className="font-syne font-bold text-gray-900 text-base mb-2">{step.name}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps
