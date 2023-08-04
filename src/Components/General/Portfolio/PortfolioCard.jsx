import LeftArrow from '../../../assets/Icons/left-arrow.svg'
import { Link } from 'react-router-dom'
import './Portfolio.css'

const PortfolioCard = ({PortfolioImage, Title, Label}) => {
  return (
    <div>
        <div className='bg-image w-[350px] h-[350px] rounded-3xl flex items-center justify-center' style={{backgroundImage: `url(${PortfolioImage})`}}>
            <div className='bg-link hidden items-center justify-center w-[270px] h-[270px] bg-[rgba(255,255,255,0.7)] rounded-2xl'>
                <Link className='w-10 h-10 rounded-full bg-green flex items-center justify-center' to='/portfolio-single'>
                    <img src={LeftArrow} alt="" />
                </Link>
            </div>
        </div>
        <h6 className='text-main-green text-lg font-bold mt-4 leading-tight'>{Title}</h6>
        <span className='portfolio-span text-green'>{Label}</span>
    </div>
  )
}

export default PortfolioCard