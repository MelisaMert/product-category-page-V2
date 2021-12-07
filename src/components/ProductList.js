import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/ProductActions';
import Product from './Product';
import './ProductList.css';


const ProductList = () => {
    const { products } = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(fetchProducts()) 
    }, [dispatch])

    return (
        <>
           <div className="product-wrapper">
               {
                 products.length > 0 ? 
                    products.map((product,index) => (
                      <Product
                         key={index}
                         id={product.id}
                         name={product.name}
                         description={product.description}
                         price={product.price}
                         originalPrice={product.originalPrice}
                         currency={product.currency}
                         date={product.date}
                         colors={product.colors}
                         brand={product.brand}
                         picture={product.picture}
                         smallImage={product.smallImage}
                      />
                    )) : <div className="empty-product-list"><span>Herhangi bir ürün bulunamadı</span></div>
               }
           </div>
        </>
    )
}

export default ProductList;