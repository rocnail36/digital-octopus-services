import React from 'react'

const Hero = () => {
  return (
    <div className='bg-hero-phone bg-center bg-cover h-[350px] flex justify-center items-center text-white flex-col mb-10 md:bg-hero-desktop md:h-[700px] lg:mb-16'>
     
        <h1 className='font-beba text-[32px] text-center sm:text-[48px] md:text-[64px]'>SERVICIO DE DESARROLLO WEB</h1>
        <p className='text-center  w-[80%] mb-[25px] font-light sm:text-[22px] md:text-[32px] lg:max-w-[700px]'>creamos productos digitales que se ajustan a tu presupuesto y objetivos.</p>
        <button className='bg-[#00A6FB] font-lato font-bold text-[14px] rounded-md py-[5px] px-[10px] sm:text-[16px] md:text-[20px]'>
        WhatsApp
        </button>
    </div>
  )
}

export default Hero