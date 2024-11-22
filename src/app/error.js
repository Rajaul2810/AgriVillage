'use client'

import { useEffect } from 'react'
import { FiAlertOctagon, FiRefreshCw } from 'react-icons/fi'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100'>
      <div className='bg-white shadow-lg rounded-xl p-8 max-w-md w-11/12 text-center border border-gray-100'>
        <div className='flex justify-center mb-6'>
          <FiAlertOctagon className='w-20 h-20 text-red-500 animate-pulse' />
        </div>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Something went wrong!</h2>
        <p className='text-gray-600 mb-8'>We encountered an error while processing your request.</p>
        <button
          onClick={() => reset()}
          className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg'
        >
          <FiRefreshCw className='w-5 h-5' />
          Try again
        </button>
      </div>
    </div>
  )
}