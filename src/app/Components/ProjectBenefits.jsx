import React from 'react'
import { projectBenefits } from '../libs/Data'
import { BiCheckCircle } from "react-icons/bi";

const ProjectBenefits = () => {
  return (
    <div>
        <h1 className=' text-lg font-bold text-black'>প্রজেক্টের সুবিধা সমূহ</h1>
        <div>
            {
                projectBenefits.map((pb)=>
                 <div key={pb.id} className=' flex gap-2 my-5 items-center'>
                   <p className='p-2 rounded-full shadow-md bg-white'><BiCheckCircle color='green'/></p>
                   <p className=' text-black'>{pb.benefit}</p>
                 </div>
                )
            }
        </div>

    </div>
  )
}

export default ProjectBenefits