import React from 'react'

const footerLinks = {
  Product:   ['Features', 'Pricing', 'Templates', 'Integrations'],
  Company:   ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Contact'],
}

const Footer = () => {
  return (
    <footer className="bg-[#0f0f1a] text-gray-400 pt-14 pb-6 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">

          {/* Brand col */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="font-syne text-2xl font-extrabold text-white mb-3">DigiTools</div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social col */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Social Links
            </h4>
            <div className="flex gap-3">
              {[
                { label: '▶', title: 'YouTube' },
                { label: 'f', title: 'Facebook' },
                { label: '𝕏', title: 'Twitter / X' },
              ].map(s => (
                <a
                  key={s.title}
                  href="#"
                  title={s.title}
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-purple-500 hover:text-purple-400 transition-all duration-200 text-sm"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map(link => (
              <a key={link} href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
