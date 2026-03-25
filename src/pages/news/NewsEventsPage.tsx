const latestUpdates = [
  {
    id: 'release-q1',
    category: 'Product Release',
    date: '12 Mar 2026',
    title: 'Release 4.2 introduces configurable quality-control alerts',
    summary:
      'Labs can now define escalation rules for instrument drift and critical deviations with shift-level visibility.',
  },
  {
    id: 'case-study-network-labs',
    category: 'Case Study',
    date: '27 Feb 2026',
    title: 'Regional diagnostics network reduced repeat validations by 31%',
    summary:
      'Standardized workflows and decision support reduced manual review loops across five locations.',
  },
  {
    id: 'webinar-operating-model',
    category: 'Webinar',
    date: '18 Feb 2026',
    title: 'Designing a scalable operating model for multi-site lab systems',
    summary:
      'A practical session on governance, metric baselines, and phased rollouts in regulated environments.',
  },
] as const

const updateChannels = [
  ['all-updates', 'All Updates', 'Product milestones, feature releases, partnerships, and announcements.'],
  ['case-studies', 'Case Studies', 'Deployment stories with measurable pre-vs-post operational impact.'],
  ['events-webinars', 'Events and Webinars', 'Live sessions, demos, and conference participation updates.'],
  ['research-insights', 'Research Insights', 'Trends and evidence-based perspectives in diagnostics informatics.'],
] as const

export default function NewsEventsPage() {
  return (
    <main className="bg-slate-50 text-slate-900 pt-24 sm:pt-28 lg:pt-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <p className="text-emerald-700 text-xs font-semibold uppercase tracking-[0.2em] mb-4">News and Events</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-4xl">
          Product updates, customer stories, and upcoming sessions
        </h1>
        <p className="mt-5 text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
          This section is dedicated to what is new at ForMedrix AI, including release notes, field learnings,
          and public events. It is separate from solution and technology documentation.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Latest Highlights</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {latestUpdates.map((item) => (
            <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">{item.category}</p>
              <p className="mt-1 text-xs text-slate-500">{item.date}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 grid grid-cols-1 md:grid-cols-2 gap-5">
        {updateChannels.map(([id, title, text]) => (
          <article id={id} key={id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">{text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
