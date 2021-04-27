import Products from '../components/HomePage/Products/Products';
import { NextSeo } from 'next-seo';
const products = () => {
    
    return (
        <>
            <NextSeo
            title="Beyond Products"
            description=""
            />
            <Products></Products>
        </>
    )
}

export default products
