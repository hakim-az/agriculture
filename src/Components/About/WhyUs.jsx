import Title from '../../Components/General/Title/Title'
import Image from '../../assets/About/why-us.png'
import ReturnIcon from '../../assets/About/return-icon.svg'
import FreshIcon from '../../assets/About/fresh-icon.svg'
import SupportIcon from '../../assets/About/support-icon.svg'
import PaimentIcon from '../../assets/About/paiment-icon.svg'

const WhyUs = () => {
  return (
    <section className='bg-[#F9F8F8] '>
        <div className="box-container flex items-center flex-wrap gap-y-20 pt-24 max-[768px]:flex-col">
            {/* content */}
            <div className='w-1/2' style={{minWidth: '350px'}}>
                <Title Title='We do not buy from the open market & traders.' Label='Why Chose Us' Size='3' />
                <p>
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown
                </p>
                <div className='flex-col'>
                    <div className='my-5 inline-flex items-center bg-[#ECECEC] rounded-full py-4 px-8'>
                        <div className='w-5 h-5 rounded-full border-4 border-green mr-2'></div>
                        <h6 className='text-xl'>100% Natural Product</h6>
                    </div>
                    <p className='mx-10'>
                        Simply dummy text of the printing and typesetting industry Lorem Ipsum
                    </p>
                    <div className='my-5 inline-flex items-center bg-[#ECECEC] rounded-full py-4 px-8'>
                        <div className='w-5 h-5 rounded-full border-4 border-green mr-2'></div>
                        <h6 className='text-xl'>Increases resistancet</h6>
                    </div>
                    <p className='mx-10'>
                        Simply dummy text of the printing and typesetting industry Lorem Ipsum
                    </p>
                </div>
            </div>
            {/* image */}
            <img className='w-2/5 mx-auto' src={Image} alt="" style={{minWidth: '350px'}} />
        </div>
        <div className="box-container flex items- flex-wrap gap-y-14 pt-20 pb-24">
            <div className='bg-white px-5 py-14 rounded-xl flex-col justify-center w-64 mx-auto'>
                <img className='bg-[#F9F8F8] rounded-md p-2 mx-auto mb-5 w-20' src={ReturnIcon} alt="" />
                <h5 className='text-2xl font-semibold text-center py-2'>Return Policy</h5>
                <p className='text-base text-center'>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className='bg-white px-5 py-14 rounded-xl flex-col justify-center w-64 mx-auto'>
                <img className='bg-[#F9F8F8] rounded-md p-2 mx-auto mb-5 w-20' src={FreshIcon} alt="" />
                <h5 className='text-2xl font-semibold text-center py-2'>100% Fresh</h5>
                <p className='text-base text-center'>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className='bg-white px-5 py-14 rounded-xl flex-col justify-center w-64 mx-auto'>
                <img className='bg-[#F9F8F8] rounded-md p-2 mx-auto mb-5 w-20' src={SupportIcon} alt="" />
                <h5 className='text-2xl font-semibold text-center py-2'>Support 24/7</h5>
                <p className='text-base text-center'>Simply dummy text of the printintypesetting industry.</p>
            </div>
            <div className='bg-white px-5 py-14 rounded-xl flex-col justify-center w-64 mx-auto'>
                <img className='bg-[#F9F8F8] rounded-md p-2 mx-auto mb-5 w-20' src={PaimentIcon} alt="" />
                <h5 className='text-2xl font-semibold text-center py-2'>Secured Payment</h5>
                <p className='text-base text-center'>Simply dummy text of the printintypesetting industry.</p>
            </div>
        </div>
    </section >
  )
}
 
export default WhyUs