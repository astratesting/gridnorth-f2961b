import { FC } from 'react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Explainable AI Reasoning',
    description: 'Every prediction comes with plain-English explanations. Understand the "why" behind each signal so you can trade with confidence.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Real-Time Signals',
    description: 'Get instant alerts when our AI detects high-probability trading opportunities. Pro and Elite tiers offer real-time delivery.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Transparent Performance',
    description: 'Track our AI\'s win rate, accuracy, and historical performance. No hidden metrics or cherry-picked results.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Bank-Level Security',
    description: 'Your data is encrypted end-to-end. We never share your trading data or personal information with third parties.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Daily Market Insights',
    description: 'Receive curated market analysis and AI-generated insights every morning. Stay ahead of market moves with contextual briefings.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'API Access (Elite)',
    description: 'Integrate GridNorth signals directly into your own trading workflows. Elite tier includes full API access and webhooks.',
  },
]

const Features: FC = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-12 lg:px-24 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            Why GridNorth Is Different
          </h2>
          <p className="font-sans text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto">
            We built the first AI stock predictor that shows its work.
            Transparency isn't a feature — it's our foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-gold mb-6">{feature.icon}</div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                {feature.title}
              </h3>
              <p className="font-sans text-charcoal/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-charcoal/5 rounded-sm p-12">
          <h3 className="font-serif text-3xl font-bold text-charcoal mb-6">
            The GridNorth Difference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="font-serif text-5xl font-bold text-burgundy mb-2">
                Explainable
              </div>
              <p className="font-sans text-charcoal/70">
                Other AIs give you a number. We give you the reasoning.
              </p>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-burgundy mb-2">
                Transparent
              </div>
              <p className="font-sans text-charcoal/70">
                See our track record, win rates, and methodology. No black boxes.
              </p>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-burgundy mb-2">
                Actionable
              </div>
              <p className="font-sans text-charcoal/70">
                Clear signals with entry, exit, and risk management guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
