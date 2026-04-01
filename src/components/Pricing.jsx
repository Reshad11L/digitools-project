import React from 'react'

const plans = [
  {
    name: 'Starter',
    tagline: 'Perfect for getting started',
    price: 0,
    period: 'Month',
    features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
    cta: 'Get Started Free',
    featured: false,
  },
  {
    name: 'Pro',
    tagline: 'Best for professionals',
    price: 29,
    period: 'Month',
    features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
    cta: 'Start Pro Trial',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    tagline: 'For teams and businesses',
    price: 99,
    period: 'Month',
    features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
    cta: 'Contact Sales',
    featured: false,
  },
]

const Pricing = () => {
  return (
    <section className="py-16 px-4 bg-white" id="pricing">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-gray-900 text-center tracking-tight mb-2">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-400 text-center text-sm mb-10">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card-hover relative rounded-2xl p-7 flex flex-col gap-4 ${
                plan.featured
                  ? 'bg-gradient-to-b from-purple-600 to-purple-800 text-white shadow-2xl shadow-purple-300'
                  : 'bg-white border border-gray-100'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-[11px] font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <div>
                <h3 className={`font-syne font-bold text-lg mb-0.5 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs ${plan.featured ? 'text-purple-200' : 'text-gray-400'}`}>
                  {plan.tagline}
                </p>
              </div>

              <div className={`font-syne font-extrabold text-4xl tracking-tight ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                ${plan.price}
                <span className={`text-sm font-normal ml-1 ${plan.featured ? 'text-purple-200' : 'text-gray-400'}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="flex flex-col gap-2 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className={`text-xs flex items-center gap-2 ${plan.featured ? 'text-purple-100' : 'text-gray-500'}`}>
                    <span className={`font-bold ${plan.featured ? 'text-white' : 'text-purple-600'}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 mt-2 ${
                  plan.featured
                    ? 'bg-white text-purple-700 hover:bg-purple-50'
                    : 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-md hover:shadow-purple-100'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
