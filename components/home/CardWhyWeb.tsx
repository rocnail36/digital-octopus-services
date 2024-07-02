import { Advantage } from '@/interfaces/interfaces'
import Image from 'next/image'
import React from 'react'


interface props {
    whyContent: Advantage
}

const CardWhyWeb = ({whyContent}:props) => {
    const {body,icon,title,color} = whyContent

    const colors:  {[key:string]:string} = {
      red: "bg-red",
      purple: "bg-purple",
      blue: "bg-blue",
      green: "bg-green",
      browm: "bg-browm",
      yellow: "bg-yellow"
    }

  return (
    <div className='h-[190px] group  box-content shadow-md border-[1px] max-w-[300px] hover:scale-105 transition-all border-[#EAEAEA] py-[10px] px-2 rounded-lg lg:h-[250px] hover:bg-gradient-to-r from-sky-400 to-sky-500'>
               <div className={`w-[50px] h-[50px] ${colors[color]} group-hover:bg-white  flex justify-center items-center rounded-md mb-[3px] lg:mb-[8px] xl:w-[70px] xl:h-[70px]`}>
               <Image src={icon} alt='logo' width={35} height={35} />
               </div>
               <h3 className='group-hover:text-white font-lato text-[#393939] mb-[5px] sm:text-[20px] lg:text-[25px] lg:mb-[12px] xl:text-[32px] '>{title}</h3>
               <p className=' group-hover:text-white text-[#727272] font-medium text-[14px] sm:text-[16px] lg:text-[18px]'>{body}</p>
            </div>
  )
}

export default CardWhyWeb