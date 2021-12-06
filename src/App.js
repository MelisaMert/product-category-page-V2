import React from 'react';
import generateProducts from './mock/products';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Filter from './components/Filter';
import ProductList from './components/ProductList';
import './App.css';

(async function() {
    const products = generateProducts(48);
    localStorage.setItem('Products', products);
})();

function App() {
  return (<>
       <Header />
       <SubHeader />
       <div className="product-list">
           <Filter />
           <ProductList />
       </div>
   </>);
}

export default App;
