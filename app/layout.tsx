import './globals.css'
import type { Metadata } from 'next'

import {Poppins} from 'next/font/google' 

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Movie Database',
  description: 'Found your favorite movies here',
  keywords: ["movie", "database", "film", "cinema"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
