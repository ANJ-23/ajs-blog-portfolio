// Base layout throughout the site
// This site's layout (so far) = Navbar, static page content (home and/or blog posts), Footer, analytics stuff behind the scenes

import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `Andrew Joo - Portfolio Website`,
    template: `%s | Andrew Joo's Portfolio Website`,
  },
  description: `This is a portfolio website made by Andrew Joo. It uses Next.js, TypeScript, Tailwind.css, and Vercel to demonstrate full-stack web development skills.`,
  openGraph: {
    title: `Andrew Joo - Portfolio Website`,
    description: `This is a portfolio website made by Andrew Joo. It uses Next.js, TypeScript, Tailwind.css, and Vercel to demonstrate full-stack web development skills.`,
    url: baseUrl,
    siteName: `Andrew Joo - Portfolio Website`,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased md:mx-0">
        <nav className="bg-slate-200 dark:bg-slate-800">
          <Navbar />
        </nav>
        <main className="flex-auto min-w-0 flex flex-col px-2 mx-4 md:px-0 max-w-xl md:mx-auto">
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
