export interface SolutionItem {
  slug: string
  title: string
  category: 'AI Solutions for Science' | 'Healthcare Modules' | 'Other Products'
  tag: string
  summary: string
  details: string
  audience: string
  capabilities: string[]
  workflows: string[]
  outcomes: string[]
}

export const solutionCatalog: SolutionItem[] = [
  {
    slug: 'formedrix-lims',
    title: 'ForMedrix LIMS',
    category: 'AI Solutions for Science',
    tag: 'Core Platform',
    summary: 'Enterprise Laboratory Information Management System',
    details:
      'A configurable LIMS foundation for accessioning, sample tracking, QA checkpoints, and standardized report output across distributed labs.',
    audience: 'Reference labs, hospital labs, and multi-site diagnostics groups',
    capabilities: ['Sample lifecycle control', 'Role-based approvals', 'Instrument integration', 'Audit-ready logs'],
    workflows: ['Accessioning to release', 'Multi-site routing', 'Critical value escalation'],
    outcomes: ['Standardized sample lifecycle', 'Lower manual entry risk', 'Faster report turnaround'],
  },
  {
    slug: 'predictive-analytics',
    title: 'Predictive Analytics',
    category: 'AI Solutions for Science',
    tag: 'Intelligence',
    summary: 'AI-powered diagnostic insights & forecasting',
    details:
      'Machine-assisted forecasting models help teams prioritize workloads, detect trend shifts early, and improve staffing and inventory decisions.',
    audience: 'Operations teams and lab directors managing high-volume demand',
    capabilities: ['Demand forecasting', 'Backlog prediction', 'TAT sensitivity modeling', 'Capacity optimization'],
    workflows: ['Daily load planning', 'Shift rebalancing', 'Consumable planning'],
    outcomes: ['Improved forecast confidence', 'Reduced delays', 'Better resource planning'],
  },
  {
    slug: 'real-time-diagnostics',
    title: 'Real-Time Diagnostics',
    category: 'AI Solutions for Science',
    tag: 'Clinical Ops',
    summary: 'Instant pathology analysis with deep learning',
    details:
      'Streaming diagnostics pipelines support faster triage and decision support while preserving physician review, traceability, and version history.',
    audience: 'Pathology, molecular diagnostics, and emergency testing units',
    capabilities: ['Live queue prioritization', 'Critical case alerts', 'Diagnostic signal monitoring', 'Exception highlighting'],
    workflows: ['Rapid triage', 'Priority routing', 'Supervisory review'],
    outcomes: ['Lower TAT', 'Faster escalation', 'Transparent review trails'],
  },
  {
    slug: 'disease-surveillance',
    title: 'Disease Surveillance',
    category: 'AI Solutions for Science',
    tag: 'Public Health',
    summary: 'Epidemiological monitoring & tracking',
    details:
      'Collect and normalize signals from lab networks, then monitor outbreaks, seasonal shifts, and anomaly clusters with policy-driven alerting.',
    audience: 'Public health agencies, epidemiology teams, and surveillance coordinators',
    capabilities: ['Syndromic trend detection', 'Region-wise heatmaps', 'Threshold notifications', 'Case trend analytics'],
    workflows: ['Outbreak watch', 'Weekly reporting', 'Escalation triggers'],
    outcomes: ['Earlier outbreak detection', 'Regional trend visibility', 'Actionable alerting'],
  },
  {
    slug: 'quality-intelligence',
    title: 'Quality Intelligence',
    category: 'AI Solutions for Science',
    tag: 'Quality',
    summary: 'Automated QA/QC with adaptive thresholds',
    details:
      'Quality dashboards and rules surface drift, repeat failures, and process exceptions before they become systemic quality incidents.',
    audience: 'QA/QC leaders and compliance teams',
    capabilities: ['Control rule automation', 'Drift detection', 'Root-cause snapshots', 'CAPA workflow support'],
    workflows: ['QC release checks', 'Nonconformance triage', 'Audit preparation'],
    outcomes: ['Proactive QA/QC', 'Lower rework', 'Regulatory readiness'],
  },
  {
    slug: 'data-integration-hub',
    title: 'Data Integration Hub',
    category: 'AI Solutions for Science',
    tag: 'Interoperability',
    summary: 'Unified healthcare & lab system connectivity',
    details:
      'Support HL7, FHIR, APIs, and legacy connectors with transformation, observability, and secure data exchange patterns.',
    audience: 'Integration architects and IT modernization teams',
    capabilities: ['HL7 and FHIR connectors', 'API orchestration', 'Message transformation', 'Integration observability'],
    workflows: ['Order ingestion', 'Result distribution', 'Partner data sync'],
    outcomes: ['Less system silos', 'Stable integrations', 'Reliable data exchange'],
  },
  {
    slug: 'compliance-automation',
    title: 'Compliance Automation',
    category: 'AI Solutions for Science',
    tag: 'Governance',
    summary: 'Regulatory adherence & audit trails',
    details:
      'Codify compliance requirements in workflows and policies with immutable logs, audit exports, and role-based governance.',
    audience: 'Regulatory and risk teams in accredited laboratories',
    capabilities: ['Policy-based access', 'Evidence trails', 'Audit exports', 'Exception governance'],
    workflows: ['Inspection readiness', 'Policy checks', 'Corrective action tracking'],
    outcomes: ['Audit-ready operations', 'Lower compliance overhead', 'Traceable controls'],
  },
  {
    slug: 'clinical-decision-support',
    title: 'Clinical Decision Support',
    category: 'Healthcare Modules',
    tag: 'Clinical Intelligence',
    summary: 'Evidence-based treatment recommendations',
    details:
      'Contextual signals and historical patterns assist clinicians with next-step recommendations while keeping final decisions human-led.',
    audience: 'Clinicians, pathologists, and multidisciplinary review teams',
    capabilities: ['Context-aware suggestions', 'Guideline-linked interpretation', 'Risk flagging', 'Case comparison'],
    workflows: ['Interpretation assist', 'Second-level review', 'Care-pathway alignment'],
    outcomes: ['Better clinical confidence', 'Reduced variation', 'Faster interventions'],
  },
  {
    slug: 'patient-portal',
    title: 'Patient Portal',
    category: 'Healthcare Modules',
    tag: 'Experience',
    summary: 'Secure patient access & engagement platform',
    details:
      'Enable patients to track sample status, download verified reports, and receive guided notifications through a privacy-first interface.',
    audience: 'Patient services and digital engagement teams',
    capabilities: ['Report download center', 'Status notifications', 'Consent visibility', 'Secure communication'],
    workflows: ['Sample status tracking', 'Result delivery', 'Patient follow-up'],
    outcomes: ['Improved patient experience', 'Lower support load', 'Faster communication'],
  },
  {
    slug: 'telemedicine-integration',
    title: 'Telemedicine Integration',
    category: 'Healthcare Modules',
    tag: 'Connected Care',
    summary: 'Virtual consultation & remote diagnostics',
    details:
      'Share structured results into telemedicine systems to accelerate referrals, follow-ups, and clinician collaboration.',
    audience: 'Virtual care teams and distributed provider networks',
    capabilities: ['Consultation handoff', 'Structured result sync', 'Referral coordination', 'Remote collaboration'],
    workflows: ['Virtual consult prep', 'Referral routing', 'Care continuity updates'],
    outcomes: ['Connected care journeys', 'Faster specialist access', 'Reduced coordination friction'],
  },
  {
    slug: 'api-suite',
    title: 'ForMedrix API Suite',
    category: 'Other Products',
    tag: 'Developer Platform',
    summary: 'RESTful + GraphQL interfaces for integrations',
    details:
      'Build custom portals, dashboards, and automations with secure APIs, token-based access, and robust versioned endpoints.',
    audience: 'Product engineering teams and integration partners',
    capabilities: ['Versioned APIs', 'Webhook events', 'Token controls', 'Developer sandbox'],
    workflows: ['Custom app build', 'Event-driven automation', 'Data product creation'],
    outcomes: ['Faster integrations', 'Flexible extensions', 'Future-proof architecture'],
  },
  {
    slug: 'mobile-diagnostics-app',
    title: 'Mobile Diagnostics App',
    category: 'Other Products',
    tag: 'Field Operations',
    summary: 'On-the-go lab results & management',
    details:
      'Capture, track, and review diagnostics operations from mobile devices with secure sync and role-aware access.',
    audience: 'Collection teams, field technicians, and decentralized labs',
    capabilities: ['Mobile sample capture', 'Offline-first updates', 'Photo and metadata logging', 'Secure sync'],
    workflows: ['On-site collection', 'Transit tracking', 'Field escalation'],
    outcomes: ['Field productivity', 'Faster status updates', 'Anywhere access'],
  },
]
