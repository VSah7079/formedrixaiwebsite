export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <p className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-4">About ForMedrix AI</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5 sm:mb-6">
          We Build Intelligent Systems for Modern Laboratories
        </h1>
        <p className="text-slate-600 max-w-3xl text-base sm:text-lg leading-relaxed">
          ForMedrix AI helps laboratories and healthcare organizations modernize operations with
          scalable AI-driven informatics. Our mission is to improve decision-making, accelerate
          diagnostics, and enable better health outcomes through connected lab intelligence.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        <article id="vision" className="rounded-xl sm:rounded-2xl border border-emerald-200 bg-linear-to-br from-emerald-50 to-emerald-100/50 p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold mb-3 text-emerald-900">Vision</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Create a globally connected lab ecosystem where data flows securely and insights are
            instantly actionable.
          </p>
        </article>
        <article id="expertise" className="rounded-xl sm:rounded-2xl border border-teal-200 bg-linear-to-br from-teal-50 to-teal-100/50 p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold mb-3 text-teal-900">Mission</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Deliver dependable AI platforms that increase operational efficiency and clinical
            confidence across every lab workflow.
          </p>
        </article>
        <article id="history" className="rounded-xl sm:rounded-2xl border border-cyan-200 bg-linear-to-br from-cyan-50 to-cyan-100/50 p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold mb-3 text-cyan-900">Values</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Innovation, integrity, patient-first thinking, and measurable impact in healthcare and
            life sciences.
          </p>
        </article>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <article id="leadership" className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">Leadership Team</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Product builders, domain experts, and health-tech operators with deep laboratory and software experience.
          </p>
        </article>
        <article id="partners" className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">Partners and Integrations</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Interoperable integrations across LIS, hospital systems, and analytics ecosystems.
          </p>
        </article>
        <article id="customers" className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">Our Customers</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Trusted by forward-looking organizations that need speed, quality, and governance together.
          </p>
        </article>
      </section>
    </main>
  )
}
