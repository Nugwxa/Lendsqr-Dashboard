import '@/styles/globals.scss'
import { Work_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lendsqr Test - OJ Abba',
}

// Setup Fonts
const avenirNext = localFont({
  src: [
    {
      path: './fonts/AvenirNextLTPro-Regular.otf',
      weight: '400',
    },
    {
      path: './fonts/AvenirNextLTPro-Bold.otf',
      weight: '700',
    },
  ],
  variable: '--font-avenirNext',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-workSans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${avenirNext.variable} ${workSans.variable}`}>
        {children}
      </body>
    </html>
  )
}
