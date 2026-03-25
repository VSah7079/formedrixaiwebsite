const architectureLayers = [
  {
    id: 'platform-architecture',
    title: 'Platform Architecture',
    description:
      'Service-oriented modules for ingestion, processing, rules, and reporting allow independent scaling by workload.',
    stack: ['API Gateway', 'Workflow Engine', 'Result Service', 'Audit Service'],
  },
  {
    id: 'security-compliance',
    title: 'Security and Compliance',
    description:
      'Role-based access, immutable audit logs, and policy guardrails aligned to healthcare-grade governance requirements.',
    stack: ['RBAC policies', 'Encryption in transit/at rest', 'Audit snapshots', 'Access monitoring'],
  },
  {
    id: 'ai-machine-learning',
    title: 'AI and Machine Learning',
    description:
      'Domain models support anomaly detection, throughput forecasting, and quality risk scoring across lab operations.',
    stack: ['Model registry', 'Feature pipelines', 'Inference orchestration', 'Feedback loops'],
  },
  {
    id: 'integration-framework',
    title: 'Integration Framework',
    description:
      'Adapters for LIS, hospital systems, and instrument data streams with configurable transforms and retries.',
    stack: ['HL7/FHIR connectors', 'Instrument adapters', 'Webhook events', 'Data mapping templates'],
  },
  {
    id: 'deployment-observability',
    title: 'Deployment and Observability',
    description:
      'Environment-aware rollout strategy with central telemetry for latency, errors, and usage behavior.',
    stack: ['Release channels', 'SLO dashboards', 'Incident alerts', 'Usage analytics'],
  },
  {
    id: 'training-support',
    title: 'Training and Support Tooling',
    description:
      'Operational adoption is supported with role-based onboarding kits and guided change management playbooks.',
    stack: ['Admin playbooks', 'Operator guides', 'Sandbox environments', 'Support runbooks'],
  },
] as const

export default function TechnologyPage() {
  return (
    <main className="bg-slate-950 text-slate-100 pt-24 sm:pt-28 lg:pt-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <p className="text-cyan-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Technology</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-4xl">
          Engineering foundation built for high-trust lab operations
        </h1>
        <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
          This page focuses on how the platform is built, secured, integrated, and operated in production
          environments where reliability and auditability are non-negotiable.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {architectureLayers.map((layer) => (
          <article id={layer.id} key={layer.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-7">
            <h2 className="text-xl sm:text-2xl font-bold text-white">{layer.title}</h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">{layer.description}</p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Technology Components</p>
              <ul className="mt-2 space-y-2">
                {layer.stack.map((item) => (
                  <li key={item} className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
