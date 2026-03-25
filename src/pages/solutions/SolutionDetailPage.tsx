import { Link, useParams } from 'react-router-dom'
import { solutionCatalog } from './solutionCatalog'

interface SolutionDetailPageProps {
  forcedSlug?: string
}

interface DeepContent {
  useCases: string[]
  architecture: string[]
  implementationTimeline: string[]
  industryCases: Array<{ industry: string; scenario: string; impact: string }>
  faqs: Array<{ q: string; a: string }>
}

interface SolutionNarrative {
  clinicalContext: string
  primaryUsers: string[]
  successMetrics: string[]
  deploymentScope: string
}

const solutionDeepContent: Record<string, DeepContent> = {
  'formedrix-lims': {
    useCases: ['Central accessioning for multi-site labs', 'Unified sample and report tracking', 'Audit-ready workflow orchestration'],
    architecture: ['Cloud-native LIMS core', 'Instrument adapter layer', 'Rules and approvals engine', 'Regulatory event logging'],
    implementationTimeline: ['Week 1-2: workflow mapping', 'Week 3-4: data model and templates', 'Week 5-6: pilot validation', 'Week 7-8: production rollout'],
    industryCases: [
      {
        industry: 'Reference Labs',
        scenario: 'Unifying fragmented sample workflows across three cities.',
        impact: 'Reduced manual handoffs and improved report consistency between sites.',
      },
      {
        industry: 'Hospital Networks',
        scenario: 'Standardizing accessioning and release approvals across departments.',
        impact: 'Improved traceability and faster release cycles for critical results.',
      },
    ],
    faqs: [
      { q: 'Can it replace legacy LIS workflows?', a: 'Yes, phased coexistence is supported with migration checkpoints and dual-run validation.' },
      { q: 'Does it support role-based approvals?', a: 'Yes, configurable role policies and sign-off chains are built in.' },
    ],
  },
  'predictive-analytics': {
    useCases: ['Volume forecasting', 'TAT breach prediction', 'Workload balancing across teams'],
    architecture: ['Feature engineering pipeline', 'Model scoring service', 'Alerting and threshold service', 'Operations dashboard layer'],
    implementationTimeline: ['Week 1: baseline KPI setup', 'Week 2-3: data ingestion', 'Week 4-5: model calibration', 'Week 6: alert rollout'],
    industryCases: [
      {
        industry: 'Large Diagnostic Chains',
        scenario: 'Predicting peak-day sample loads before weekend backlog.',
        impact: 'Better staffing alignment and reduced turnaround time breaches.',
      },
      {
        industry: 'Specialty Labs',
        scenario: 'Forecasting reagent utilization based on test demand patterns.',
        impact: 'Lower stockout risk and improved procurement planning accuracy.',
      },
    ],
    faqs: [
      { q: 'How often are forecasts updated?', a: 'Forecast windows are configurable hourly, daily, or weekly by department.' },
      { q: 'Can thresholds be tuned by lab?', a: 'Yes, every site can set independent thresholds and escalation levels.' },
    ],
  },
  'real-time-diagnostics': {
    useCases: ['Priority triage queues', 'Critical case fast-lane', 'Exception-first diagnostic review'],
    architecture: ['Event stream ingestion', 'Real-time scoring service', 'Case prioritization engine', 'Clinician review console'],
    implementationTimeline: ['Week 1: event design', 'Week 2-3: stream integration', 'Week 4: triage logic QA', 'Week 5-6: live enablement'],
    industryCases: [
      {
        industry: 'Emergency Pathology',
        scenario: 'Rapid prioritization for time-sensitive pathology samples.',
        impact: 'Faster case escalation and quicker consultant review turnaround.',
      },
      {
        industry: 'Molecular Diagnostics',
        scenario: 'Real-time alerting on critical run anomalies.',
        impact: 'Reduced risk of delayed interventions and repeat testing.',
      },
    ],
    faqs: [
      { q: 'Does this replace pathologist decisions?', a: 'No, it supports prioritization and interpretation, final decisions remain clinician-led.' },
      { q: 'Is latency configurable?', a: 'Yes, update cadence can be tuned by workflow criticality.' },
    ],
  },
  'disease-surveillance': {
    useCases: ['Outbreak monitoring', 'Regional trend analysis', 'Policy-triggered escalation'],
    architecture: ['Lab network connectors', 'Signal normalization engine', 'Epidemiology analytics layer', 'Alert routing service'],
    implementationTimeline: ['Week 1-2: source onboarding', 'Week 3: signal normalization', 'Week 4-5: threshold configuration', 'Week 6: reporting activation'],
    industryCases: [
      {
        industry: 'Public Health Programs',
        scenario: 'Monitoring regional spikes across respiratory test panels.',
        impact: 'Earlier response planning and targeted intervention deployment.',
      },
      {
        industry: 'Government Networks',
        scenario: 'Combining multi-lab data for weekly outbreak intelligence.',
        impact: 'Improved situational awareness and faster policy decisions.',
      },
    ],
    faqs: [
      { q: 'Can data be segmented by region?', a: 'Yes, by region, site, cohort, and time-window dimensions.' },
      { q: 'Are outbreak alerts automated?', a: 'Yes, rules can trigger email, dashboard, and workflow escalations.' },
    ],
  },
  'quality-intelligence': {
    useCases: ['QC drift detection', 'CAPA tracking', 'Nonconformance monitoring'],
    architecture: ['Quality rules engine', 'Control chart analytics', 'Exception triage board', 'Compliance evidence store'],
    implementationTimeline: ['Week 1: quality baseline', 'Week 2: rule setup', 'Week 3-4: exception workflows', 'Week 5: compliance reporting'],
    industryCases: [
      {
        industry: 'Accredited Clinical Labs',
        scenario: 'Detecting QC drift before batch release.',
        impact: 'Lower rework rates and improved quality confidence.',
      },
      {
        industry: 'Food and Environmental Labs',
        scenario: 'Automating nonconformance detection during peak season.',
        impact: 'Faster CAPA execution and stronger inspection readiness.',
      },
    ],
    faqs: [
      { q: 'Can CAPA lifecycle be tracked?', a: 'Yes, issue creation through closure with accountability and timestamps.' },
      { q: 'Does it support audit exports?', a: 'Yes, filtered audit packets are exportable by period and category.' },
    ],
  },
  'data-integration-hub': {
    useCases: ['HL7/FHIR exchange', 'Cross-system order sync', 'Partner data interoperability'],
    architecture: ['Connector framework', 'Transformation mapping service', 'Message queue and retries', 'Observability and tracing'],
    implementationTimeline: ['Week 1: interface inventory', 'Week 2-3: connector setup', 'Week 4: validation testing', 'Week 5-6: cutover'],
    industryCases: [
      {
        industry: 'Hospital Ecosystems',
        scenario: 'Connecting LIS, EHR, and billing systems with standardized mappings.',
        impact: 'Reduced reconciliation effort and fewer data exchange failures.',
      },
      {
        industry: 'Partner Networks',
        scenario: 'Integrating third-party testing partners via API and HL7 channels.',
        impact: 'Consistent order-result exchange and lower support escalations.',
      },
    ],
    faqs: [
      { q: 'Are legacy systems supported?', a: 'Yes, adapter-based connectivity supports modern and legacy protocols.' },
      { q: 'How are failures monitored?', a: 'Real-time observability tracks retries, failures, and payload lineage.' },
    ],
  },
  'compliance-automation': {
    useCases: ['Regulatory evidence collection', 'Policy conformance checks', 'Inspection readiness dashboards'],
    architecture: ['Policy engine', 'Immutable event ledger', 'Evidence vault', 'Compliance reporting service'],
    implementationTimeline: ['Week 1: control catalog', 'Week 2: policy mapping', 'Week 3-4: evidence automation', 'Week 5: audit dry-run'],
    industryCases: [
      {
        industry: 'Regulated Clinical Labs',
        scenario: 'Automating evidence collection for accreditation renewals.',
        impact: 'Shorter audit prep cycles and fewer missing-document findings.',
      },
      {
        industry: 'Enterprise Healthcare Groups',
        scenario: 'Applying shared policy controls across multiple entities.',
        impact: 'Better governance consistency and reduced compliance overhead.',
      },
    ],
    faqs: [
      { q: 'Can controls be versioned?', a: 'Yes, policies and controls can be versioned with effective dates.' },
      { q: 'Is role-based segregation available?', a: 'Yes, SoD and approval boundaries are configurable.' },
    ],
  },
  'clinical-decision-support': {
    useCases: ['Guideline-driven recommendations', 'Complex case decision support', 'Second-level review acceleration'],
    architecture: ['Clinical rules and knowledge base', 'Case context engine', 'Recommendation scoring', 'Review workflow integration'],
    implementationTimeline: ['Week 1: guideline mapping', 'Week 2-3: rule validation', 'Week 4: clinician feedback loop', 'Week 5: controlled go-live'],
    industryCases: [
      {
        industry: 'Pathology Teams',
        scenario: 'Second-level review support for complex differential diagnosis.',
        impact: 'More consistent interpretation and faster review closure.',
      },
      {
        industry: 'Specialty Care Units',
        scenario: 'Guideline-aware recommendation support for high-risk cohorts.',
        impact: 'Improved decision confidence and stronger care-pathway adherence.',
      },
    ],
    faqs: [
      { q: 'Can local guidelines be configured?', a: 'Yes, institutions can map internal protocols to recommendation logic.' },
      { q: 'Is recommendation transparency available?', a: 'Yes, each recommendation includes explainability context.' },
    ],
  },
  'patient-portal': {
    useCases: ['Patient report access', 'Status notifications', 'Digital engagement workflows'],
    architecture: ['Patient identity gateway', 'Secure report delivery', 'Notification orchestration', 'Consent management layer'],
    implementationTimeline: ['Week 1: UX and policy setup', 'Week 2-3: identity integration', 'Week 4: report access testing', 'Week 5: launch'],
    industryCases: [
      {
        industry: 'Hospital OPD Networks',
        scenario: 'Publishing verified reports directly to patients with notifications.',
        impact: 'Lower call-center burden and improved patient satisfaction.',
      },
      {
        industry: 'Diagnostic Chains',
        scenario: 'Providing cross-location report history access.',
        impact: 'Higher retention and smoother patient communication.',
      },
    ],
    faqs: [
      { q: 'Is multilingual support possible?', a: 'Yes, language packs can be configured for patient-facing UI.' },
      { q: 'Can notifications be channel-specific?', a: 'Yes, email, SMS, and in-app channel preferences are supported.' },
    ],
  },
  'telemedicine-integration': {
    useCases: ['Virtual consult preparation', 'Referral handoffs', 'Cross-provider collaboration'],
    architecture: ['Consultation connector APIs', 'Structured report sync', 'Referral workflow service', 'Communication audit log'],
    implementationTimeline: ['Week 1: partner mapping', 'Week 2: API integration', 'Week 3-4: referral testing', 'Week 5: operational launch'],
    industryCases: [
      {
        industry: 'Virtual Care Providers',
        scenario: 'Auto-attaching diagnostic context before teleconsultation.',
        impact: 'Faster consult readiness and better first-call resolution.',
      },
      {
        industry: 'Distributed Specialist Networks',
        scenario: 'Routing referrals with structured diagnostics payloads.',
        impact: 'Reduced referral delays and improved continuity of care.',
      },
    ],
    faqs: [
      { q: 'Can this work with multiple telehealth providers?', a: 'Yes, connector-based integrations support multi-provider environments.' },
      { q: 'Are referrals tracked end-to-end?', a: 'Yes, referral states and handoff timestamps are fully traceable.' },
    ],
  },
  'api-suite': {
    useCases: ['Custom portal development', 'Event-driven automations', 'Third-party healthcare integration'],
    architecture: ['REST and GraphQL gateway', 'Webhook event bus', 'Auth and token policy layer', 'Developer sandbox'],
    implementationTimeline: ['Week 1: API scope definition', 'Week 2: auth policy setup', 'Week 3-4: consumer integration', 'Week 5: production certification'],
    industryCases: [
      {
        industry: 'Health-tech Product Teams',
        scenario: 'Building custom clinician dashboards with unified diagnostics APIs.',
        impact: 'Faster product iteration and reduced integration dependency.',
      },
      {
        industry: 'Partner Platforms',
        scenario: 'Streaming event updates for real-time order lifecycle tracking.',
        impact: 'Improved partner experience and lower manual coordination effort.',
      },
    ],
    faqs: [
      { q: 'Is versioning supported?', a: 'Yes, APIs are versioned for stable long-term integrations.' },
      { q: 'Can rate limits be customized?', a: 'Yes, limits can be configured per client and environment.' },
    ],
  },
  'mobile-diagnostics-app': {
    useCases: ['Field sample collection', 'On-the-go status updates', 'Remote escalation workflows'],
    architecture: ['Offline-first mobile client', 'Secure sync service', 'Media capture module', 'Role-based access controls'],
    implementationTimeline: ['Week 1: mobile workflow design', 'Week 2-3: pilot devices onboarding', 'Week 4: sync and security tests', 'Week 5: field deployment'],
    industryCases: [
      {
        industry: 'Field Collection Teams',
        scenario: 'Capturing sample metadata in low-connectivity environments.',
        impact: 'Higher first-time data completeness and fewer recollection cycles.',
      },
      {
        industry: 'Decentralized Lab Models',
        scenario: 'Tracking sample transit and escalation from remote sites.',
        impact: 'Better visibility and faster coordination between teams.',
      },
    ],
    faqs: [
      { q: 'Does it work with intermittent connectivity?', a: 'Yes, offline capture and deferred sync are supported.' },
      { q: 'Can field metadata be enforced?', a: 'Yes, mandatory metadata rules can be configured per workflow.' },
    ],
  },
}

const solutionNarratives: Record<string, SolutionNarrative> = {
  'formedrix-lims': {
    clinicalContext: 'Labs replacing fragmented manual tracking with one governed, end-to-end operating system.',
    primaryUsers: ['Lab operations manager', 'Section heads', 'Quality managers'],
    successMetrics: ['Sample accession errors reduced', 'TAT consistency improved', 'Audit trace completeness above target'],
    deploymentScope: 'Best suited for multi-site deployments where central governance and local execution both matter.',
  },
  'predictive-analytics': {
    clinicalContext: 'High-volume labs needing advance workload visibility instead of reactive firefighting.',
    primaryUsers: ['Lab director', 'Shift planner', 'Procurement coordinator'],
    successMetrics: ['Forecast variance reduced', 'Backlog events prevented', 'Consumable stockout incidents lowered'],
    deploymentScope: 'Runs as a decision layer above existing LIMS and planning workflows.',
  },
  'real-time-diagnostics': {
    clinicalContext: 'Critical-care testing environments where minutes can materially impact intervention decisions.',
    primaryUsers: ['Pathologists', 'Emergency lab teams', 'Duty supervisors'],
    successMetrics: ['Critical case triage time reduced', 'Alert-to-review time improved', 'Priority queue SLA adherence increased'],
    deploymentScope: 'Effective in centralized and hub-and-spoke diagnostic networks with urgent workflows.',
  },
  'disease-surveillance': {
    clinicalContext: 'Public health and program offices consolidating distributed lab signals for early risk detection.',
    primaryUsers: ['Epidemiology unit', 'Program managers', 'Public health analysts'],
    successMetrics: ['Outbreak detection lead-time improved', 'Regional reporting latency reduced', 'Signal-to-action conversion increased'],
    deploymentScope: 'Designed for district, state, or national surveillance programs with layered reporting obligations.',
  },
  'quality-intelligence': {
    clinicalContext: 'Quality teams moving from periodic review to continuous risk monitoring and preventive control.',
    primaryUsers: ['QA/QC lead', 'Compliance officer', 'Lab quality analyst'],
    successMetrics: ['Repeat nonconformance reduced', 'CAPA closure cycle shortened', 'QC drift incidents detected earlier'],
    deploymentScope: 'Can be rolled out lab-by-lab and then standardized as an enterprise QA governance layer.',
  },
  'data-integration-hub': {
    clinicalContext: 'Organizations struggling with disconnected order, result, and patient context across systems.',
    primaryUsers: ['Integration architect', 'Health IT manager', 'Interoperability team'],
    successMetrics: ['Message failure rates reduced', 'Reconciliation effort lowered', 'Partner onboarding time shortened'],
    deploymentScope: 'Fits modernization programs where legacy and modern systems must coexist safely.',
  },
  'compliance-automation': {
    clinicalContext: 'Regulated labs needing always-ready evidence rather than manual audit preparation cycles.',
    primaryUsers: ['Regulatory affairs lead', 'Internal auditor', 'Risk and governance team'],
    successMetrics: ['Audit prep hours reduced', 'Control exceptions resolved faster', 'Evidence completeness improved'],
    deploymentScope: 'Scales well in enterprise groups requiring common controls across multiple entities.',
  },
  'clinical-decision-support': {
    clinicalContext: 'Clinical review boards requiring consistent interpretation support for complex diagnostic patterns.',
    primaryUsers: ['Consultant pathologist', 'Clinical review committee', 'Specialty care teams'],
    successMetrics: ['Interpretation variance reduced', 'Second-review turnaround improved', 'Protocol adherence strengthened'],
    deploymentScope: 'Ideal for specialist centers where guideline alignment and explainability are essential.',
  },
  'patient-portal': {
    clinicalContext: 'Patient-facing operations that need trustworthy, secure, and understandable result communication.',
    primaryUsers: ['Patient relations team', 'Digital front desk', 'Support coordinators'],
    successMetrics: ['Inbound status calls reduced', 'Report delivery success improved', 'Patient satisfaction scores increased'],
    deploymentScope: 'Deploy as a standalone engagement surface or integrated with existing hospital portals.',
  },
  'telemedicine-integration': {
    clinicalContext: 'Virtual care pathways where diagnostics context must reach clinicians before consultation starts.',
    primaryUsers: ['Telehealth coordinator', 'Referral desk', 'Consulting physicians'],
    successMetrics: ['First-consult resolution improved', 'Referral handoff delays reduced', 'Consult prep completeness increased'],
    deploymentScope: 'Useful for networks coordinating across remote clinics, specialists, and partner providers.',
  },
  'api-suite': {
    clinicalContext: 'Product teams that need secure, extensible building blocks instead of hard-coded integrations.',
    primaryUsers: ['Platform engineers', 'Partner developers', 'Digital product teams'],
    successMetrics: ['Integration release cycles accelerated', 'API adoption growth', 'Partner onboarding time reduced'],
    deploymentScope: 'Works as a foundational integration product for ecosystems with multiple consuming apps.',
  },
  'mobile-diagnostics-app': {
    clinicalContext: 'Field and satellite teams operating beyond fixed desktop environments and stable connectivity.',
    primaryUsers: ['Phlebotomy field staff', 'Mobile collection teams', 'Regional supervisors'],
    successMetrics: ['Field data completeness improved', 'Sample handoff visibility increased', 'Escalation response time reduced'],
    deploymentScope: 'Best for decentralized programs requiring offline capture and secure synchronization.',
  },
}

export default function SolutionDetailPage({ forcedSlug }: SolutionDetailPageProps) {
  const { solutionSlug } = useParams()
  const activeSlug = forcedSlug ?? solutionSlug
  const solution = solutionCatalog.find((item) => item.slug === activeSlug)

  if (!solution) {
    return (
      <main className="bg-slate-950 text-white pt-24 sm:pt-28 lg:pt-32 min-h-[70vh]">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-cyan-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Solution</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Solution not found</h1>
          <p className="mt-4 text-slate-300">This solution page is unavailable.</p>
          <Link
            to="/#solutions"
            className="inline-block mt-8 px-5 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold"
          >
            Back to Solutions
          </Link>
        </section>
      </main>
    )
  }

  const relatedSolutions = solutionCatalog
    .filter((item) => item.slug !== solution.slug)
    .slice(0, 3)

  const deepContent = solutionDeepContent[solution.slug]
  const narrative = solutionNarratives[solution.slug]

  return (
    <main className="bg-slate-950 text-white pt-24 sm:pt-28 lg:pt-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <Link to="/#solutions" className="text-cyan-300 hover:text-cyan-200 text-sm font-semibold">
          {'<- Back to all solutions'}
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-[11px] tracking-wide uppercase text-cyan-200">
            {solution.tag}
          </span>
          <span className="inline-flex rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[11px] tracking-wide uppercase text-slate-300">
            Enterprise Ready
          </span>
        </div>

        <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-5xl">{solution.title}</h1>
        <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-4xl leading-relaxed">{solution.summary}</p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-6">
          <article className="rounded-2xl border border-slate-800 bg-linear-to-br from-slate-900 to-slate-950 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-cyan-200">Detailed Overview</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">{solution.details}</p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              This module is designed for {solution.audience.toLowerCase()} and can be deployed as a standalone capability
              or integrated into a broader informatics program across multi-site laboratories.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-cyan-100">Operational Context</h3>
            <p className="mt-3 text-slate-300 leading-relaxed">{narrative.clinicalContext}</p>

            <h3 className="mt-8 text-lg font-semibold text-cyan-100">Primary Users</h3>
            <ul className="mt-4 grid sm:grid-cols-3 gap-3">
              {narrative.primaryUsers.map((user) => (
                <li key={user} className="rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-200">
                  {user}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-semibold text-cyan-100">Program Success Metrics</h3>
            <ul className="mt-4 space-y-2">
              {narrative.successMetrics.map((metric) => (
                <li key={metric} className="text-slate-300">• {metric}</li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-semibold text-cyan-100">Recommended Deployment Scope</h3>
            <p className="mt-3 text-slate-300 leading-relaxed">{narrative.deploymentScope}</p>

            <h3 className="mt-8 text-lg font-semibold text-cyan-100">Core Capabilities</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {solution.capabilities.map((capability) => (
                <li key={capability} className="rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-200">
                  {capability}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-semibold text-cyan-100">Operational Workflows</h3>
            <ul className="mt-4 space-y-2">
              {solution.workflows.map((workflow) => (
                <li key={workflow} className="text-slate-300">• {workflow}</li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-semibold text-cyan-100">Business Outcomes</h3>
            <ul className="mt-4 space-y-2">
              {solution.outcomes.map((outcome) => (
                <li key={outcome} className="text-slate-300">• {outcome}</li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-semibold text-cyan-100">High-Impact Use Cases</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {deepContent.useCases.map((useCase) => (
                <li key={useCase} className="rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-200">
                  {useCase}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-semibold text-cyan-100">Architecture Components</h3>
            <ul className="mt-4 space-y-2">
              {deepContent.architecture.map((component) => (
                <li key={component} className="text-slate-300">• {component}</li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-semibold text-cyan-100">Implementation Timeline</h3>
            <div className="mt-4 space-y-3">
              {deepContent.implementationTimeline.map((phase) => (
                <div key={phase} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-cyan-300 shrink-0" />
                  <p className="text-slate-300">{phase}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-lg font-semibold text-cyan-100">Industry Case Snapshots</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {deepContent.industryCases.map((entry) => (
                <article key={entry.industry} className="rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3">
                  <p className="text-cyan-200 text-sm font-semibold">{entry.industry}</p>
                  <p className="text-slate-300 text-sm mt-1">{entry.scenario}</p>
                  <p className="text-emerald-300 text-sm mt-2">Impact: {entry.impact}</p>
                </article>
              ))}
            </div>

            <h3 className="mt-8 text-lg font-semibold text-cyan-100">Frequently Asked Questions</h3>
            <div className="mt-4 space-y-3">
              {deepContent.faqs.map((faq) => (
                <details key={faq.q} className="rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3">
                  <summary className="text-cyan-200 text-sm font-semibold cursor-pointer">{faq.q}</summary>
                  <p className="text-slate-300 text-sm mt-2">{faq.a}</p>
                </details>
              ))}
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="text-lg font-semibold text-cyan-100">Recommended For</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{solution.audience}</p>
              <Link
                to="/contact"
                className="inline-block mt-6 w-full text-center px-5 py-3 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 text-slate-950 font-semibold"
              >
                Request Demo
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="text-lg font-semibold text-cyan-100">Implementation Snapshot</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>1. Workflow discovery and baseline mapping</li>
                <li>2. Data model and integration design</li>
                <li>3. Controlled pilot and validation</li>
                <li>4. Multi-site rollout with governance</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <h2 className="text-2xl font-bold text-cyan-100">Related Solutions</h2>
        <div className="mt-5 grid md:grid-cols-3 gap-4">
          {relatedSolutions.map((item) => (
            <Link
              key={item.slug}
              to={`/solutions/${item.slug}`}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-cyan-400/40 transition-colors"
            >
              <p className="text-cyan-200 font-semibold">{item.title}</p>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
