import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/ProductActions';
import Product from './Product';
import Pagination from './Pagination';
import * as consts from '../consts';
import './ProductList.css';

const ProductList = () => {
   
   const { products } = useSelector(state => state.product);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchProducts())
   }, [dispatch])

   const paginate = pageNumber => setCurrentPage(pageNumber);

   const [currentPage, setCurrentPage] = useState(1);
   const indexOfLastProduct = currentPage * consts.PAGE_SIZE;
   const indexOfFirstProduct = indexOfLastProduct - consts.PAGE_SIZE;
   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

   return (
      <>
         <div>
         <div className="product-wrapper">
            {
               currentProducts.length > 0 ?
                  currentProducts.map((product, index) => (
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
         <div className="pagination-wrapper">
            <Pagination  
                pageSize={consts.PAGE_SIZE}
                totalProducts={products.length}
                paginate={paginate}
            />
         </div>
         </div>
      </>
   )
}

export default ProductList;