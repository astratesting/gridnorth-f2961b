import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-burgundy rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 px-6 md:px-12 lg:px-24 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
              <span className="font-serif text-charcoal font-bold text-xl">G</span>
            </div>
            <span className="font-serif text-2xl text-ivory font-bold">GridNorth</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="font-sans text-ivory/80 hover:text-gold transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="font-sans text-ivory/80 hover:text-gold transition-colors">
              Pricing
            </Link>
            <Link href="#waitlist" className="font-sans text-ivory/80 hover:text-gold transition-colors">
              Waitlist
            </Link>
            <button className="btn-secondary text-sm px-6 py-2">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto animate-fade-in">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-ivory mb-6 leading-tight">
          AI Stock Predictions
          <br />
          That <span className="text-gold">Explain Why</span>
        </h1>

        <p className="font-sans text-xl md:text-2xl text-ivory/80 mb-4 max-w-3xl mx-auto leading-relaxed">
          GridNorth delivers explainable AI signals with plain-English reasoning.
          No black boxes. Just transparent predictions that help you trade smarter.
        </p>

        <p className="font-sans text-lg text-gold/90 mb-12 italic">
          The first AI predictor that shows its work.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary">
            Join the Waitlist — Free
          </button>
          <button className="btn-secondary">
            See How It Works
          </button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-ivory/60">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free Tier Available</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Join 10,000+ Traders</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-ivory/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
