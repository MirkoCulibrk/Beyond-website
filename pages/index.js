
import { NextSeo } from 'next-seo';
import Banner from '../components/HomePage/Banner/Banner';
import Numbers from '../components/HomePage/Numbers/Numbers';
import Slider from '../components/HomePage/Slider/Slider';
import Products from '../components/HomePage/Products/Products';
export default function Home() {
  return (
    <>  
        <NextSeo
          title="Beyond International"
          description="A short description goes here."
        />
        <Banner></Banner>
        <Numbers></Numbers>
        <Slider></Slider>
        <Products ></Products>
    </>
     
  )
}