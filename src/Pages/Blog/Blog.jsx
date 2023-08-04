import Image from '../../assets/Backgrounds/blog.png'
import Banner from '../../Components/General/Banner/Banner'
import Blog1 from '../../assets/Images/blog-1.png'
import Blog2 from '../../assets/Images/blog-2.png'
import Blog3 from '../../assets/Images/blog-2.png'
import Blog4 from '../../assets/Images/blog-4.png'
import Blog5 from '../../assets/Images/blog-5.png'
import Blog6 from '../../assets/Images/blog-6.png'
import BlogCard from '../../Components/General/BlogCard/BlogCard'
import Newsletter from '../../Components/General/Newsletter/Newsletter'

const Blog = () => {

  const blog = [
    {
      id: 1,
      image: Blog1,
      day: '25',
      month: 'Nov',
      author: 'By Rachi Card',
      title: 'The Benefits of Vitamin D & How to Get It',
      description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    },
    {
      id: 2,
      image: Blog2,
      day: '25',
      month: 'Nov',
      author: 'By Rachi Card',
      title: 'Our Favorite Summertime Tomato',
      description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    },
    {
      id: 3,
      image: Blog3,
      day: '25',
      month: 'Nov',
      author: 'By Rachi Card',
      title: 'Benefits of Vitamin C & How to Get It',
      description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    },
    {
      id: 4,
      image: Blog4,
      day: '25',
      month: 'Nov',
      author: 'By Rachi Card',
      title: 'Research More Organic Foods',
      description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    },
    {
      id: 5,
      image: Blog5,
      day: '25',
      month: 'Nov',
      author: 'By Rachi Card',
      title: 'Everyday Fresh Fruites',
      description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    },
    {
      id: 6,
      image: Blog6,
      day: '25',
      month: 'Nov',
      author: 'By Rachi Card',
      title: 'Don’t Use Plastic Product! it’s Kill Nature',
      description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    },
  ]

  return (
    <>
        <Banner Bg={Image} text='Recent News' />
        <div className="box-container flex flex-wrap items-center justify-evenly gap-y-32 my-20">
          {blog.map(({id,image,day,month,author,title,description}) => <BlogCard key={id} BlogImage={image} Day={day} Month={month} Author={author} Title={title} Description={description} /> )}
          <Newsletter />
        </div>
    </>
  )
}

export default Blog