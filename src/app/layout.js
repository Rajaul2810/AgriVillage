import Footer from './Components/Footer'
import { Navbar } from './Components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
})
export const metadata = {
  title: 'AgriVillage',
  description: 'Agricultural Tourism and Product selling',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
