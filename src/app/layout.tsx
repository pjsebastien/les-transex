import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import Disclaimer from '@/components/Disclaimer'
import FloatingCTA from '@/components/FloatingCTA'
import { OrganizationSchema, WebSiteSchema } from '@/components/JsonLd'
import { SITE_NAME, SITE_DOMAIN } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

const BASE_URL = `https://www.${SITE_DOMAIN}`;

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Site de rencontre trans en France`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Rencontre trans et transgenre partout en France. Trouvez des profils vérifiés près de chez vous. Inscription gratuite sur notre site partenaire.',
  keywords: ['rencontre trans', 'site rencontre trans', 'rencontre transgenre', 'trans France', 'rencontre travesti'],
  authors: [{ name: SITE_NAME }],
  robots: 'index, follow',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE_NAME,
    url: BASE_URL,
    images: [
      {
        url: '/images/profile/favicon.png',
        width: 512,
        height: 512,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Site de rencontre trans en France`,
    description: 'Rencontre trans et transgenre partout en France. Trouvez des profils vérifiés près de chez vous.',
    images: ['/images/profile/favicon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Disclaimer />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <CookieBanner />
      </body>
    </html>
  )
}
