const industrySegments = [
  {
    id: 'healthcare',
    title: 'Healthcare and Diagnostics',
    challenge: 'High sample load, strict turnaround targets, and multi-location quality control.',
    workflows: ['Order-to-result orchestration', 'Critical value alerts', 'Department-level dashboarding'],
    outcomes: 'Lower report delays and better clinician confidence in time-sensitive cases.',
  },
  {
    id: 'contract-services',
    title: 'Contract Testing Services',
    challenge: 'Client SLA commitments with variable sample volumes and reporting templates.',
    workflows: ['Client-specific routing rules', 'Automated SLA clock tracking', 'Branded report distribution'],
    outcomes: 'Improved on-time delivery rates and clearer service visibility for enterprise customers.',
  },
  {
    id: 'food-beverage',
    title: 'Food and Beverage Quality Labs',
    challenge: 'Need traceable test evidence across production lots and supplier chains.',
    workflows: ['Batch-level test mapping', 'Deviation monitoring', 'Certificate generation workflows'],
    outcomes: 'Faster compliance reporting with fewer manual reconciliation cycles.',
  },
  {
    id: 'environment-water',
    title: 'Environment and Water Testing',
    challenge: 'Field collection variability and strict regulatory cutoffs for contaminants.',
    workflows: ['Chain-of-custody digitization', 'Geo-tagged sample ingestion', 'Exception-based validation'],
    outcomes: 'More reliable audits and quicker escalation on out-of-threshold readings.',
  },
  {
    id: 'public-health',
    title: 'Public Health Programs',
    challenge: 'Population-scale surveillance with coordinated reporting to state and central bodies.',
    workflows: ['Program-based sample cohorting', 'Automated surveillance summaries', 'Multi-agency reporting pipelines'],
    outcomes: 'Better outbreak response readiness and faster policy-level decision support.',
  },
  {
    id: 'pharma-biotech',
    title: 'Pharma and Biotech R&D',
    challenge: 'Validation-heavy environments that require reproducibility and complete audit trails.',
    workflows: ['Method version governance', 'Protocol-linked data capture', 'Study milestone analytics'],
    outcomes: 'Higher data integrity and reduced cycle time from testing to release decisions.',
  },
] as const

export default function IndustriesPage() {
  return (
    <main className="bg-white text-slate-900 pt-24 sm:pt-28 lg:pt-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <p className="text-emerald-600 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Industries</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-4xl">
          Purpose-built laboratory workflows for each domain
        </h1>
        <p className="mt-5 text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
          Every industry has a different testing model, risk profile, and compliance expectation. ForMedrix AI
          configures operational logic by domain so teams do not force-fit one generic process everywhere.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {industrySegments.map((segment) => (
          <article id={segment.id} key={segment.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{segment.title}</h2>

            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Primary Challenge</p>
              <p className="mt-1 text-slate-700 text-sm sm:text-base leading-relaxed">{segment.challenge}</p>
            </div>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Core Workflows</p>
              <ul className="mt-2 space-y-2">
                {segment.workflows.map((item) => (
                  <li key={item} className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Operational Outcome</p>
              <p className="mt-1 text-sm sm:text-base text-slate-800 leading-relaxed">{segment.outcomes}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
