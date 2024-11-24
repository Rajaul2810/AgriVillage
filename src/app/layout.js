import Footer from './Components/Footer'
import { Navbar } from './Components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StoreProvider from './provider';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400']
})
export const metadata = {
  title: 'AgriVillage',
  description: 'Agricultural Tourism and Product selling',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <StoreProvider>
          <ToastContainer />
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
