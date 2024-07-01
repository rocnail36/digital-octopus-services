import Hero from '@/pages/home/Hero'
import Services from '@/pages/home/Services'
import WhyUs from '@/pages/home/WhyUs'
import WhyWeb from '@/pages/home/WhyWeb'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <WhyWeb/>
        <WhyUs/>
        <Services/>
    </div>
  )
}

export default page
