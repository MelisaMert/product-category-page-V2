import * as actions from '../constants/CartConstants';

const initialState = {
    isDisplayDeleteModal: false,
}

// cart ? doğrusu ne olmalı bak
const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_CART:
            return {
                ...state,
            }

        case actions.ADD_TO_CART:
            const newCart = [...state.cart, action.payload];
            // set Storage
            return {
                ...state,
                cart: newCart,
                totalCount: newCart.length
            }

        case actions.DELETE_FROM_CART:
            const upCart = state.cart.filter(c => c.id !== action.payload);
            return {
                ...state,
                cart: upCart,
                totalCount: upCart.length
            }

        case actions.IS_DISPLAY_DELETE_MODAL:
            return {
                ...state,
                removedCartItemId: action.payload,
                isDisplayDeleteModal: !state.isDisplayDeleteModal
            }
            
        default:
            return {
                ...state
            }
    }
}

export default CartReducer;