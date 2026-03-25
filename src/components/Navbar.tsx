import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

interface SubMenuItem {
  label: string
  href: string
  icon?: string
  description?: string
  badge?: string
}

interface SubMenuGroup {
  category?: string
  items: SubMenuItem[]
}

interface NavLink {
  label: string
  href: string
  submenu?: (SubMenuItem | SubMenuGroup)[]
  isGroup?: boolean
  icon?: string
}

// Lucide-style SVG Icons
const LucideIcon = {
  flag: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  ),
  dna: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 15c6.627 0 6.627-10 13.254 0 3.462 5 6.746 5 6.746 5" />
      <path d="M22 9c-6.627 0-6.627 10-13.254 0C5.284 4 2 4 2 4" />
      <line x1="5.5" y1="7" x2="5.501" y2="7.01" />
      <line x1="18.5" y1="17" x2="18.501" y2="17.01" />
    </svg>
  ),
  microscope: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h12" />
      <path d="M9 22h6" />
      <path d="M9 14v4" />
      <path d="M15 14v4" />
      <path d="M6 10h12v2H6z" />
      <circle cx="9" cy="6" r="2" />
      <circle cx="15" cy="6" r="2" />
      <path d="M12 10v2" />
    </svg>
  ),
  databaseZap: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 8v8c0 1.657 3.582 3 8 3s8-1.343 8-3V8" />
      <path d="M13 15l-1 2h3l-1 2" />
      <path d="M12 20l0 2" />
    </svg>
  ),
  shieldCheck: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 12 15 15 10" />
    </svg>
  ),
  settings: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6m-17.78 7.78l4.24-4.24m5.08-5.08l4.24-4.24" />
    </svg>
  ),
  link: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  barChart: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  hospital: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7v3h2v11H2v1h20v-1h-2V10h2V7l-10-5z" />
      <line x1="12" y1="10" x2="12" y2="16" />
      <line x1="9" y1="13" x2="15" y2="13" />
    </svg>
  ),
  pill: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 7c-3 0-5 2-5 5s2 5 5 5h6c3 0 5-2 5-5s-2-5-5-5" />
      <path d="M15 17c3 0 5-2 5-5s-2-5-5-5" />
    </svg>
  ),
  flask: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2v7a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V2" />
      <path d="M8 9h8" />
      <path d="M8 9l2 10a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2l2-10" />
    </svg>
  ),
  globe: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  zap: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  lineChart: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="20" x2="12" y2="10" />
      <polyline points="19 10 23 6 19 2" />
      <path d="M21 4L7 18" />
    </svg>
  ),
  cpu: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  lock: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  calendar: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  newsPaper: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M14 5H7v3h7z" />
      <path d="M14 10H7v3h7z" />
    </svg>
  ),
  users: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  briefcase: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),

  headphones: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  lightbulb: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18h6M12 22v-6m7.071-7.071L19.657 8M5.343 5.343L3.93 3.93" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  ),
  arrowRight: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  sparkles: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path d="M12 1v4m8.485 2.485l-2.828 2.828m4 8l-2.828-2.828M23 12h-4m-2.485 8.485l-2.828-2.828m-8 2.828l-2.828 2.828M1 12h4m2.485-8.485l2.828 2.828" />
    </svg>
  ),
  smartphone: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  leaf: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 3 18.5 3c1.5 0 2 1.5 2 3 0 6-4 12-7.5 14z" />
    </svg>
  ),
}

const iconMap: Record<string, React.ReactElement> = {
  'flag': LucideIcon.flag,
  'dna': LucideIcon.dna,
  'microscope': LucideIcon.microscope,
  'database-zap': LucideIcon.databaseZap,
  'shield-check': LucideIcon.shieldCheck,
  'settings': LucideIcon.settings,
  'link': LucideIcon.link,
  'bar-chart': LucideIcon.barChart,
  'hospital': LucideIcon.hospital,
  'pill': LucideIcon.pill,
  'flask': LucideIcon.flask,
  'globe': LucideIcon.globe,
  'zap': LucideIcon.zap,
  'line-chart': LucideIcon.lineChart,
  'cpu': LucideIcon.cpu,
  'lock': LucideIcon.lock,
  'calendar': LucideIcon.calendar,
  'newspaper': LucideIcon.newsPaper,
  'users': LucideIcon.users,
  'briefcase': LucideIcon.briefcase,
  'headphones': LucideIcon.headphones,
  'lightbulb': LucideIcon.lightbulb,
  'arrow-right': LucideIcon.arrowRight,
  'sparkles': LucideIcon.sparkles,
  'smartphone': LucideIcon.smartphone,
  'leaf': LucideIcon.leaf,
}

const navLinks: NavLink[] = [
  {
    label: 'Solutions',
    href: '/#solutions',
    submenu: [
      {
        category: 'AI Solutions for Science',
        items: [
          { label: 'ForMedrix LIMS', href: '/solutions/formedrix-lims', icon: 'database-zap', description: 'Enterprise Laboratory Information Management System' },
          { label: 'Predictive Analytics', href: '/solutions/predictive-analytics', icon: 'line-chart', description: 'AI-powered diagnostic insights & forecasting' },
          { label: 'Real-Time Diagnostics', href: '/solutions/real-time-diagnostics', icon: 'zap', description: 'Instant pathology analysis with deep learning' },
          { label: 'Disease Surveillance', href: '/solutions/disease-surveillance', icon: 'globe', description: 'Epidemiological monitoring & tracking' },
          { label: 'Quality Intelligence', href: '/solutions/quality-intelligence', icon: 'shield-check', description: 'Automated QA/QC with adaptive thresholds' },
          { label: 'Data Integration Hub', href: '/solutions/data-integration-hub', icon: 'link', description: 'Unified healthcare & lab system connectivity' },
          { label: 'Compliance Automation', href: '/solutions/compliance-automation', icon: 'lock', description: 'Regulatory adherence & audit trails' },
        ],
      },
      {
        category: 'Healthcare Modules',
        items: [
          { label: 'Clinical Decision Support', href: '/solutions/clinical-decision-support', icon: 'lightbulb', description: 'Evidence-based treatment recommendations' },
          { label: 'Patient Portal', href: '/solutions/patient-portal', icon: 'users', description: 'Secure patient access & engagement platform' },
          { label: 'Telemedicine Integration', href: '/solutions/telemedicine-integration', icon: 'headphones', description: 'Virtual consultation & remote diagnostics' },
        ],
      },
      {
        category: 'Other Products',
        items: [
          { label: 'ForMedrix API Suite', href: '/solutions/api-suite', icon: 'cpu', description: 'RESTful + GraphQL interfaces for integrations' },
          { label: 'Mobile Diagnostics App', href: '/solutions/mobile-diagnostics-app', icon: 'smartphone', description: 'On-the-go lab results & management' },
        ],
      },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    submenu: [
      {
        items: [
          { label: 'Healthcare', href: '/industries#healthcare', icon: 'hospital', description: 'Hospitals, clinics & medical centers' },
          { label: 'Contract Services', href: '/industries#contract-services', icon: 'briefcase', description: 'Third-party laboratory operations' },
          { label: 'Food & Beverage', href: '/industries#food-beverage', icon: 'flask', description: 'Safety & quality compliance' },
          { label: 'Environment Water', href: '/industries#environment-water', icon: 'flask', description: 'Water, soil & air analysis' },
          { label: 'Public Health', href: '/industries#public-health', icon: 'globe', description: 'Disease surveillance & epidemiology' },
          { label: 'Crop Sciences', href: '/industries#crop-sciences', icon: 'leaf', description: 'Agricultural testing & soil analysis' },
          { label: 'Pharma', href: '/industries#pharma', icon: 'pill', description: 'Drug development & quality assurance', badge: 'Coming Soon' },
          { label: 'Biotech', href: '/industries#biotech', icon: 'dna', description: 'Research & development labs', badge: 'Coming Soon' },
        ],
      },
    ],
  },
  {
    label: 'Technology',
    href: '/technology',
    submenu: [
      {
        items: [
          { label: 'Platform Architecture', href: '/technology#platform-architecture', icon: 'cpu', description: 'Cloud-native, scalable infrastructure' },
          { label: 'Security & Compliance', href: '/technology#security-compliance', icon: 'lock', description: 'HIPAA, GDPR, ISO certifications' },
          { label: 'AI & Machine Learning', href: '/technology#ai-machine-learning', icon: 'sparkles', description: 'Advanced algorithms for diagnostics' },
          { label: 'Integration Framework', href: '/technology#integration-framework', icon: 'link', description: 'HL7, FHIR & legacy system connectors' },
          { label: 'Development Roadmap', href: '/technology#development-roadmap', icon: 'lightbulb', description: 'Future innovations & features' },
          { label: 'Training & Support', href: '/technology#training-support', icon: 'headphones', description: 'Comprehensive onboarding programs' },
        ],
      },
    ],
  },
  {
    label: 'News & Events',
    href: '/news-events',
    submenu: [
      {
        items: [
          { label: 'All Updates', href: '/news-events#all-updates', icon: 'newspaper', description: 'Latest news & announcements' },
          { label: 'Case Studies', href: '/news-events#case-studies', icon: 'briefcase', description: 'Success stories & implementations' },
          { label: 'Events & Webinars', href: '/news-events#events-webinars', icon: 'calendar', description: 'Conferences, demos & workshops' },
          { label: 'Research Insights', href: '/news-events#research-insights', icon: 'lightbulb', description: 'Industry reports & whitepapers' },
          { label: 'Blog & Articles', href: '/news-events#blog-articles', icon: 'newspaper', description: 'Expert insights & thought leadership' },
        ],
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
    submenu: [
      {
        items: [
          { label: 'Our Vision', href: '/about#vision', icon: 'sparkles', description: 'Transforming healthcare through AI' },
          { label: 'Our Expertise', href: '/about#expertise', icon: 'bar-chart', description: 'Decades of laboratory innovation' },
          { label: 'Company History', href: '/about#history', icon: 'briefcase', description: 'Evolution & milestones' },
          { label: 'Leadership Team', href: '/about#leadership', icon: 'users', description: 'Expert founders & executives' },
          { label: 'Partners & Integrations', href: '/about#partners', icon: 'link', description: 'Strategic partnerships ecosystem' },
          { label: 'Our Customers', href: '/about#customers', icon: 'hospital', description: 'Trusted by industry leaders' },
          { label: 'Careers at ForMedrix', href: '/careers', icon: 'briefcase', description: 'Join our innovative team' },
        ],
      },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [langOpen, setLangOpen] = useState(false)
  const [language, setLanguage] = useState('IN/EN')
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setShowSearch(false)
    setLangOpen(false)
    setOpenMegaMenu(null)
  }, [location.pathname, location.hash])

  // Close mobile menu when search is opened
  useEffect(() => {
    if (showSearch) {
      setMobileMenuOpen(false)
    } else {
      setSearchQuery('')
    }
  }, [showSearch])

  // Handle Escape key to close search
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showSearch) {
        setShowSearch(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [showSearch])

  const navVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4 },
    }),
  }

  const megaMenuVariants = {
    hidden: {
      opacity: 0,
      y: -12,
      scaleY: 0.92,
      transformOrigin: 'top center',
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transformOrigin: 'top center',
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1] as any, // cubic-bezier for smooth easing
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -12,
      scaleY: 0.92,
      transformOrigin: 'top center',
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1] as any,
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.15,
      },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: -8, y: -4 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: i * 0.06,
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    }),
  }



  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100'
          : 'bg-white shadow-md border-b border-emerald-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 -ml-2 sm:-ml-6 lg:-ml-10">
            <motion.img
              src={logo}
              alt="ForMedrix"
              className="h-8 sm:h-10 lg:h-14 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <div className="hidden 2xl:flex items-center gap-6 flex-1 mx-8">
            {navLinks.filter(link => !link.icon).map((link, idx) => (
              <motion.div
                key={link.label}
                custom={idx}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="relative group"
                onMouseEnter={() => {
                  if (link.submenu) {
                    setOpenMegaMenu(link.label)
                    setHoveredItem(link.label)
                  }
                }}
                onMouseLeave={() => {
                  setOpenMegaMenu(null)
                  setHoveredItem(null)
                }}
              >
                <Link
                  to={link.href}
                  className="text-sm font-medium text-emerald-900 hover:text-emerald-600 transition-all pb-1 flex items-center gap-1 relative"
                  onMouseEnter={() => link.submenu && setHoveredItem(link.label)}
                  onMouseLeave={() => link.submenu && setHoveredItem(null)}
                >
                  {link.label}
                  {link.submenu && (
                    <motion.svg
                      animate={{
                        rotate: hoveredItem === link.label ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </motion.svg>
                  )}

                  {/* Animated Underline */}
                  <motion.div
                    layoutId={`underline-${link.label}`}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-emerald-600 to-teal-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: 'left' }}
                  />
                </Link>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {openMegaMenu === link.label && link.submenu && (
                    <motion.div
                      variants={megaMenuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={`absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl border border-emerald-100/50 overflow-hidden backdrop-blur-sm ${
                        link.label === 'Solutions' ? 'w-[calc(100vw-32px)] md:w-225' :
                        link.label === 'Industries' ? 'w-[calc(100vw-32px)] md:w-175' :
                        link.label === 'Technology' ? 'w-[calc(100vw-32px)] md:w-162.5' :
                        link.label === 'News & Events' ? 'w-[calc(100vw-32px)] md:w-162.5' :
                        link.label === 'About' ? 'w-[calc(100vw-32px)] md:w-175' :
                        'w-80'
                      } max-h-[80vh] overflow-y-auto custom-scrollbar`}
                      style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#10b981 #f0fdf4'
                      }}
                    >
                      {/* Gradient Background */}
                      <div className="absolute top-0 right-0 -z-10 w-48 h-48 bg-linear-to-br from-emerald-50 to-teal-50 rounded-full opacity-60 blur-2xl" />

                      <div className="p-4 md:p-6 lg:p-8">
                        {/* Check if submenu has groups */}
                        {link.submenu.some(item => 'items' in item) ? (
                          // Grouped layout (Solutions, Industries, etc.)
                          <motion.div 
                            className={`grid gap-5 md:gap-8 lg:gap-10 ${
                              link.label === 'Solutions' ? 'grid-cols-1 md:grid-cols-3' :
                              link.label === 'Industries' ? 'grid-cols-1' :
                              link.label === 'Technology' ? 'grid-cols-1' :
                              'grid-cols-1'
                            }`}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            {link.submenu.map((groupOrItem, groupIdx) => {
                              if ('items' in groupOrItem) {
                                // It's a group
                                return (
                                  <div key={groupIdx} className="space-y-3">
                                    {groupOrItem.category && (
                                      <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-700 pl-1 pb-2 mb-3 border-b-2 border-emerald-100">
                                        {groupOrItem.category}
                                      </h3>
                                    )}
                                    <div className="space-y-2.5">
                                      {groupOrItem.items.map((item, itemIdx) => (
                                        <motion.div
                                          key={item.label}
                                          custom={itemIdx}
                                          variants={menuItemVariants}
                                          initial="hidden"
                                          animate="visible"
                                        >
                                          <Link
                                            to={item.href}
                                            className="block p-3 rounded-lg hover:bg-emerald-50/60 group/item transition-all duration-300 hover:shadow-md hover:shadow-emerald-200/30"
                                          >
                                            <div className="flex items-start gap-3">
                                              <div
                                                className="w-5 h-5 shrink-0 text-emerald-600 group-hover/item:text-emerald-700 group-hover/item:scale-125 transition-all duration-300 menu-item-icon"
                                                style={{ color: 'var(--color-primary)' }}
                                              >
                                                {item.icon && iconMap[item.icon]}
                                              </div>
                                              <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                  <p className="text-sm font-semibold text-emerald-900 group-hover/item:text-emerald-600 transition-colors">
                                                    {item.label}
                                                  </p>
                                                  {item.badge && (
                                                    <motion.span 
                                                      animate={{ scale: [1, 1.05, 1] }}
                                                      transition={{ duration: 2, repeat: Infinity }}
                                                      className="text-xs bg-linear-to-r from-amber-400 to-orange-400 text-white px-2.5 py-0.5 rounded-full font-semibold shadow-md shadow-amber-200/50"
                                                    >
                                                      {item.badge}
                                                    </motion.span>
                                                  )}
                                                </div>
                                                <p className="text-xs text-slate-600 group-hover/item:text-slate-700 transition-colors mt-1 leading-relaxed">
                                                  {item.description}
                                                </p>
                                              </div>
                                            </div>
                                          </Link>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                )
                              }
                              return null
                            })}
                          </motion.div>
                        ) : (
                          // Flat layout (fallback)
                          <div className="space-y-2.5">
                            {link.submenu.map((item, i) => {
                              if ('items' in item) return null
                              return (
                                <motion.div
                                  key={item.label}
                                  custom={i}
                                  variants={menuItemVariants}
                                  initial="hidden"
                                  animate="visible"
                                >
                                  <Link
                                    to={item.href}
                                    className="block p-3 rounded-lg hover:bg-emerald-50/60 group/item transition-all duration-300 hover:shadow-md hover:shadow-emerald-200/30"
                                  >
                                    <div className="flex items-start gap-3">
                                      <div
                                        className="w-6 h-6 shrink-0 text-emerald-600 group-hover/item:text-emerald-700 group-hover/item:scale-125 transition-all duration-300 menu-item-icon"
                                        style={{ color: 'var(--color-primary)' }}
                                      >
                                        {item.icon && iconMap[item.icon]}
                                      </div>
                                      <div className="flex-1">
                                        <p className="text-sm font-semibold text-emerald-900 group-hover/item:text-emerald-600 transition-colors">
                                          {item.label}
                                        </p>
                                        <p className="text-xs text-slate-600 group-hover/item:text-slate-700 transition-colors mt-1 leading-relaxed">
                                          {item.description}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </motion.div>
                              )
                            })}
                          </div>
                        )}
                      </div>

                      {/* CTA Button in Menu */}
                      <div className="border-t border-emerald-100 p-5 md:p-6 bg-linear-to-r from-emerald-50 to-teal-50 rounded-b-2xl">
                        <motion.button
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full px-4 py-3 rounded-lg bg-linear-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                        >
                          Explore {link.label} →
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Icons & Actions */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            {/* Notification Bell */}
            <motion.button
              whileHover={{
                scale: 1.15,
                y: -3,
              }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 sm:p-2 text-emerald-700 hover:text-emerald-600 transition-colors relative"
              title="Notifications"
            >
              <motion.svg
                className="w-4 sm:w-5 h-4 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: 0 }}
                whileHover={{ y: -2, rotate: [0, -5, 5, 0] }}
                transition={{ rotate: { duration: 0.6 } }}
              >
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
              </motion.svg>
              <motion.span
                className="absolute top-0 right-0 w-2 h-2 bg-rose-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            {/* Search */}
            <motion.button
              whileHover={{
                scale: 1.15,
                y: -3,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowSearch(true)}
              className="p-1.5 sm:p-2 text-emerald-700 hover:text-emerald-600 transition-colors"
              title="Search"
            >
              <motion.svg
                className="w-4 sm:w-5 h-4 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ rotate: 15 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </motion.svg>
            </motion.button>

            {/* Language Selector with Enhanced Animation - Desktop only */}
            <div className="relative group hidden lg:block">
              <motion.button
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLangOpen(!langOpen)}
                className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-white bg-emerald-600 border border-emerald-600 rounded-lg hover:bg-emerald-700 transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-600/20"
              >
                <motion.span
                  animate={{
                    x: langOpen ? 2 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {language}
                </motion.span>
                <motion.svg
                  animate={{ rotate: langOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scaleY: 0.90 }}
                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                    exit={{ opacity: 0, y: -10, scaleY: 0.90 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full right-0 mt-2 w-32 bg-white border border-emerald-200 rounded-xl shadow-xl overflow-hidden z-50 backdrop-blur-sm"
                    style={{ transformOrigin: 'top right' }}
                  >
                    {['IN/EN', 'EN', 'ES', 'FR', 'DE'].map((lang, i) => (
                      <motion.button
                        key={lang}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.2 }}
                        whileHover={{
                          backgroundColor: '#ecfdf5',
                          paddingLeft: 16,
                          x: 5,
                        }}
                        onClick={() => {
                          setLanguage(lang)
                          setLangOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                          language === lang
                            ? 'bg-emerald-100 text-emerald-900 border-l-2 border-emerald-600'
                            : 'text-emerald-700 hover:text-emerald-900'
                        }`}
                      >
                        {lang}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle with Animation - Show on tablet and below */}
            <motion.button
              whileHover={{
                scale: 1.15,
                y: -2,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="2xl:hidden p-1.5 sm:p-2 text-emerald-700 hover:text-emerald-600 transition-colors"
            >
              <motion.svg
                className="w-5 sm:w-6 h-5 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: mobileMenuOpen ? 0 : 0 }}
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Search Overlay - Appears on top of everything */}
        <AnimatePresence>
          {showSearch && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowSearch(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              />

              {/* Search Modal */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8"
              >
                <div className="max-w-2xl mx-auto">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setShowSearch(false)
                    }}
                    className="relative"
                  >
                    <motion.input
                      type="text"
                      placeholder="Search solutions, industries, resources..."
                      autoFocus
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg bg-white text-emerald-900 placeholder:text-emerald-500 rounded-xl border-2 border-emerald-200 focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/20 transition-all shadow-lg"
                    />
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setShowSearch(false)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-emerald-700 hover:text-emerald-600 focus:outline-none"
                      title="Close"
                    >
                      <motion.svg
                        className="w-5 sm:w-6 h-5 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </motion.svg>
                    </motion.button>
                  </form>

                  {/* Search Suggestions */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 space-y-2"
                  >
                    <p className="text-xs sm:text-sm font-semibold text-emerald-900 px-4">Popular Searches</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {['LIMS Solutions', 'Predictive Analytics', 'Disease Surveillance', 'Healthcare'].map((item) => (
                        <motion.button
                          key={item}
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setShowSearch(false)}
                          className="text-left px-4 py-2 rounded-lg bg-white hover:bg-emerald-50 text-emerald-900 text-sm transition-colors"
                        >
                          {item}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Mobile Menu - Appears on top of everything */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="2xl:hidden border-t-2 border-emerald-100 bg-white overflow-hidden z-30"
            >
              <div className="px-4 sm:px-6 py-4 space-y-2 max-h-[calc(100vh-64px)] overflow-y-auto">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      className="block px-3 py-2.5 text-sm font-medium text-emerald-900 hover:text-emerald-600 hover:bg-slate-50 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="border-t-2 border-gray-900/20 pt-4 mt-4 space-y-2">
                  <div className="border-t border-emerald-100 pt-2 mt-2">
                    <p className="px-3 text-xs font-bold text-emerald-900 mb-2">Language</p>
                    <div className="grid grid-cols-3 gap-2">
                      {['IN/EN', 'EN', 'ES'].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setLanguage(lang)
                            setMobileMenuOpen(false)
                          }}
                          className={`px-2 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                            language === lang
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 text-emerald-900 hover:bg-slate-200'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
