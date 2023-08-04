import Image from '../../assets/Backgrounds/shop.png'
import Banner from '../../Components/General/Banner/Banner'
import Product1 from '../../assets/Products/product-1.png'
import Product2 from '../../assets/Products/product-2.png'
import Product3 from '../../assets/Products/product-3.png'
import Product4 from '../../assets/Products/product-4.png'
import Product5 from '../../assets/Products/product-5.png'
import Product6 from '../../assets/Products/product-6.png'
import Product7 from '../../assets/Products/product-7.png'
import Product8 from '../../assets/Products/product-8.png'
import Product9 from '../../assets/Products/product-9.png'
import Product10 from '../../assets/Products/product-10.png'
import Product11 from '../../assets/Products/product-11.png'
import Product12 from '../../assets/Products/product-12.png'
import Product from '../../Components/General/Product/Product'
import Newsletter from '../../Components/General/Newsletter/Newsletter'

const Shop = () => {

  const products = [
    {
      id : 1,
      image: Product1,
      label:'Vegetable',
      title:'Calabrese Broccoli',
      oldPrice:'20.00',
      newPrice:'13.00',
    },
    {
      id : 2,
      image: Product2,
      label:'Fresh',
      title:'Fresh Banana Fruites',
      oldPrice:'20.00',
      newPrice:'14.00',
    },
    {
      id : 3,
      image: Product3,
      label:'Millets',
      title:'White Nuts',
      oldPrice:'20.00',
      newPrice:'14.00',
    },
    {
      id : 4,
      image: Product4,
      label:'Vegetable',
      title:'Vegan Red Tomato',
      oldPrice:'20.00',
      newPrice:'17.00',
    },
    {
      id : 5,
      image: Product5,
      label:'Health',
      title:'Mung Bean',
      oldPrice:'20.00',
      newPrice:'11.00',
    },
    {
      id : 6,
      image: Product6,
      label:'Nuts',
      title:'Brown Hazelnut',
      oldPrice:'20.00',
      newPrice:'12.00',
    },
    {
      id : 7,
      image: Product7,
      label:'Fresh',
      title:'Eggs',
      oldPrice:'20.00',
      newPrice:'17.00',
    },
    {
      id : 8,
      image: Product8,
      label:'Fresh',
      title:'Zelco Suji Elaichi Rusk',
      oldPrice:'20.00',
      newPrice:'15.00',
    },
    {
      id : 9,
      image: Product9,
      label:'Health',
      title:'Mung Bean',
      oldPrice:'20.00',
      newPrice:'11.00',
    },
    {
      id : 10,
      image: Product10,
      label:'Nuts',
      title:'White Hazelnut',
      oldPrice:'20.00',
      newPrice:'12.00',
    },
    {
      id : 11,
      image: Product11,
      label:'Fresh',
      title:'Fresh Corn',
      oldPrice:'20.00',
      newPrice:'17.00',
    },
    {
      id : 12,
      image: Product12,
      label:'Fresh',
      title:'Organic Almonds',
      oldPrice:'20.00',
      newPrice:'15.00',
    },
  ]

  return (
    <>
        <Banner Bg={Image} text='Shop' />
        <div className="box-container flex items-center justify-evenly flex-wrap gap-y-10 py-32">
          {products.map(({id,image,label,title,oldPrice,newPrice}) => <Product key={id} ProductImage={image} Label={label} Title={title} oldPrice={oldPrice} newPrice={newPrice} />)}
          <Newsletter />
        </div>
    </>
  )
}

export default Shop