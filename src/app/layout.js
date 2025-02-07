import { Inter } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '@/store/provider'
import Head from 'next/head'
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "SRIJAN'25 | Jadavpur University",
    description: "Official Website for Srijan'25 - The Annual Techno-Management Fest Jadavpur University",
    metadataBase: new URL('https://srijanju.in'),
    manifest: "/manifest.json",
    keywords: ['srijan', 'cultural', 'ju', 'fest', 'srijanju', 'technology', 'events', 'games', 'coding', 'srijan25', 'techfest', 'ai', 'management', 'jadavpur university'],
    authors: [{ name: 'FETSU', url: 'https://srijanju.in' }],
    creator: 'FETSU',
    publisher: 'FETSU',
    openGraph: {
        title: "SRIJAN'25 | Jadavpur University",
        description: "Official Website for Srijan'25 - The Annual Techno-Management Fest of Jadavpur University",
        url: 'https://srijanju.in',
        siteName: "SRIJAN'25 | Jadavpur University",
        images: [
          {
            url: 'https://srijanju.in/website_preview.png', // Must be an absolute URL
            width: 1200,
            height: 640,
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <Head>
                <meta
                    name='description'
                    content="Official Website for Srijan'25 - The Annual Techno-Management Fest Jadavpur University"
                />
                <meta
                    name='keywords'
                    content='srijan, cultural, ju, fest, srijanju, technology, events, games, coding, srijan25, techfest, ai, management, jadavpur university'
                />
                <meta name='author' content='FETSU' />

                <meta property='og:locale' content='en_US' />
                <meta property='og:type' content='article' />
                <meta
                    property='og:title'
                    content="SRIJAN'25 | Jadavpur University"
                />
                <meta
                    property='og:description'
                    content="Official Website for Srijan'25 - The Annual Techno-Management Fest Jadavpur University"
                />
                <meta property='og:url' content='https://srijanju.in' />
                <meta
                    property='og:site_name'
                    content="SRIJAN'25 | Jadavpur University"
                />
                <meta
                    property="og:image"
                    itemProp="image"
                    content="https://srijan25.vercel.app/website_preview.png"
                />
                <link
                    rel='shortcut icon'
                    href='favicon.ico'
                    type='image/x-icon'
                />
                <link rel='icon' type='image/x-icon' href='favicon.ico' />
            </Head>
            <body className={inter.className}>
                <ReduxProvider>{children}</ReduxProvider>
                <Analytics/>
            </body>
        </html>
    )
}
