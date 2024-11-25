import Image from 'next/image'
import React from 'react'
import { projects } from '../libs/Data'

const ProjectGallery = ({params}) => {
  const project = projects.find((pd)=>pd.id == params.id)
  return (
    <div>
        <div className=" flex justify-center mt-5 pb-10">
            <div className=" w-11/12 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {project?.gallery.map((item, index) => (
                <div key={index} className="">
                  <Image
                    src={item}
                    alt=""
                    className=" rounded-sm shadow-sm"
                  />
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default ProjectGallery