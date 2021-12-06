import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import './ProductList.css';


const ProductList = () => {
    const { products } = useSelector(state => state.product);
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
                    )) : <div className="empty-product-list"><span></span></div>
               }
           </div>
        </>
    )
}

export default ProductList;