import Image from 'next/image'
import React from 'react'

const ProjectGallery = ({imgs}) => {
  return (
    <div>
        <div className=" flex justify-center mt-5 pb-10">
            <div className=" w-11/12 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {imgs.map((item) => (
                <div key={item.id} className="">
                  <Image
                    src={item.photo}
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