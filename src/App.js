import React from 'react';
import { useSelector } from 'react-redux';
import generateProducts from './mock/products';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Filter from './components/Filter';
import ProductList from './components/ProductList';
import DeleteModal from './components/DeleteModal';
import './App.css';

export const getCart = () => {
    return JSON.parse(localStorage.getItem('Cart')) ? JSON.stringify(JSON.parse(localStorage.getItem('Cart'))) : JSON.stringify([]);
}

(async function() {
    const products = generateProducts(48);
    localStorage.setItem('Products', products);
    localStorage.setItem('Cart', getCart());
})();

function App() {
   const {isDisplayDeleteModal} = useSelector(state => state.cart); 

  return (<>
       <Header />
       {isDisplayDeleteModal && <DeleteModal />}
       <SubHeader />
       <div className="product-list">
           <Filter />
           <ProductList />
       </div>
   </>);
}

export default App;
