const stats = [
  { value: '500+', label: 'Lab Organizations', desc: 'Trusted worldwide' },
  { value: '98.7%', label: 'AI Accuracy Rate', desc: 'In diagnostics' },
  { value: '1B+', label: 'Tests Analyzed', desc: 'Annually by AI' },
  { value: '40+', label: 'Countries', desc: 'Global presence' },
]

export default function Stats() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-slate-700 font-semibold text-xs sm:text-sm mb-1">{stat.label}</div>
              <div className="text-slate-400 text-xs">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
