import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 grid place-items-center px-4 sm:px-6 py-20">
      <div className="text-center">
        <p className="text-emerald-600 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">404</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">Page Not Found</h1>
        <p className="text-slate-600 text-base sm:text-lg mb-8">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="inline-flex items-center rounded-full bg-linear-to-r from-emerald-600 to-teal-600 px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold text-white hover:shadow-lg hover:shadow-emerald-600/30 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
