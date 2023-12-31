import NavBar from '@/Components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/Components/Footer'

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best car in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
