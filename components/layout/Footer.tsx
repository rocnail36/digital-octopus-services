import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-4 flex justify-center flex-col'>
        <div className='flex flex-col items-center'>
        <Image  src={`/logo.png`} width={50} height={50} alt='logo'/>
        <p className='font-beba text-xl'>DIGITAL OCTOPUS SERVICES</p>
        </div>
            <div className='flex gap-2 justify-center'>
            <Link href={`#`}>INICIO</Link>
            <Link href={`#`}>¿WEB?</Link>
            <Link href={`#`}>¿NOSOTROS?</Link>
            <Link href={`#`}>SERVICIOS</Link>
            </div>
    </div>
  )
}

export default Footer