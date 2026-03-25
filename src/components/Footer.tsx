import { Link } from 'react-router-dom'

const footerSections: Record<string, Array<{ label: string; to: string }>> = {
  Company: [
    { label: 'About', to: '/about' },
    { label: 'History', to: '/about#history' },
    { label: 'Careers', to: '/careers' },
    { label: 'Partners', to: '/about#partners' },
    { label: 'Leadership', to: '/about#leadership' },
    { label: 'Contact', to: '/contact' },
  ],
  Solutions: [
    { label: 'AI-Powered LIMS', to: '/solutions/formedrix-lims' },
    { label: 'Predictive Analytics', to: '/solutions/predictive-analytics' },
    { label: 'Real-Time Diagnostics', to: '/solutions/real-time-diagnostics' },
    { label: 'Disease Surveillance', to: '/solutions/disease-surveillance' },
    { label: 'Cloud Integration', to: '/solutions/data-integration-hub' },
  ],
  Resources: [
    { label: 'Technology', to: '/technology' },
    { label: 'Industries', to: '/industries' },
    { label: 'News and Events', to: '/news-events' },
    { label: 'Contact', to: '/contact' },
    { label: 'Case Studies', to: '/news-events#case-studies' },
  ],
  Explore: [
    { label: 'Healthcare', to: '/industries#healthcare' },
    { label: 'Public Health', to: '/industries#public-health' },
    { label: 'Platform Architecture', to: '/technology#platform-architecture' },
    { label: 'Security and Compliance', to: '/technology#security-compliance' },
    { label: 'Leadership', to: '/about#leadership' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-emerald-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <span className="text-xl font-extrabold tracking-tight">
              <span className="bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
                ForMedrix
              </span>
              <span className="bg-linear-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent ml-1">
                AI
              </span>
            </span>
            <p className="text-slate-600 text-sm mt-4 leading-relaxed max-w-xs">
              AI-powered laboratory informatics for a healthier, smarter world.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/pathscribeai/FormedrixAIWebsite"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-800 text-slate-600 hover:text-white transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-emerald-600 text-slate-600 hover:text-white transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                aria-label="X / Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.763l7.748-8.866L1.25 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-red-100 text-slate-600 hover:text-red-600 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link sections */}
          {Object.entries(footerSections).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-slate-900 font-semibold text-sm mb-5">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-slate-600 hover:text-emerald-600 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2026 ForMedrix AI, Inc. and related entities. All rights reserved worldwide.
          </p>
          <p className="text-slate-500 text-xs">
            Powered by AI. Built for healthcare.
          </p>
        </div>
      </div>
    </footer>
  )
}
