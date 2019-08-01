import { combineReducers } from "redux";
import apparel from './apparel';
import grocery from './grocery';
import electronics from './electronics';
import cartItems from './cartItem';

const rootReducer = combineReducers({
    apparel,
    grocery,
    electronics,
    cartItems,
});

export default rootReducer;