import  data from '../../../data.json';
import useTranslation from 'next-translate/useTranslation';
import Gallery from '../../../components/UI/Gallery/Gallery';
import Button from '../../../components/UI/Button/Button';
import Sentence from '../../../components/UI/Sentence/Sentence';
import ProductList from '../../../components/HomePage/Products/ProductList';
import {useSideMenu} from '../../../context/useSideMenu';
import AdditionalInfo from '../../../components/HomePage/AdditionalInfo/AdditionalInfo';
const index = ({product,related}) => {
  const {t}=useTranslation();
  const {handleBuyingModal}=useSideMenu();
  const {id,images}=product;
  const array=t(`common:description${id}`).split('\n');
    return (
      <>
          <section className="product">
          <div className="container">
              <div className="product-container">
                <div className="product-imgcontainer">
                  <Gallery images={images}></Gallery>
                </div>
                <div className="product-infocontainer">
                  <h1>{t(`common:title${id}`)}</h1>
                  {id==2?<p className="special">{t('common:info2')}</p>:null}
                  {id==3?<p className="special">{t('common:info3')}</p>:null}
                  {id==4?<p className="special">{t('common:info4')}</p>:null}
                  {id==5?<p className="special">{t('common:info5')}</p>:null}
                  <div>
                    {array.map((sentence)=><Sentence sentence={sentence}></Sentence>)}
                  </div>
                  <Button text={t('common:productButton')}  action={handleBuyingModal}></Button>
                </div>
              </div>
              {id==2?<AdditionalInfo></AdditionalInfo>:null}
              <div className="product-related">
                <h2>{t('common:realted')}</h2>
                <div className="row">
                
                <ProductList products={related}></ProductList>
                </div>
              </div>
          </div>
          </section>
        </>
    )
}
export default index

//znaci pored tih pathova moras e i dobiti ba info za tu stranicu
export const getServerSideProps=async ({params})=>{
  let product,related;
  try{
      product=data.filter((product)=>product.id.toString()===params.id);         
      related=data.filter((product)=>product.id.toString()!==params.id).splice(0,4);
    }catch(error){
    console.log(error);
  }
  return{
    props:{
      related,
      product:product[0],
    }
  }
}
// export const getStaticPaths= async () =>{
//   //znaci mora se praviti svi pathovi ka dinamicnim stranicama
//   const paths=data.map((product)=>({
//     // vraca se objekat koji ima paramentre ka bas tom jer ima index i ide id zbog patha
    
//     params:{id:product.id.toString()},
//   }));
//   console.log(paths)
//   return{
//     paths,
//     fallback:false
//   }
// }