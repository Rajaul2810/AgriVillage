import Link from 'next/link'

export default function NotFound() {
  return (
    <div className=' h-screen flex justify-center items-center'>
      <div>
        <h2>Not Found</h2>
        <p className='py-3'>Could not find requested resource</p>
        <Link className=' bg-white rounded-md shadow-sm p-2' href="/">Return Home</Link>
      </div>
    </div>
  )
}