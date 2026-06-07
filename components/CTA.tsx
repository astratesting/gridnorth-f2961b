"use client"

import { useState, FormEvent } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section
      id="waitlist"
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-charcoal overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-burgundy rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-6">
          Ready to Trade with{' '}
          <span className="text-gold">Transparent AI?</span>
        </h2>

        <p className="font-sans text-xl text-ivory/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join 10,000+ retail traders who trust GridNorth for explainable AI
          signals. Get early access and start with 3 free signals per day.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-sm bg-ivory/10 border border-ivory/20
                         text-ivory placeholder-ivory/40 font-sans text-lg
                         focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary whitespace-nowrap disabled:opacity-50"
              >
                {loading ? 'Joining...' : 'Join the Waitlist'}
              </button>
            </div>
            <p className="font-sans text-sm text-ivory/50 mt-4">
              Free forever. No credit card required. Unsubscribe anytime.
            </p>
          </form>
        ) : (
          <div className="animate-fade-in">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-charcoal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-serif text-3xl font-bold text-ivory mb-4">
              You're on the list!
            </h3>
            <p className="font-sans text-lg text-ivory/80">
              We'll notify you when GridNorth is ready. In the meantime, follow
              us on Twitter for updates.
            </p>
          </div>
        )}

        <div className="mt-16 pt-16 border-t border-ivory/10">
          <p className="font-sans text-ivory/60 text-sm mb-8">
            Trusted by traders from
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40">
            <span className="font-serif text-2xl text-ivory/40">TD Ameritrade</span>
            <span className="font-serif text-2xl text-ivory/40">E*TRADE</span>
            <span className="font-serif text-2xl text-ivory/40">Interactive Brokers</span>
            <span className="font-serif text-2xl text-ivory/40">Robinhood</span>
          </div>
        </div>
      </div>
    </section>
  )
}
