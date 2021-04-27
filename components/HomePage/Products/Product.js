import Image from 'next/image';
import Link from 'next/link';
import {IconContext} from 'react-icons';
import {FaEye} from 'react-icons/fa';
import {useRouter}from 'next/router';
import useTranslation from 'next-translate/useTranslation'
const Product = ({product}) => {
    const {t}=useTranslation('product')
    const router=useRouter();
    const locale=router.locale;
    console.log(locale);
    return (
        <div className="products-container--product">
            <div className="products-container--img">
                <Link href={`/product/[id]`} as={`/product/${product.id}`} >
                    <Image src={product.img} layout="fixed" width="250" height="250" quality={100}></Image>
                </Link>
            </div>
            
            <div className="products-container--info row">
                <h5>{product.title}</h5>
               
            </div>
        </div>
    )
}

export default Product
