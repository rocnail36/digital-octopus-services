import CardServices from '@/components/home/CardServices'
import { serviceslist } from '@/constant/Adventages'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#D9D9D9] flex flex-col items-center font-lato pt-4 pb-16 text-center px-[10px]'>
        <h4 className='font-extrabold text-[10px] sm:text-[16px] xl:text-[20px]'>IMPACTA EL MUNDO CON LA TECNOLOGIA</h4>
        <h2 className='font-beba block text-[70px] text-[#006494] leading-[80px] sm:text-[120px] sm:leading-[110px] tracking-[.25rem] xl:text-[250px] xl:leading-[220px]'>SERVICIOS</h2>
        <div className='font-lato max-w-[935px] grid gap-5 mt-[-28px] justify-center md:grid-cols-3 lg:mt-[-62px] xl:max-w-[1200px]'>
            {serviceslist.map(item => (
                <CardServices key={item.title} item={item} /> 
            ))}
        </div>
    </div>
  )
}

export default Services