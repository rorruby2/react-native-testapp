import { combineReducers } from "redux";
import apparel from './apparel';
import grocery from './grocery';
import electronics from './electronics';
import cartItems from './cartItem';
import addressList from './address'

const rootReducer = combineReducers({
    apparel,
    grocery,
    electronics,
    cartItems,
    addressList
});

export default rootReducer;