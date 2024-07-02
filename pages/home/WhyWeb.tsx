
import CardWhyWeb from '@/components/home/CardWhyWeb'
import { listAdvantages } from '@/constant/Adventages'
import Image from 'next/image'
import React from 'react'

const WhyWeb = () => {


  return ( 
    <div id='why_web' className='font-lato mb-14 animation_image'>
        <h2 className='font-bold text-[20px]  text-center mb-8 sm:text-[28px] lg:text-[48px] lg:mb-14'>¿Por que tener una pagina web?</h2>
        <div className='grid m-auto gap-[15px] sm:grid-cols-2 justify-items-center justify-center md:max-w-[680px] lg:grid-cols-3 lg:max-w-[1000px] lg:gap-[30px]'>
            {listAdvantages.map(item => (
              <CardWhyWeb key={item.title} whyContent={item}/>
            ))}
        </div>
        
    </div>
  )
}

export default WhyWeb