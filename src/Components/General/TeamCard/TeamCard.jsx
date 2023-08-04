import Facebook from '../../../assets/Icons/facebook.png'
import Instagram from '../../../assets/Icons/instagram.png'

const TeamCard = ({Image, Name, Job}) => {
  return (
    <div className='w-[350px] rounded-md overflow-hidden bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <img className='w-[350px] h-[350px] object-cover' src={Image} alt="team-image" />
        <div className='p-5'>
            <h6 className='text-lg'>{Name}</h6>
            <div className='flex items-center justify-between'>
                <span className='team-name text-green'>{Job}</span>
                <div className='flex gap-2'>
                    <a href="#">
                        <img src={Facebook} alt="" />
                    </a>
                    <a href="#">
                        <img src={Instagram} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamCard