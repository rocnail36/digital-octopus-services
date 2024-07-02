import Title from '@/components/home/Title'
import Link from 'next/link'
import React from 'react'


const Hero = () => {
  
  return (

    <div id='home' className='bg-hero-phone bg-center  bg-cover h-[350px] flex justify-center items-center text-white flex-col mb-10 md:bg-hero-desktop md:h-[700px] lg:mb-16'>
        <Title/>
        <h1 className='font-beba hidden text-[32px] text-center sm:text-[48px] md:text-[64px]'>SERVICIO DE DESARROLLO WEB</h1>
        <p className='text-center  w-[80%] mb-[25px] font-light sm:text-[22px] md:text-[32px] lg:max-w-[700px]'>creamos productos digitales que se ajustan a tu presupuesto y objetivos.</p>
        <button className='bg-sky-500 hover:scale-105 font-lato font-bold text-[14px] rounded-md py-[5px] px-[10px] sm:text-[16px] md:text-[20px]'>
       <Link href={"https://wa.me/584165458026"}>WhatsApp</Link> 
        </button>
    </div>
 
  )
}

export default Hero