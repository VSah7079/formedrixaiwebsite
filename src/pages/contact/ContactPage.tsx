import { useState, type FormEvent } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="relative overflow-hidden bg-white text-slate-900 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.15),transparent_34%),radial-gradient(circle_at_85%_30%,rgba(20,184,166,0.15),transparent_30%)]" />

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <p className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-4">Contact Us</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 sm:mb-5">
          Let&apos;s Build Your Next-Gen Lab Experience
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed mb-10 sm:mb-12">
          Tell us about your current workflow, turnaround goals, and automation needs. Our team
          will design an AI roadmap tailored for your lab operations.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 sm:gap-7 xl:gap-10">
          <aside className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-5 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Talk to ForMedrix AI</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              We usually respond within one business day. For implementation discussions, include
              your lab size and current LIS setup.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-100 p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-emerald-600 font-semibold mb-1">Business Enquiries</p>
                <p className="text-slate-900 text-sm sm:text-base">sales@formedrix.ai</p>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">+91 98765 43210</p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-100 p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-emerald-600 font-semibold mb-1">Support</p>
                <p className="text-slate-900 text-sm sm:text-base">support@formedrix.ai</p>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-emerald-300 bg-emerald-50 p-3 sm:p-4">
                <p className="text-emerald-700 text-xs sm:text-sm font-semibold">Why teams choose us</p>
                <p className="text-slate-700 mt-2 text-xs sm:text-sm leading-relaxed">
                  Faster diagnostic turnaround, workflow intelligence, and secure integration with
                  existing systems.
                </p>
              </div>
            </div>
          </aside>

          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-5 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 placeholder:text-slate-500 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="workEmail" className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Work Email
                  </label>
                  <input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 placeholder:text-slate-500 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="organization" className="block text-xs sm:text-sm font-medium text-slate-700 mb-2">
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    placeholder="Hospital / Lab name"
                    className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 placeholder:text-slate-500 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">
                    Looking For
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="lis-integration">LIS Integration</option>
                    <option value="analytics">Advanced Analytics</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your current process, major pain points, and expected outcomes."
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none resize-y focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-slate-400 bg-white text-emerald-600 focus:ring-emerald-500/30"
                />
                <label htmlFor="consent" className="text-sm text-slate-700 leading-relaxed">
                  I agree to be contacted by the ForMedrix AI team regarding this enquiry.
                </label>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold px-7 py-3 rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-200"
              >
                Send Enquiry
              </button>

              {submitted && (
                <p className="text-sm text-emerald-600 bg-emerald-50 border border-emerald-300 rounded-lg px-4 py-3">
                  Thank you! Your request has been received. Our team will get in touch shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
