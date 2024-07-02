import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-4 flex justify-center flex-col'>
        <div className='flex flex-col items-center'>
        <Image className='w-[50px] h-[50px]'  src={`/logo.png`} width={50} height={50} alt='logo'/>
        <p className='font-beba text-xl'>DIGITAL OCTOPUS SERVICES</p>
        </div>
        <div className='gap-2 justify-center items-center hidden md:flex'>
            <Link className='after:w-[0%] hover:after:w-[100%] after:transition-all after:bottom-[-2px] after:left-0 after:absolute after:h-[2px] after:rounded-lg after:bg-blue relative  border-solid border-black box-border' href={`#home`} >INICIO</Link>
            <Link className='after:w-[0%] hover:after:w-[100%] after:transition-all after:bottom-[-2px] after:left-0 after:absolute after:h-[2px] after:rounded-lg after:bg-blue relative  border-solid border-black box-border' href={`#why_web`} >¿WEB?</Link>
            <Link className='after:w-[0%] hover:after:w-[100%] after:transition-all after:bottom-[-2px] after:left-0 after:absolute after:h-[2px] after:rounded-lg after:bg-blue relative  border-solid border-black box-border' href={`#why_us`} >¿NOSOTROS?</Link>
            <Link className='after:w-[0%] hover:after:w-[100%] after:transition-all after:bottom-[-2px] after:left-0 after:absolute after:h-[2px] after:rounded-lg after:bg-blue relative  border-solid border-black box-border' href={`#services`} >SERVICIOS</Link>
            </div>
    </div>
  )
}

export default Footer