import React from 'react';
import { useDispatch } from 'react-redux';
import { isRemoveCartItem } from '../redux/actions/CartActions';
import './CartItem.css';

const CartItem = ({ id, name, smallImage }) => {
    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(isRemoveCartItem(id));
    }

    return(<>
       <div className="cart-item">
          <div className="cart-image">
              <img src={smallImage} alt=""></img>
          </div>
          <div className="cart-info">
              <span>{name}</span>
              <div className="cart-remove-button">
                  <input type="button" value="Kaldır" onClick={deleteProduct} />
              </div>
          </div>
       </div>
    </>)
}

export default CartItem;
