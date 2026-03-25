import { useState } from 'react'

const testimonials = [
  {
    quote:
      'ForMedrix AI has dramatically improved our ability to deliver timely, high-quality care through our lab outreach program. The AI-powered diagnostics have transformed our workflow and contributed significantly to better patient outcomes.',
    name: 'Dr. Priya Sharma',
    role: 'Lab Director',
    org: 'Apollo Hospitals, Mumbai',
    initials: 'PS',
  },
  {
    quote:
      'The ForMedrix platform allowed our laboratories to scale quickly, processing over 30,000 samples per day across our global locations. We needed an AI system that would mold to our rapidly changing needs, and ForMedrix delivered exactly that.',
    name: 'Michael Chen',
    role: 'Chief Laboratory Officer',
    org: 'MedTech Global Labs',
    initials: 'MC',
  },
  {
    quote:
      "It's very exciting to see so many projects coming to fruition. We chose ForMedrix AI based on the transformational impact of having a single intelligent system — it has significantly improved patient care and safety across our entire network.",
    name: 'Dr. Arun Patel',
    role: 'Head of Pathology Services',
    org: 'National Health Network, India',
    initials: 'AP',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="bg-slate-50 py-16 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            Customer Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
            Shaping the Laboratory
          </h2>
        </div>

        {/* Card */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-3xl p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
          <div className="text-4xl sm:text-5xl text-emerald-600 font-serif leading-none mb-5 sm:mb-6">"</div>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            {testimonials[current].quote}
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
              {testimonials[current].initials}
            </div>
            <div className="min-w-0">
              <div className="text-slate-900 font-semibold text-sm sm:text-base">{testimonials[current].name}</div>
              <div className="text-slate-600 text-xs sm:text-sm">{testimonials[current].role}</div>
              <div className="text-emerald-600 text-xs sm:text-sm">{testimonials[current].org}</div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 sm:w-8 bg-emerald-600' : 'w-2 sm:w-3 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
