import Link from 'next/link'

export default function NotFound() {
  return (
    <div className=' h-screen flex justify-center items-center bg-slate-100'>
      <div className=' bg-white shadow-sm p-5 rounded-sm border'>
        <h2 className=' text-center text-gray-600 text-xl font-bold'>Not Found</h2>
        <p className='py-3 text-gray-600'>Could not find requested resource</p>
        <Link className=' bg-gray-400 rounded-md shadow-sm p-2' href="/">Return Home</Link>
      </div>
    </div>
  )
}