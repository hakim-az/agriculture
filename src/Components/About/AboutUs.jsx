import AboutUsImage from '../../assets/About/about-us.png'
import Title from '../../Components/General/Title/Title'
import ModernImage from '../../assets/About/modern-icon.svg'
import GrowthImage from '../../assets/About/growth-icon.svg'
import Button from '../../Components/General/Button/Button'

const AboutUs = () => {
  return (
    <section className='box-container py-20 flex items-center justify-between flex-wrap max-[768px]:flex-col max-[768px]:justify-center'>
        {/* Image */}
        <img className='w-1/2 p-5 max-[768px]:p-0' src={AboutUsImage} alt="fruits-image" style={{minWidth: '350px'}}/>
        {/* Content */}
        <div className='w-1/2 ' style={{minWidth: '350px'}}>
            <Title Title='We do Creative Things for Success' Label='About Us' Size='3' /> 
            <p className='pb-3'>
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>
            <p className='pb-3'>
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>
            <div className='flex py-5 mb-10 flex-wrap gap-y-4'>
                <div className='w-1/2 flex items-center max-[400px]:w-full'>
                    <img className='w-16 m-2' src={ModernImage} alt="" />
                    <h6 className='text-xl'>Modern Agriculture Equipment</h6>
                </div>
                <div className='w-1/2 flex items-center max-[400px]:w-full'>
                    <img className='w-16 m-2' src={GrowthImage} alt="" />
                    <h6 className='text-xl'>Modern Agriculture Equipment</h6>
                </div>
            </div>
            <Button arrow={true} text='Explore More' bg='bg-main-green' textColor='text-white' />
        </div>
    </section>
  )
}

export default AboutUs