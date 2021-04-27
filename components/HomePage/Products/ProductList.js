import Product from './Product';

const ProductList = ({products}) => {
    return (
        <>
            {products.map((product)=>(
                <Product product={product}></Product>
            ))}
        </>
    )
}

export default ProductList
