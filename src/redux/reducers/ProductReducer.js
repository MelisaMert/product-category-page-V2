import * as actions from '../constants/ProductConstants';
import * as arrayUtils from '../../utils/arrayUtils';
import * as dateUtils from '../../utils/dateUtils';

const initialState = {
    products: JSON.parse(localStorage.getItem('Products')),
    searchProducts: JSON.parse(localStorage.getItem('Products')),
    searchText: ''
}

const ProductReducer = (state = initialState, action) => {
    let products = JSON.parse(localStorage.getItem('Products'));

    switch (action.type) {
        case actions.FETCH_PRODUCTS:
            return {
                ...state,
                searchProducts: state.products
            }
        case actions.SEARCH_PRODUCTS:
            if(action.payload.length > 3) {
                products = state.searchProducts.filter((product) => product.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
            return {
                ...state,
                products: products,
                searchText: action.payload
                
            }
        case actions.FILTER_BY_BRAND:
          
            if(action.payload.length > 0) {
                products = products.filter(p => action.payload.includes(p.brand))
            } 
            return {
                ...state,
                products: products
            }
        case actions.FILTER_BY_COLOR:
          
            if (action.payload.length > 0) {
                products = products.filter(p => arrayUtils.compare(p.colors, action.payload) > 0)
            } 
            return {
                ...state,
                products: products
            }

        case actions.SORT_BY_PRICE_ASC:
            return {
                ...state,
                products: state.products.length > 0 ? [...arrayUtils.sortedAsc(state.products, 'price')] : state.products
            }
        case actions.SORT_BY_PRICE_DESC:
            return {
                ...state,
                products: state.products.length > 0 ? [...arrayUtils.sortedDesc(state.products, 'price')] : state.products
            }
        case actions.SORT_BY_DATE_ASC:
            return {
                ...state,
                products: state.products.length > 0 ? [...dateUtils.sortedAsc(state.products)] : state.products
            }
        case actions.SORT_BY_DATE_DESC:
            return {
                ...state,
                products: state.products.length > 0 ? [...dateUtils.sortedDesc(state.products)] : state.products
            }
        case actions.ACTIVE_SORT:
            return {
                ...state,
                activeSort: action.payload
            }
        default:
            return {
                ...state
            }
    }

}

export default ProductReducer;