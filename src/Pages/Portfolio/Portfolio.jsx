import Image from '../../assets/Backgrounds/portfolio.png'
import Banner from '../../Components/General/Banner/Banner'
import Portfolio1 from '../../assets/Images/portfolio-1.png'
import Portfolio2 from '../../assets/Images/portfolio-2.png'
import Portfolio3 from '../../assets/Images/portfolio-3.png'
import Portfolio4 from '../../assets/Images/portfolio-4.png'
import Portfolio5 from '../../assets/Images/portfolio-5.png'
import Portfolio6 from '../../assets/Images/portfolio-6.png'
import PortfolioCard from '../../Components/General/Portfolio/PortfolioCard'
import Newsletter from '../../Components/General/Newsletter/Newsletter'

const Portfolio = () => {

  const portfolio = [
    {
      id: 1,
      image: Portfolio1,
      title: 'Green & Tasty Lemon',
      label: 'Fruits',
    },
    {
      id: 2,
      image: Portfolio2,
      title: 'Organic Carrot',
      label: 'Farmer',
    },
    {
      id: 3,
      image: Portfolio3,
      title: 'Organic Betel Leaf',
      label: 'Leaf',
    },
    {
      id: 4,
      image: Portfolio4,
      title: 'Natural Tommato',
      label: 'Fruits',
    },
    {
      id: 5,
      image: Portfolio5,
      title: 'Black Raspberry',
      label: 'Farmer',
    },
    {
      id: 6,
      image: Portfolio6,
      title: 'Honey Orange',
      label: 'Farmer',
    },
  ]

  return (
    <>
        <Banner Bg={Image} text='Portfolio Standard' />
        <div className="box-container flex items-center justify-evenly flex-wrap gap-y-10 py-24 ">
          {portfolio.map(({id,image,title,label}) => <PortfolioCard key={id} PortfolioImage={image} Title={title} Label={label} /> )}
          <Newsletter />
        </div>
    </>
  )
}

export default Portfolio