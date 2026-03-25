import { LucideIcons } from '../../../utils/lucideIcons'

const industries = [
  {
    name: 'Healthcare',
    icon: LucideIcons.hospital,
    blurb: 'Patient-centric diagnostics',
    glow: 'from-emerald-100/0 via-emerald-200/50 to-teal-100/0',
    iconBg: 'from-emerald-100 to-teal-100',
    iconRing: 'ring-emerald-300',
    borderHover: 'hover:border-emerald-400',
    titleHover: 'group-hover:text-emerald-700',
    cta: 'text-emerald-600',
  },
  {
    name: 'Pharma',
    icon: LucideIcons.pill,
    blurb: 'Safer, faster drug quality',
    glow: 'from-teal-100/0 via-teal-200/50 to-cyan-100/0',
    iconBg: 'from-teal-100 to-cyan-100',
    iconRing: 'ring-teal-300',
    borderHover: 'hover:border-teal-400',
    titleHover: 'group-hover:text-teal-700',
    cta: 'text-teal-600',
  },
  {
    name: 'Biotech',
    icon: LucideIcons.dna,
    blurb: 'Precision for complex assays',
    glow: 'from-emerald-100/0 via-emerald-200/50 to-green-100/0',
    iconBg: 'from-emerald-100 to-green-100',
    iconRing: 'ring-emerald-300',
    borderHover: 'hover:border-emerald-400',
    titleHover: 'group-hover:text-emerald-700',
    cta: 'text-emerald-600',
  },
  {
    name: 'Public Health',
    icon: LucideIcons.globe,
    blurb: 'Population-level intelligence',
    glow: 'from-cyan-100/0 via-cyan-200/50 to-blue-100/0',
    iconBg: 'from-cyan-100 to-blue-100',
    iconRing: 'ring-cyan-300',
    borderHover: 'hover:border-cyan-400',
    titleHover: 'group-hover:text-cyan-700',
    cta: 'text-cyan-600',
  },
  {
    name: 'Research',
    icon: LucideIcons.microscope,
    blurb: 'Confident data exploration',
    glow: 'from-amber-100/0 via-amber-200/50 to-orange-100/0',
    iconBg: 'from-amber-100 to-orange-100',
    iconRing: 'ring-amber-300',
    borderHover: 'hover:border-amber-400',
    titleHover: 'group-hover:text-amber-700',
    cta: 'text-amber-600',
  },
  {
    name: 'Food & Beverage',
    icon: LucideIcons.flask,
    blurb: 'Quality from batch to shelf',
    glow: 'from-rose-100/0 via-rose-200/50 to-pink-100/0',
    iconBg: 'from-rose-100 to-pink-100',
    iconRing: 'ring-rose-300',
    borderHover: 'hover:border-rose-400',
    titleHover: 'group-hover:text-rose-700',
    cta: 'text-rose-600',
  },
  {
    name: 'Environment',
    icon: LucideIcons.leaf,
    blurb: 'Sustainable monitoring at scale',
    glow: 'from-green-100/0 via-green-200/50 to-emerald-100/0',
    iconBg: 'from-green-100 to-emerald-100',
    iconRing: 'ring-green-300',
    borderHover: 'hover:border-green-400',
    titleHover: 'group-hover:text-green-700',
    cta: 'text-green-600',
  },
  {
    name: 'Water',
    icon: LucideIcons.droplet,
    blurb: 'Reliable purity and compliance',
    glow: 'from-teal-100/0 via-teal-200/50 to-green-100/0',
    iconBg: 'from-teal-100 to-green-100',
    iconRing: 'ring-teal-300',
    borderHover: 'hover:border-teal-400',
    titleHover: 'group-hover:text-teal-700',
    cta: 'text-teal-600',
  },
  {
    name: 'Contract Services',
    icon: LucideIcons.handshake,
    blurb: 'Operational excellence with AI',
    glow: 'from-slate-100/0 via-slate-200/50 to-zinc-100/0',
    iconBg: 'from-slate-100 to-zinc-100',
    iconRing: 'ring-slate-300',
    borderHover: 'hover:border-slate-400',
    titleHover: 'group-hover:text-slate-700',
    cta: 'text-slate-600',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 px-3 sm:px-4 py-1.5 text-emerald-700 text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-5">
            Industry Expertise
          </span>
          <div className="mx-auto mb-5 sm:mb-6 max-w-fit rounded-xl sm:rounded-2xl border border-emerald-200 bg-linear-to-r from-emerald-50 via-white to-teal-50 px-5 sm:px-7 py-3 sm:py-4 shadow-sm shadow-emerald-100/50">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Serving 9 Industries
            </h2>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Our AI solutions are purpose-built for expert customers operating across 22 specialist disciplines and 9 key industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {industries.map((ind, i) => (
            <a
              key={i}
              href="#"
              className={`group relative isolate overflow-hidden flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-2xl border border-slate-200 bg-white ${ind.borderHover} hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-100 transition-all duration-300`}
            >
              <span className={`pointer-events-none absolute inset-x-0 -top-10 h-16 bg-linear-to-r ${ind.glow} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100`} />
              <span className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg sm:rounded-2xl bg-linear-to-br ${ind.iconBg} ring-1 ${ind.iconRing} text-emerald-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                <div className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'currentColor' }}>
                  {ind.icon}
                </div>
              </span>
              <span className={`text-slate-700 font-semibold text-xs sm:text-sm md:text-[15px] text-center leading-tight transition-colors ${ind.titleHover}`}>
                {ind.name}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 text-center leading-relaxed min-h-7 sm:min-h-8">
                {ind.blurb}
              </span>
              <span className={`text-xs font-semibold opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ${ind.cta}`}>
                Find out more →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
