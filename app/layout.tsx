import type { Metadata } from 'next'
import { Paytone_One } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'

const paytone = Paytone_One({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Taruna Tani & Website Bank Sampah',
  description: 'Taruna tani kita menari dengan kegembiraan di tanah subur. Bersama bank sampah, kita beriringan melodi kebaikan untuk lingkungan yang lebih baik.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={paytone.className}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
