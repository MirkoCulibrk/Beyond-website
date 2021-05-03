import Products from '../components/HomePage/Products/Products';
import { NextSeo } from 'next-seo';

import useTranslation from 'next-translate/useTranslation';
const products = () => {
    const {t}=useTranslation();
    return (
        <>
            <NextSeo
            title={`${t('common:titleproducts')}`}
            description={`${t('common:descproducts')}`}
            
            />
            <Products></Products>
        </>
    )
}

export default products
