import React, {useEffect} from 'react'; 
import CartItem from './CartItem';
import {useSelector, useDispatch } from 'react-redux';
import { getTotalAmountOfCart } from '../redux/actions/CartActions';
import * as arrayUtils from '../utils/arrayUtils';
import './Cart.css';

const Cart = () => {
  const {cart} = useSelector((state) => state.cart);
  const sortedByDate = arrayUtils.sortedDesc(cart, 'date');
  const dispatch = useDispatch();

  useEffect(() => {
       dispatch(getTotalAmountOfCart())
  }, [cart, dispatch]);

  return (<>
    <div className="cart">
        {cart?.length > 0 ?
            sortedByDate?.map((item) => {
               return <CartItem key={item.id} {...item} />    
            }): <span className="empty-cart">Sepetinizde ürün bulunmamaktadır</span>
        }
    </div>
  </>)
}

export default Cart;
