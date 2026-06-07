import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'GridNorth — AI Stock Predictions with Explanations',
  description: 'AI-powered stock predictions that explain WHY, not just WHAT. Get transparent, explainable AI signals for smarter trading decisions.',
  keywords: ['AI stock prediction', 'explainable AI', 'stock signals', 'trading AI', 'GridNorth'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gpond.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-ivory text-charcoal antialiased">{children}</body>
    </html>
  )
}
