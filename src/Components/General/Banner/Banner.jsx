import React from 'react'

const Banner = ({Bg, text}) => {
  return (
    <div className='py-40 w-full bg-cover mt-20' style={{backgroundImage: `url(${Bg})`}}>
        <span className='text-center text-5xl text-main-green font-semibold block'>{text}</span>
    </div>
  )
}

export default Banner