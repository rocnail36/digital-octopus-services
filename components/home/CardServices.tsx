import { Service } from '@/interfaces/interfaces'
import Image from 'next/image'
import React from 'react'


interface Props {
    item:Service
}

const CardServices = ({item}:Props) => {

   const {body,number,title,color} = item
   const colors:  {[key:string]:string} = {
    red: "bg-red",
    purple: "bg-purple",
    blue: "bg-blue",
    green: "bg-green",
    browm: "bg-browm",
    yellow: "bg-yellow"
  }

  return (
    <div className='bg-white text-center rounded-lg shadow-md py-2 px-2 flex flex-col justify-center items-center gap-5 max-w-[380px] xl:h-[635px] xl:w-[380px]'>
       <p className='font-extrabold text-[#6F6D6D] lg:text-[20px]'>{`0${number}.`}</p>
       <div className={`${colors[color]} w-[80px] h-[80px] rounded-[50%] flex justify-center items-center lg:w-[100px] lg:h-[100px]`}>
        <Image src={`/service-icon-${number}.png`} alt='service-icon' width={50} height={50}/>
       </div>
       <h3 className='font-semibold text-[20px] lg:text-[32px]'>{title}</h3>
       <p className='text-[#393939e7] italic lg:text-[20px] xl:h-[100px]'>{body}</p>
       <Image src={`/image-service-${number}.webp`} className='w-[235px] h-[135px]'  width={235} height={135} alt='servicio web' />
    </div>
  )
}

export default CardServices