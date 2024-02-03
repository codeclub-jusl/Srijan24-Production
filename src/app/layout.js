import { Inter } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '@/store/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Srijan 24',
    description:
        'Official Website for Srijan 2024 - The Annual Techno-Management Fest Jadavpur University',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    )
}
