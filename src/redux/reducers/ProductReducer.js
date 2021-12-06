import * as actions from '../constants/ProductConstants';
import * as arrayUtils from '../../utils/arrayUtils';
import * as dateUtils from '../../utils/dateUtils';

const initialState = {
    products: JSON.parse(localStorage.getItem('Products'))
}

const ProductReducer = (state = initialState, action) => {
    let products = JSON.parse(localStorage.getItem('Products'));

    switch (action.type) {
        case actions.GET_PRODUCTS:
            return {
                ...state
            }
        case actions.SEARCH_PRODUCTS:
            return {
                ...state
            }
        case actions.FILTER_BY_BRAND:
            if (action.payload.length > 0) {
                products = products.filter(p => action.payload.includes(p.brand))
            }
            return {
                ...state,
                brands: action.payload,
                products: products
            }
        case actions.FILTER_BY_COLOR:
            if (action.payload.length > 0) {
                products = products.filter(p => arrayUtils.compare(p.colors, action.payload.colors) > 0)
            }

            return {
                ...state,
                colors: action.payload.colors,
                products: products
            }
        case actions.SORT_BY_DATE_ASC:
            return {
                ...state,
                products: state.products.length > 0 ? [...arrayUtils.sortedAsc(state.products, 'price')] : state.products
            }
        case actions.SORT_BY_DATE_DESC:
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
        default:
            return {
                 ...state
            }
    }

}

export default ProductReducer;