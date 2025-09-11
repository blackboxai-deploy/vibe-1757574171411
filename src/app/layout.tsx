import type { Metadata } from 'next'
import { Inter, Noto_Sans_Bengali } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const notoSansBengali = Noto_Sans_Bengali({ 
  subsets: ['bengali'],
  variable: '--font-bengali',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '🎉 Happy Birthday Apu 🎂',
  description: 'A special birthday wishes page with love and celebration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" className={`${inter.className} ${notoSansBengali.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ec4899" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}