import React from 'react'

const items = new Array(144).fill(0)
const Profile = () => {
  
  return (
    <div>
      <div className=' h-64 w-64 bg-black mt-3 p-1'>
            <ul className=' grid grid-cols-12 gap-1 place-content-center place-items-center'>
              {
                items.map((item, index)=>
                <li key={index} className={`h-4 w-4 ${index%2!=0 ? 'bg-black':'bg-white'} `}></li>
                )
              }
              
            </ul>
      </div>
    </div>
  )
}

export default Profile