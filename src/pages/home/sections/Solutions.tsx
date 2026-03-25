import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const solutions = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'AI-Powered LIMS',
    desc: 'Intelligent Laboratory Information Management System that automates workflows, manages samples, and accelerates end-to-end lab processes with machine learning.',
    color: 'from-emerald-600 to-emerald-700',
    href: '/solutions/formedrix-lims',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Predictive Analytics',
    desc: 'Transform raw lab data into actionable insights. Our AI models identify patterns, predict outcomes, and support critical clinical decision-making in real time.',
    color: 'from-teal-600 to-teal-700',
    href: '/solutions/predictive-analytics',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Real-Time Diagnostics',
    desc: 'Accelerate diagnostic reporting with AI-assisted analysis. Reduce turnaround times and deliver timely, high-quality results at scale across all lab types.',
    color: 'from-emerald-500 to-emerald-600',
    href: '/solutions/real-time-diagnostics',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Disease Surveillance',
    desc: 'Always-on population health monitoring powered by AI, enabling intelligent contact tracing, outbreak detection, and large-scale case management.',
    color: 'from-emerald-600 to-teal-600',
    href: '/solutions/disease-surveillance',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 },
  },
}

export default function Solutions() {
  return (
    <section id="solutions" className="relative bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 bg-emerald-200/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-teal-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-12 sm:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={headerVariants}>
          <motion.span
            className="inline-block text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Solutions
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-5">
            Intelligent Lab Solutions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            From LIMS to AI analytics, ForMedrix AI provides comprehensive solutions to modernize
            your laboratory operations and improve healthcare outcomes.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:border-emerald-300 hover:bg-slate-50 transition-all duration-300 group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className={`w-14 h-14 bg-linear-to-br ${sol.color} rounded-xl flex items-center justify-center text-white mb-5`}
              >
                {sol.icon}
              </motion.div>
              <h3 className="text-slate-900 font-bold text-lg mb-3">{sol.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{sol.desc}</p>
              <Link
                to={sol.href}
                className="inline-flex items-center gap-1 text-emerald-600 text-sm font-semibold hover:text-emerald-700 transition-colors"
              >
                Find out more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
