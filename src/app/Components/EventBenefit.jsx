import React from 'react'
import { eventBenefits } from '../libs/Data'
import { BiCheckCircle } from "react-icons/bi";
const EventBenefit = () => {
  return (
    <div>
        <h1 className=' text-lg font-bold'>ইভেন্টর সুবিধা সমূহ</h1>
        <div>
            {
                eventBenefits.map((pb)=>
                 <div key={pb.id} className=' flex gap-2 my-5 items-center'>
                   <p className='p-2 rounded-full shadow-md bg-white'><BiCheckCircle color='green'/></p>
                   <p>{pb.benefit}</p>
                 </div>
                )
            }
        </div>

    </div>
  )
}

export default EventBenefit