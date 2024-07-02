import CardWhyUs from '@/components/home/CardWhyUs'
import { whyUsList } from '@/constant/Adventages'
import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
  return (
    <div id='why_us' className='px-[5px] mb-12 max-w-[400px] m-auto md:max-w-none md:pl-0 md:mb-20 animation_image '>
        <h2 className='font-bold text-[20px] text-center mb-8 sm:text-[28px]  lg:text-[48px] lg:mb-12'>¿Por que elegirnos?</h2>
        <div className='flex justify-center  mb-8  gap-2'>
            <div className=' relative md:block md:w-[50%]'>
            <Image loading="lazy" src={'/image-whyUs.webp'} alt='equipo de software' fill style={{objectFit:"cover"}}/>
            </div>
            <div className='grid gap-[35px] md:w-[50%] px-4 max-w-[720px]'>
                {whyUsList.map(item => (
                  <CardWhyUs item={item} key={item.title} />
                ))}
        <button className='bg-[#00A6FB] hover:scale-105 justify-self-start text-white font-lato font-bold text-[18px] rounded-md py-[5px] px-[10px]'>
        ¡PRESUPUESTA TU WEB!
        </button>
            </div>
         
        </div>
        
    </div>
  )
}

export default WhyUs