import React from 'react'
import Button from '../Button/Button'
import NewsBg from '../../../assets/Backgrounds/newsletter.jpg'

const Newsletter = () => {
  return (
    <div className='w-full my-14 flex items-center justify-between flex-wrap p-14 gap-y-10 max-[768px]:px-5 bg-center bg-cover bg-no-repeat rounded-3xl max-[768px]:flex-col' style={{backgroundImage : `url(${NewsBg})`}}>
        <span className='text-white text-[48px] font-bold leading-tight w-1/3 max-[768px]:w-full max-[768px]:text-center'>Subscribe to our Newsletter</span>
        <div className='flex items-stretch justify-evenly gap-5 flex-wrap'>
            <input className='w-[250px] px-3 outline-none border-none rounded-md h-[54px]' type="text" placeholder='Your Email Address' />
            <Button text='Subscribe' textColor='text-white' bg='bg-main-green' borderColor='border-main-green'  />
        </div>
    </div>
  )
}

export default Newsletter