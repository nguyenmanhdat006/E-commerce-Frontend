import './Shop.css'
import HeroSection from './components/HeroSection/HeroSection.jsx';
import NewArrivals from './components/Sections/NewArrivals.jsx';
import Category from './components/Sections/Categories/Category.jsx';
import content from './data/content.json';
import Footer from './components/Footer/Footer.jsx';
import { useEffect } from 'react';
import { fetchCategories } from './api/fetchCategories.js';
import { useDispatch } from 'react-redux';
import { loadCategories } from './store/features/category.js';
import { setLoading } from './store/features/common.js';

const Shop = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setLoading(true))
    fetchCategories().then(res => {
      dispatch(loadCategories(res))
    
        // eslint-disable-next-line no-unused-vars
    }).catch(err => {

    }).finally(()=> {
      dispatch(setLoading(false))
    })
  }, [dispatch])

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