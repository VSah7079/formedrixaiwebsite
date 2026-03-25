export default function CareersPage() {
  const openRoles = [
    {
      title: 'Senior Frontend Engineer',
      details: 'React, performance engineering, design systems, and analytics-driven UX improvements.',
      location: 'Remote (India) | Product Engineering',
    },
    {
      title: 'Clinical Data Specialist',
      details: 'Data modeling, validation logic, and quality frameworks for diagnostics workflows.',
      location: 'Hybrid | Clinical Informatics',
    },
    {
      title: 'Implementation Consultant',
      details: 'Customer onboarding, integration planning, and operational enablement for go-live success.',
      location: 'Onsite + Travel | Customer Success',
    },
  ]

  const hiringStages = [
    'Application review and role fit screening',
    'Technical or domain interview with team lead',
    'Problem-solving round with cross-functional panel',
    'Final discussion and offer alignment',
  ]

  return (
    <main className="bg-slate-950 text-slate-100 pt-24 sm:pt-28 lg:pt-32">
      <section id="careers" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <p className="text-cyan-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Careers</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Build healthcare AI that matters</h1>
        <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
          Join product, engineering, clinical informatics, and customer success teams building digital infrastructure
          for laboratories across the globe.
        </p>

        <div className="mt-10 grid gap-4">
          {openRoles.map((role) => (
            <article key={role.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <h2 className="text-lg font-semibold">{role.title}</h2>
              <p className="text-sm text-slate-300 mt-1">{role.details}</p>
              <p className="text-xs uppercase tracking-widest text-cyan-300 mt-3">{role.location}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="text-lg font-semibold">Hiring Process</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {hiringStages.map((stage) => (
                <li key={stage}>• {stage}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h2 className="text-lg font-semibold">Why Join ForMedrix AI</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Work on real-world healthcare and diagnostics impact</li>
              <li>• Own critical features end-to-end with domain experts</li>
              <li>• Learn across product, engineering, and implementation teams</li>
              <li>• Grow with a fast-moving platform organization</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  )
}
