import './Shop.css'
import HeroSection from './components/HeroSection/HeroSection.jsx';
import NewArrivals from './components/Sections/NewArrivals.jsx';
import Category from './components/Sections/Categories/Category.jsx';
import content from './data/content.json';
import Footer from './components/Footer/Footer.jsx';

const Shop = () => {
  return (
    <>
      <HeroSection />
      <NewArrivals />
      {content?.pages?.shop?.sections &&
        content.pages.shop.sections.map((item, index) => (
          <Category key={item?.title + index} {...item} />
        ))}
      <Footer content={content?.footer} />
    </>
  )
} 


export default Shop;