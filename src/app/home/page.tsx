import React from 'react'
import PackageCards from '../components/PackageCards'
import BalloonCards from '../components/BalloonCards'
import Hero from '../components/Hero'

const page = () => {
  return (
    <div>
          <Hero />
          <PackageCards />
          <BalloonCards />
    </div>
  )
}

export default page
