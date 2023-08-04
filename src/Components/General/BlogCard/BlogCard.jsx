import UserImage from '../../../assets/Icons/user.svg'
import Arrow from '../../../assets/Icons/arrow.png'
import { Link } from 'react-router-dom'

const BlogCard = ({BlogImage, Day, Month, Author, Title, Description}) => {
  return (
    <div className='w-2/5 h-80 rounded-lg relative bg-cover bg-no-repeat' style={{backgroundImage: `url(${BlogImage})`, minWidth: '350px'}}>
        <span className='w-14 h-14 flex items-center justify-center rounded-full bg-white leading-tight font-bold text-main-green absolute text-center top-4 left-4'>{Day} <br /> {Month}</span>
        <div className='absolute top-52 left-6 right-6 bg-white p-6 rounded-xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
            <div className='flex gap-2'>
                <img className=' w-4' src={UserImage} alt="user-icon" />
                <span className=' text-sm text-main-green'>{Author}</span>
            </div>
            <h6 className='mt-2 text-xl text-main-green font-bold'>{Title}</h6>
            <p className='text-base leading-tight mt-2'>{Description}</p>
            <Link className='flex items-center gap-2 mt-4 text-main-green font-bold' to='/blog-single'>Read More <img src={Arrow} alt="" /></Link>
        </div>
    </div>
  )
}

export default BlogCard