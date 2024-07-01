import Image from 'next/image'
import React from 'react'




const Navbar = () => {
  return (
    <div className='w-full py-2 flex justify-between items-center pr-2'>
    <div className='flex items-center'>
    <Image src={'/logo.png'} alt='logo octopus' width={50} height={50} />
    <p className='font-beba'>DIGITAL OCTOPUS SERVICES</p>
    </div>
    <div>
        <Image src={'/hamburger.svg'} alt='icon-hamburguer' width={30} height={35}/>
    </div>
    </div>
  )
}

export default Navbar