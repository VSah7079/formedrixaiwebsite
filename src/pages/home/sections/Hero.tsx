import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const slides = [
  {
    badge: 'Next-Gen Lab Intelligence',
    title: 'Accelerate Lab Innovation',
    subtitle:
      'ForMedrix AI delivers intelligent LIMS/LIS solutions that transform laboratory workflows, accelerate diagnostics, and drive the digital transformation of healthcare.',
    cta1: 'Explore Solutions',
    cta2: 'Watch Demo',
  },
  {
    badge: 'AI-Powered Healthcare',
    title: 'Drive Healthcare with Intelligence',
    subtitle:
      'Harness the power of artificial intelligence to modernize diagnostics, streamline complex lab operations, and deliver measurably better patient outcomes at scale.',
    cta1: 'Learn More',
    cta2: 'Talk to Expert',
  },
  {
    badge: 'Shaping Tomorrow',
    title: 'Shaping the Future of Medicine',
    subtitle:
      'Our AI-powered platform connects critical laboratory data across healthcare, pharma, biotech, and public health — enabling a healthier future for all.',
    cta1: 'Our Vision',
    cta2: 'Get in Touch',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
        setFading(false)
      }, 350)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const goTo = (i: number) => {
    setFading(true)
    setTimeout(() => {
      setCurrent(i)
      setFading(false)
    }, 350)
  }

  const slide = slides[current]

  const badgeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  }

  const buttonsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } },
  }

  const scrollIndicatorVariants = {
    animate: { y: [0, 8, 0] },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-teal-50 pt-20 lg:pt-0">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />

      {/* Radial glow overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(16, 185, 129, 0.15) 0%, rgba(248, 250, 252, 0.85) 70%)',
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/5 w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '4s' }}
      />
      <div
        className="absolute bottom-1/4 right-1/5 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 bg-teal-200/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '5s', animationDelay: '1.5s' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        {/* Badge */}
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          animate={fading ? 'hidden' : 'visible'}
          transition={{ duration: 0.3 }}
        >
          <span className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-300 text-emerald-700 text-xs font-semibold px-3 sm:px-4 py-1.5 rounded-full mb-6 sm:mb-8 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse" />
            {slide.badge}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate={fading ? 'hidden' : 'visible'}
          transition={{ duration: 0.3 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6"
        >
          <span className="bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
            {slide.title}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate={fading ? 'hidden' : 'visible'}
          transition={{ duration: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          {slide.subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={buttonsVariants}
          initial="hidden"
          animate={fading ? 'hidden' : 'visible'}
          transition={{ duration: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-200 text-sm"
          >
            {slide.cta1}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-300 text-slate-700 font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:border-emerald-600 hover:text-emerald-600 transition-all duration-200 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            {slide.cta2}
          </motion.button>
        </motion.div>

        {/* Slide dots */}
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {slides.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              whileHover={{ scale: 1.2 }}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-emerald-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          variants={scrollIndicatorVariants}
          animate="animate"
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-linear-to-b from-slate-400 to-transparent"
        />
      </motion.div>
    </section>
  )
}
