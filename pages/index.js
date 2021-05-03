
import { NextSeo } from 'next-seo';
import Banner from '../components/HomePage/Banner/Banner';
import Numbers from '../components/HomePage/Numbers/Numbers';
import Slider from '../components/HomePage/Slider/Slider';
import Products from '../components/HomePage/Products/Products';
export default function Home() {
  return (
    <>  
      
        <NextSeo
          title="Zvanični distributer Beyond proizvoda za Srbiju"
          description="Zvanični distributer Beyond proizvoda za Srbiju i prostor balkana. 10 godina za redom dobijena nagrada za najbolji sistem za beljenje zuba. 248000 zadovoljnih stomatologa širom sveta."
          openGraph={{
            url:"https://beyond-website-weld.vercel.app/",
            title:"Zvanični distributer Beyond proizvoda za Srbiju",
            description:"Zvanični distributer Beyond proizvoda za Srbiju i prostor balkana. 10 godina za redom dobijena nagrada za najbolji sistem za beljenje zuba. 248000 zadovoljnih stomatologa širom sveta.",
            images:[
              {
                url:"https://beyond-website-weld.vercel.app/_next/image?url=%2Fproduct1.jpg&w=256&q=100",
                width: 250,
                height:250,
                alt:"BEYOND II Ultra Whitening Accelerator"
                
              },{
                url:"https://beyond-website-weld.vercel.app/_next/image?url=%2Fpolus-ultra.jpg&w=256&q=100",
                width: 250,
                height:250,
                alt:"BEYOND Polus Advanced Ultra Whitening Accelerator"
              },
              ,{
                url:"https://beyond-website-weld.vercel.app/_next/image?url=%2Fsolo-kit.jpg&w=256&q=100",
                width: 250,
                height:250,
                alt:"BEYOND SOLO Single Treatment Kit"
              },{
                url:"https://beyond-website-weld.vercel.app/_next/image?url=%2Ftoothpaste-combo.jpg&w=256&q=100",
                width: 250,
                height:250,
                alt:"Pearl White® Whitening Toothpaste"
              },{
                url:"https://beyond-website-weld.vercel.app/_next/image?url=%2FMax5.jpg&w=256&q=100",
                width: 250,
                height:250,
                alt:"BEYOND MAX5 Treatment Kit"
              },{
                url:"https://beyond-website-weld.vercel.app/_next/image?url=%2Fproduct1.jpg&w=256&q=100",
                width: 250,
                height:250,
                alt:"BEYOND® MAGNA™ Solution Treatment Kit"
              }
            ]
          }}
        />
        <Banner></Banner>
        <Numbers></Numbers>
        <Slider></Slider>
        <Products ></Products>
    </>
     
  )
}