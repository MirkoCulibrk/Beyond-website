import ProductList from './ProductList';
import products from '../../../data.json';
import useTranslation from 'next-translate/useTranslation';
const Products = () => {
    const {t}=useTranslation();
    return (
        <section className="products">
            <div className="container">
                <h1 className="products--heading">{t('common:products')}</h1>
                <div className="products-container row">
                    <ProductList products={products}></ProductList>
                </div>
            </div>            
        </section>
    )
}

export default Products

