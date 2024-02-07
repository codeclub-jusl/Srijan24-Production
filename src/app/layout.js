import { Inter } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '@/store/provider'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "SRIJAN'24 | Jadavpur University",
    description:
        "Official Website for Srijan'24 - The Annual Techno-Management Fest Jadavpur University",
    metadataBase: new URL('https://srijanju.in'),
    manifest: "/manifest.json",
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <Head>
                <meta
                    name='description'
                    content="Official Website for Srijan'24 - The Annual Techno-Management Fest Jadavpur University"
                />
                <meta
                    name='keywords'
                    content='srijan, cultural, ju, fest, srijanju, technology, events, games, coding, srijan24, techfest, ai, management, jadavpur university'
                />
                <meta name='author' content='FETSU' />

                <meta property='og:locale' content='en_US' />
                <meta property='og:type' content='article' />
                <meta
                    property='og:title'
                    content="SRIJAN'24 | Jadavpur University"
                />
                <meta
                    property='og:description'
                    content="Official Website for Srijan'24 - The Annual Techno-Management Fest Jadavpur University"
                />
                <meta property='og:url' content='https://srijanju.in' />
                <meta
                    property='og:site_name'
                    content="SRIJAN'24 | Jadavpur University"
                />
                {/* <meta
                    property="og:image"
                    itemProp="image"
                    content="https://srijanju.in/preview.png"
                /> */}
                <link
                    rel='shortcut icon'
                    href='favicon.ico'
                    type='image/x-icon'
                />
                <link rel='icon' type='image/x-icon' href='favicon.ico' />
            </Head>
            <body className={inter.className}>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    )
}
