/* Cache bust - v15 restore */
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, DM_Serif_Display, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ClientLayout } from '@/components/client-layout'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800']
})

const dmSerifDisplay = DM_Serif_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400']
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600']
})

export const metadata: Metadata = {
  title: {
    default: 'ConnectPath | Contact Center Quality Oversight',
    template: '%s | ConnectPath'
  },
  description: 'Real-time dashboards. Live coaching. Complete interaction history. ConnectPath is the contact center platform built for supervisors who are responsible for quality. Powered by AWS.',
  keywords: ['Amazon Connect', 'contact center', 'supervisor dashboard', 'real-time monitoring', 'cloud contact center', 'ConnectPath', 'CloudHesive', 'quality oversight'],
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
    <html lang="en" className={`${plusJakartaSans.variable} ${dmSerifDisplay.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  )
}
