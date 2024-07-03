"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'






const Navbar = () => {


  const [isOpen, setisOpen] = useState(false)

  console.log(isOpen)

  return (
    <div className='w-full py-2 flex justify-between items-center pr-2'>
    <div className='flex items-center'>
    <Image src={'/logo.png'} alt='logo octopus' width={50} height={38} />
    <p className='font-beba md:text-[25px]'>DIGITAL OCTOPUS SERVICES</p>
    </div>
    <div className={`bg-white h-[100vh] w-[100vw] close ${isOpen && "open"} transition-all fixed top-0 left-0 flex flex-col justify-center items-center z-[100] gap-10  md:h-auto md:w-auto md:relative md:flex-row md:translate-x-0 md:gap-3`}>
            
            <Image onClick={() => setisOpen(!isOpen)}  className='absolute top-3 right-3 cursor-pointer md:hidden' src={"/cancelar.svg"} alt='cancelar' width={30} height={35} />
             
            <Link 
            onClick={() => setisOpen(!isOpen)} className='after:w-[0%] hover:after:w-[100%] after:transition-all after:bottom-[-2px] after:left-0 after:absolute after:h-[2px] after:rounded-lg after:bg-blue relative  border-solid border-black box-border' href={`#home`} >INICIO</Link>
            <Link 
            onClick={() => setisOpen(!isOpen)} className='after:w-[0%] hover:after:w-[100%] after:transition-all after:bottom-[-2px] after:left-0 after:absolute after:h-[2px] after:rounded-lg after:bg-blue relative  border-solid border-black box-border' href={`#why_web`} >¿WEB?</Link>
            <Link 
            onClick={() => setisOpen(!isOpen)} className='after:w-[0%] hover:after:w-[100%] after:transition-all after:bottom-[-2px] after:left-0 after:absolute after:h-[2px] after:rounded-lg after:bg-blue relative  border-solid border-black box-border' href={`#why_us`} >¿NOSOTROS?</Link>
            <Link 
            onClick={() => setisOpen(!isOpen)} className='after:w-[0%] hover:after:w-[100%] after:transition-all after:bottom-[-2px] after:left-0 after:absolute after:h-[2px] after:rounded-lg after:bg-blue relative  border-solid border-black box-border' href={`#services`} >SERVICIOS</Link>
            <Link 
            onClick={() => setisOpen(!isOpen)} className='bg-sky-500 rounded-md py-[5px] px-[10px] text-white hover:scale-105' href={"https://wa.me/584165458026"} target='_blank' >WHATSAPP</Link>
    </div>
    <div className='md:hidden' onClick={() => setisOpen(!isOpen)}>
        <Image  className='cursor-pointer' src={'/hamburger.svg'} alt='icon-hamburguer' width={30} height={35}/>
    </div>
    </div>
  )
}

export default Navbar