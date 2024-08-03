import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="max-w-full xl:min-h-[100vh] md:min-h-[60vh] max-md:min-h-[45vh]  flex justify-center items-center bg-black mx-auto max-lg:px-0 max-lg:flex-col">
        <div className="fixed max-w-[1502px] justify-end w-[100%] lg:w-full">
          <Image
            width={1920}
            height={1080}
            priority
            src=""
            alt="High class balloon decor by Felicia"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center relative w-full text-white font-kalnia animate-fade">
          <h1 className="text-[9vw] font-bold lg:text-[7vw] text-center">
            Gold Balloon Package
          </h1>
          <h2 className="text-[6vw] lg:text-[4vw] font-semibold text-center">
            Starting at $500
          </h2>
        </div>
      </div>
      
    </div>
  )
}

export default page
