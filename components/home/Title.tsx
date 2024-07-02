"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Title = () => {
  return (
    <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'SERVICIO DE DESARROLLO WEB',
      // wait 1s before replacing "Mice" with "Hamsters"
    ]}
    wrapper="span"
    className='font-beba text-[32px] text-white hidden h-[50px] text-center sm:text-[48px] sm:mb-[20px] md:text-[64px] md:h-[70px]'
    speed={50}
    style={{  display: 'block'}}
    repeat={1}
    cursor={false}
  />
  )
}

export default Title