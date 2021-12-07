import * as actions from '../constants/CartConstants';

export const getCart = () => async(dispatch) => {
    try {
        dispatch({
            type: actions.GET_CART
        })

    } catch(error){
        console.log(error);
    }
}

export const addToCart = (data) => async(dispatch) => {
    try {
        dispatch({
            type: actions.ADD_TO_CART,
            payload: data
        })
    } catch(error) {
        console.log(error);
    }
}

export const deleteFromCart = (id) => async (dispatch) => {
    try {
        dispatch({
            type: actions.DELETE_FROM_CART,
            payload: id
        })
    } catch (error) {
        console.log(error);
    }
}

export const getTotalAmountOfCart = () => async(dispatch) => {
    try {
        dispatch({
            type: actions.GET_TOTAL_AMOUNT_OF_CART,
        })
    } catch(error) {
        console.log(error)
    }
}

export const isDisplayDeleteModal = (id) => async(dispatch) => {
    try {
        dispatch({
            type: actions.IS_DISPLAY_DELETE_MODAL,
            payload: id
        })
    } catch(error) {
        console.log(error)
    }
}
