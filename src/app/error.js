'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className=' flex justify-center items-center bg-slate-100 h-screen'>
      <div className=' bg-white border shadow-lg rounded-md p-5 text-center'>
        <h2 className=' text-lg font-bold text-gray-700'>Something went wrong!</h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className='btn rounded-md shadow-md py-3'
        >
          Try again
        </button>
      </div>
    </div>
  )
}