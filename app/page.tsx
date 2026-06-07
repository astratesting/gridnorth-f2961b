import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <PricingTeaser />
      <SocialProof />
      <CTA />
    </main>
  )
}

function PricingTeaser() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        '3 signals per day',
        '15-minute delay',
        'Basic explanations',
      ],
      cta: 'Get Started',
      featured: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      features: [
        'Unlimited signals',
        'Real-time alerts',
        'Detailed AI reasoning',
        'Email support',
      ],
      cta: 'Start Free Trial',
      featured: true,
    },
    {
      name: 'Elite',
      price: '$79',
      period: 'per month',
      features: [
        'Everything in Pro',
        'API access',
        'Priority support',
        'Custom alerts',
      ],
      cta: 'Go Elite',
      featured: false,
    },
  ]

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="font-sans text-lg md:text-xl text-ivory/80 max-w-2xl mx-auto">
            Start free. Upgrade when you're ready for real-time signals and deeper insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-sm p-8 transition-all duration-300 ${
                plan.featured
                  ? 'bg-burgundy text-ivory scale-105 shadow-2xl'
                  : 'bg-ivory/10 text-ivory hover:bg-ivory/20'
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="font-serif text-4xl font-bold mb-1">
                  {plan.price}
                  <span className="text-base font-sans font-normal ml-1">
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.featured ? 'text-gold' : 'text-gold'
                      }`}
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
                    <span className="font-sans">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-sm font-sans font-medium text-lg transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gold text-charcoal hover:bg-gold/90'
                    : 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-charcoal'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  const testimonials = [
    {
      quote: "Finally, an AI that explains its reasoning. I can actually trust these signals.",
      author: 'Michael R.',
      role: 'Day Trader',
    },
    {
      quote: "The plain-English explanations changed how I trade. No more black box predictions.",
      author: 'Sarah L.',
      role: 'Retail Investor',
    },
    {
      quote: "GridNorth gives me the 'why' behind every signal. That's a game-changer.",
      author: 'James T.',
      role: 'Options Trader',
    },
  ]

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Trusted by Traders Who Demand Transparency
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="glass-card">
              <svg
                className="w-8 h-8 text-gold mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="font-sans text-lg text-charcoal/80 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-sans font-semibold text-charcoal">
                  {testimonial.author}
                </p>
                <p className="font-sans text-sm text-charcoal/60">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-burgundy">10K+</p>
              <p className="font-sans text-sm text-charcoal/60">Active Traders</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-burgundy">85%</p>
              <p className="font-sans text-sm text-charcoal/60">Win Rate</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-burgundy">4.8/5</p>
              <p className="font-sans text-sm text-charcoal/60">User Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
