const impacts = [
  {
    emoji: '🏥',
    title: 'Improving Healthcare',
    desc: 'We help laboratories improve preventative, diagnostic and therapeutic health services using AI-driven data to advance critical decision-making and deliver better patient health outcomes.',
    borderColor: 'border-emerald-300',
    gradFrom: 'rgba(16,185,129,0.08)',
    gradTo: 'rgba(248,250,252,0)',
  },
  {
    emoji: '🔬',
    title: 'Advancing Life Sciences',
    desc: 'We equip research scientists with AI-powered insights that accelerate their understanding of advancements in natural sciences, genomics, and next-generation medical research.',
    borderColor: 'border-teal-300',
    gradFrom: 'rgba(20,184,166,0.08)',
    gradTo: 'rgba(248,250,252,0)',
  },
  {
    emoji: '🌍',
    title: 'Protecting Public Health',
    desc: 'We support always-on disease surveillance with modern AI tools enabling intelligent contact tracing, outbreak detection, and case management at population scale.',
    borderColor: 'border-cyan-300',
    gradFrom: 'rgba(34,197,94,0.08)',
    gradTo: 'rgba(248,250,252,0)',
  },
]

export default function Impact() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            Making an Impact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-5">
            Healthcare. Science. Society.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            ForMedrix AI has the opportunity to improve every person's wellbeing by connecting critical laboratory data from diverse sources across many industries.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {impacts.map((item, i) => (
            <div
              key={i}
              className={`border ${item.borderColor} rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:scale-105 transition-transform duration-300`}
              style={{
                background: `linear-gradient(to bottom, ${item.gradFrom}, ${item.gradTo})`,
              }}
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{item.emoji}</div>
              <h3 className="text-slate-900 font-bold text-lg sm:text-xl mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
