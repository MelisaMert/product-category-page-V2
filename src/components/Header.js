import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import Search from './Search';
import Cart from './Cart';
import './Header.css';

const Header = () => {
    const {totalCount} = useSelector((state) => state.cart);
    const [isDisplayCart, setIsDisplayCart] = useState(false);
    
    const onClick = () => {
        setIsDisplayCart(!isDisplayCart);
    }
    
    return (<>
       <div className="header-wrapper">
           <div className="header">
              <div className="logo">
                  <Logo />
              </div>
              <div> 
                  <Search />
              </div>
              <div>
                  <button 
                        onClick={onClick}
                        className={isDisplayCart ? "cart-button border-bottom-none" : "cart-button"}
                  >
                   Sepetim 
                  </button>
                  <span className="cart-number">
                        <span data-testid="totalCount">
                            {totalCount}
                        </span>
                    </span>
                    {isDisplayCart && <Cart />}
              </div>
           </div>
       </div>
        
    </>)
}

export default Header;