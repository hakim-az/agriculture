import Facebook from '../../../assets/Icons/facebook.png'
import Instagram from '../../../assets/Icons/instagram.png'

const Team = ({Image, Name, Job}) => {
  return (
    <div className='w-72 rounded-md overflow-hidden bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <img className='w-72 h-72 object-cover' src={Image} alt="" />
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

export default Team