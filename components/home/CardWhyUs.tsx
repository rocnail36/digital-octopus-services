import { WhyUs } from '@/interfaces/interfaces'
import Image from 'next/image'
import React from 'react'


interface Props {
    item: WhyUs
}

const CardWhyUs = ({item}:Props) => {
    const {body,title} = item
  return (
    <div className='flex items-start'>
        <Image className='' src={'/check-icon.svg'} alt='check-icon' width={35} height={35} />
        <div className='font-lato mt-[5px] sm:mt-[2px] xl:mt-[-7px]'>
            <h3 className='font-semibold text-[#121212] mb-2 sm:text-[20px] xl:text-[32px]' >{title}</h3>
            <p className='text-[14px] text-[#727272] sm:text-[16px] lg:text-[18px]'>{body}</p>
        </div>
    </div>
  )
}

export default CardWhyUs