"use client"
import React, { useState } from 'react'

const Landing = () => {
    const [click, setClick] = useState(false); /*creates opposite state to open and close menu on click*/
    const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    setClick(true);
    setTimeout(() => {
        setIsVisible(false);
    }, 800)
}

  return (
    isVisible && (
    <div onClick={handleClick} className={`${click ? 'animate-fadeout':'fixed bg-black w-full h-full z-[1001] top-0 cursor-pointer'}`}>
      <video src='/Elevated.mp4' autoPlay muted className='fixed z-[1001] object-contain w-full h-full top-12 my-0 mx-auto'/>
    </div>
  )
  )
}

export default Landing
