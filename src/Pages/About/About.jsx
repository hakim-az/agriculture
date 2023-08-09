import Image from '../../assets/Backgrounds/about.png'
import AboutTeam from '../../Components/About/AboutTeam'
import AboutUs from '../../Components/About/AboutUs'
import WhyUs from '../../Components/About/WhyUs'
import Banner from '../../Components/General/Banner/Banner'

const About = () => {
  return (
    <>
        <Banner Bg={Image} text='About Us' />
        <AboutUs />
        <WhyUs />
        <AboutTeam />
    </>
  )
}

export default About