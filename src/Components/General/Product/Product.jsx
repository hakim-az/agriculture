import React from 'react'
import Star from '../../../assets/Icons/star.png'

const Product = ({ProductImage, Label, Title, oldPrice, newPrice}) => {
  return (
    <div className=' w-72 relative rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <span className='bg-main-green text-white text-center text-sm px-2 py-2 rounded-md absolute top-4 left-4'>{Label}</span>
        <img className='w-72 h-72 object-contain' src={ProductImage} alt="product-image" />
        <div className='p-3'>
            <h6 className='text-xl mb-2'>{Title}</h6>
            <div className='flex items-center justify-between border-t border-t[#DEDDDD] pt-2'>
                <div>
                    <del className='text-[#B8B8B8] text-sm mr-2'>${oldPrice}</del>
                    <span className='text-main-green font-bold'>${newPrice}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={Star} alt="star-icon" />
                    <img src={Star} alt="star-icon" />
                    <img src={Star} alt="star-icon" />
                    <img src={Star} alt="star-icon" />
                    <img src={Star} alt="star-icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product