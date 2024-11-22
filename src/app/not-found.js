import Link from 'next/link'
import { FiAlertTriangle, FiHome } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100'>
      <div className='bg-white shadow-lg rounded-xl p-8 max-w-md w-11/12 text-center border border-gray-100'>
        <div className='flex justify-center mb-6'>
          <FiAlertTriangle className='w-20 h-20 text-amber-500 animate-bounce' />
        </div>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Page Not Found</h2>
        <p className='text-gray-600 mb-8'>Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        <Link 
          href="/" 
          className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-lime-400 text-white font-medium rounded-lg hover:from-green-600 hover:to-lime-500 transition-all duration-300 shadow-md hover:shadow-lg'
        >
          <FiHome className='w-5 h-5' />
          Return Home
        </Link>
      </div>
    </div>
  )
}