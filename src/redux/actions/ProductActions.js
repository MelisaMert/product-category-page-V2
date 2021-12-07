import * as actions from '../constants/ProductConstants';

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: actions.FETCH_PRODUCTS
        })
    } catch (error) {
        console.log(error);
    }
}

export const searchProducts = (query) => async(dispatch) => {
    try {
        dispatch({
            type: actions.SEARCH_PRODUCTS,
            payload:query
        })
    } catch(error) {
        console.log(error);
    }
}

export const filterByBrand = (query) => async(dispatch) => {
    try {
       dispatch({
           type: actions.FILTER_BY_BRAND,
           payload: query
         })
   }
    catch(error){
       console.log(error);
   }
}

export const filterByColor = (query) => async(dispatch) => {
    try {
      dispatch({
         type: actions.FILTER_BY_COLOR,
         payload: query

      })  
    }
    catch(error){ 
       console.log(error);
    } 
}

export const sortByPriceAsc = () => async(dispatch) => {
    try {
         dispatch({
            type: actions.SORT_BY_PRICE_ASC
         })
    } catch(error) {
        console.log(error);
    }
} 

export const sortByPriceDesc = () => async(dispatch) => {
    try {
        dispatch({
            type: actions.SORT_BY_PRICE_DESC
        })
    } catch(error){
        console.log(error);
    } 
}

export const sortByDateAsc = () => async(dispatch) => {
    try {
        dispatch({
            type: actions.SORT_BY_DATE_ASC
        })
    } catch(error){
        console.log(error);
    } 
}

export const sortByDateDesc = () => async(dispatch) => {
    try {
        dispatch({
            type: actions.SORT_BY_DATE_DESC
        })
    } catch(error){
        console.log(error);
    } 
}

export const activeSorter = (index) => async(dispatch) => {
    try {
        dispatch({
            type: actions.ACTIVE_SORT,
            payload: index
        })
    } catch(error){
        console.log(error);
    } 
}