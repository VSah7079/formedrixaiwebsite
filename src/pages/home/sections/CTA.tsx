export default function CTA() {
  return (
    <section id="careers" className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #5eead4 100%)',
        }}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '3rem 3rem',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block text-white text-xs font-semibold uppercase tracking-widest mb-4">
          Join Our Team
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 sm:mb-6">
          Help Shape the Future of Healthcare
        </h2>
        <p className="text-white text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Be part of a global team shaping the future of healthcare with AI. We're seeking engineers, data scientists, and healthcare professionals passionate about making a real-world impact.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button className="w-full sm:w-auto bg-white text-emerald-700 font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm">
            View Vacancies
          </button>
          <button className="w-full sm:w-auto border-2 border-white/60 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-white/10 hover:border-white transition-all duration-200 text-sm">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
