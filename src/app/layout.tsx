import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export const metadata: Metadata = {
  title: 'Restaurant Hub',
  description: 'Restaurant Hub application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main className='w-11/12 mx-auto'>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  )
}
