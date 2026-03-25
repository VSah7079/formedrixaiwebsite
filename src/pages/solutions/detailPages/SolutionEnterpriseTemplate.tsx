import { Link } from 'react-router-dom'
import fallbackImage from '../../../assets/hero.png'

export interface EnterpriseSection {
  title: string
  description: string
}

export interface EnterpriseFaq {
  question: string
  answer: string
}

export interface EnterprisePageContent {
  title: string
  subtitle: string
  heroImageUrl: string
  careImageUrl: string
  labImageUrl: string
  overviewTitle: string
  overviewText: string
  valuePoints: string[]
  solutionPillars: EnterpriseSection[]
  implementationSteps: string[]
  securityAndScale: string[]
  faqs: EnterpriseFaq[]
  ctaLabel: string
}

interface SolutionEnterpriseTemplateProps {
  content: EnterprisePageContent
}

export default function SolutionEnterpriseTemplate({ content }: SolutionEnterpriseTemplateProps) {
  return (
    <main className="bg-[#efefef] text-[#0a0a0a] pt-16 sm:pt-20 lg:pt-24 border-t-4 border-[#d8b400]">
      <section className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Link to="/#solutions" className="inline-block text-sm font-semibold text-slate-700 hover:text-black">
          {'<- Back to all solutions'}
        </Link>
      </section>

      <section className="max-w-450 mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] bg-[#f7f7f7] lg:h-105">
        <div className="relative overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-300/70 h-64 sm:h-80 lg:h-full">
          <img
            src={content.heroImageUrl}
            alt="Healthcare technology"
            className="h-full w-full object-cover object-center"
            onError={(event) => {
              event.currentTarget.src = fallbackImage
            }}
          />
          <div className="absolute inset-0 bg-linear-to-tr from-black/30 via-transparent to-white/20" />
          <div className="absolute left-6 top-6 rounded-full border border-white/80 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-800 backdrop-blur-sm">
            Healthcare
          </div>
        </div>

        <div className="flex items-center px-5 sm:px-10 lg:px-16 py-8 sm:py-10 bg-linear-to-b from-[#f8f8f8] to-[#efefef]">
          <div>
            <p className="text-xs sm:text-sm tracking-wide uppercase text-slate-500 mb-3 sm:mb-4">Healthcare Solutions</p>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-[1.06] text-black">
              {content.title}
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl">{content.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="max-w-450 mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="border-t border-slate-400" />

        <div className="pt-8 sm:pt-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 sm:gap-8 lg:gap-14">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-black">
            {content.overviewTitle}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-slate-800">{content.overviewText}</p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          <article className="rounded-xl overflow-hidden border border-slate-300 bg-white shadow-sm">
            <img
              src={content.careImageUrl}
              alt="Patient care and clinical experience"
              className="h-56 sm:h-60 w-full object-cover"
              onError={(event) => {
                event.currentTarget.src = fallbackImage
              }}
            />
            <div className="p-5">
              <p className="text-sm uppercase tracking-wide text-slate-500">Patient Experience Focus</p>
              <p className="mt-2 text-slate-800 leading-relaxed">
                Technology design centered on timely care, communication clarity, and dependable diagnostic pathways.
              </p>
            </div>
          </article>

          <article className="rounded-xl overflow-hidden border border-slate-300 bg-white shadow-sm">
            <img
              src={content.labImageUrl}
              alt="Laboratory operations and diagnostics"
              className="h-56 sm:h-60 w-full object-cover"
              onError={(event) => {
                event.currentTarget.src = fallbackImage
              }}
            />
            <div className="p-5">
              <p className="text-sm uppercase tracking-wide text-slate-500">Laboratory Operational Excellence</p>
              <p className="mt-2 text-slate-800 leading-relaxed">
                Purpose-built workflows for throughput, quality, and compliance across modern diagnostic organizations.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 xl:grid-cols-[1.55fr_1fr] gap-5 sm:gap-6">
          <article className="rounded-xl border border-slate-300 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-black">Comprehensive Capabilities</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {content.valuePoints.map((point) => (
                <li key={point} className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900">
                  {point}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-black">Market-Leading Solution Pillars</h3>
            <div className="mt-4 space-y-3">
              {content.solutionPillars.map((pillar) => (
                <article key={pillar.title} className="rounded-lg border border-slate-300 bg-white px-4 py-4">
                  <p className="text-slate-900 text-sm font-semibold">{pillar.title}</p>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">{pillar.description}</p>
                </article>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-semibold text-black">Implementation Partnership Model</h3>
            <ul className="mt-4 space-y-2">
              {content.implementationSteps.map((step) => (
                <li key={step} className="text-slate-800">• {step}</li>
              ))}
            </ul>
          </article>

          <aside className="space-y-6">
            <div className="rounded-xl border border-slate-300 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-black">Trusted Security and Flexible Scale</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-800">
                {content.securityAndScale.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-300 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-black">Frequently Asked Questions</h3>
              <div className="mt-3 space-y-3">
                {content.faqs.map((faq) => (
                  <details key={faq.question} className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-3">
                    <summary className="text-slate-900 text-sm font-semibold cursor-pointer">{faq.question}</summary>
                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="block rounded-xl text-center px-5 py-3 bg-black text-white font-semibold hover:bg-slate-800 transition-colors shadow-sm"
            >
              {content.ctaLabel}
            </Link>
          </aside>
        </div>
      </section>
    </main>
  )
}
