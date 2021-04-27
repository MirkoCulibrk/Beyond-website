import Image from 'next/image';
import Link from 'next/link';

const Product = ({product}) => {
    
    return (
        <div className="products-container--product" key={product.id}>
            <div className="products-container--img">
                <Link href={`/product/[id]`} as={`/product/${product.id}`} >
                    <Image src={product.img} layout="fixed" width="250" height="250" quality={100} alt={product.alt}></Image>
                </Link>
            </div>
            
            <div className="products-container--info row">
                <h3>{product.title}</h3>
               
            </div>
        </div>
    )
}

export default Product
