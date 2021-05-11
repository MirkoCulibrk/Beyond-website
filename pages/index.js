
import { NextSeo } from 'next-seo';

import useTranslation from 'next-translate/useTranslation';
import Banner from '../components/HomePage/Banner/Banner';
import Numbers from '../components/HomePage/Numbers/Numbers';
import Slider from '../components/HomePage/Slider/Slider';
import Products from '../components/HomePage/Products/Products';
export default function Home() {
  let {t} =useTranslation();
  return (
    <>  

        <NextSeo
          title={`${t('common:title')}`}
          description={`${t('common:seodescripion')}`}
          openGraph={{
            url:"https://blistavosmeh.com/",
            title:"Zvanični distributer Beyond proizvoda za Srbiju",
            description:"Zvanični distributer Beyond proizvoda za Srbiju i prostor balkana. 10 godina za redom dobijena nagrada za najbolji sistem za beljenje zuba. 248000 zadovoljnih stomatologa širom sveta.",
            images:[
              {
                url:"https://blistavosmeh.com/_next/image?url=%2Fproduct1.jpg&w=256&q=100",
                width: 250,
                height:250,
                alt:"BEYOND II Ultra Whitening Accelerator"
                
              },{
                url:"https://blistavosmeh.com/_next/image?url=%2Fpolus-ultra.jpg&w=256&q=100",
                width: 250,
                height:250,
                alt:"BEYOND Polus Advanced Ultra Whitening Accelerator"
              },
              ,{
                url:"https://blistavosmeh.com/_next/image?url=%2Fsolo-kit.jpg&w=256&q=100",
                width: 250,
                height:250,
                alt:"BEYOND SOLO Single Treatment Kit"
              },{
                url:"https://blistavosmeh.com/_next/image?url=%2Ftoothpaste-combo.jpg&w=256&q=100",
                width: 250,
                height:250,
                alt:"Pearl White® Whitening Toothpaste"
              },{
                url:"https://blistavosmeh.com/_next/image?url=%2FMax5.jpg&w=256&q=100",
                width: 250,
                height:250,
                alt:"BEYOND MAX5 Treatment Kit"
              },{
                url:"https://blistavosmeh.com/_next/image?url=%2Fproduct1.jpg&w=256&q=100",
                width: 250,
                height:250,
                alt:"BEYOND® MAGNA™ Solution Treatment Kit"
              }
            ]
          }}
          keywords={`${t('common:mainPageKeywords')}`}
        />
        <Banner></Banner>
        <Numbers></Numbers>
        <Slider></Slider>
        <Products ></Products>
    </>
     
  )
}