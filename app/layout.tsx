/* Cache bust - v15 restore */
import type { Metadata, Viewport } from 'next'
import { Figtree, Besley, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ClientLayout } from '@/components/client-layout'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const figtree = Figtree({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800']
})

// h1 and h2 only, Regular 400 (italic allowed). Never bold.
const besley = Besley({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic']
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600']
})

export const metadata: Metadata = {
  title: {
    default: 'ConnectPath | Oversight for Human and AI Agents',
    template: '%s | ConnectPath'
  },
  description: 'Real-time dashboards. Live coaching. Complete interaction history. ConnectPath is the contact center platform built for supervisors who keep quality high across a mixed fleet of human and AI agents. Powered by AWS.',
  keywords: ['Amazon Connect', 'contact center', 'supervisor dashboard', 'real-time monitoring', 'cloud contact center', 'ConnectPath', 'CloudHesive', 'quality oversight', 'human and AI agent oversight', 'mixed agent fleet', 'SwarmControl'],
  authors: [{ name: 'CloudHesive' }],
  creator: 'CloudHesive',
  publisher: 'CloudHesive',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: './' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ConnectPath',
  },
  twitter: {
    card: 'summary_large_image',
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#E9F3FA' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1732' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${besley.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  )
}
