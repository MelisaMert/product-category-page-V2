import { combineReducers } from "redux";
import ProductReducer from "./reducers/ProductReducer";
import CartReducer from "./reducers/CartReducer";

const rootReducer = combineReducers({
    product:ProductReducer,
    cart:CartReducer
})

export default rootReducer;