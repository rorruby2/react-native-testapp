import {ADD_TO_CART, REMOVE_FROM_CART, INCREASE_ITEM, DECREASE_ITEM} from '../actions/ConstantFiles/cartItem';
import {updateState} from '../../utility/updateState'

const initialState = {
    items:[]
}

const add = (state, action) => updateState(state, {items: state.items.concat(action.payload)})
const remove = (state, action) => updateState(state, {items: state.items.filter(item => item.item_name !== action.payload.item.item_name)})

const increaseDecrease = (state, action, val) => {
    var v = state.items.filter(item => {
            if(item.id == action.payload.id)
                item.count+= val;
                item.total_price = item.price * item.count
            return true;
        });
    
    return updateState(state, {items: v});
}


const cartItemsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return add(state, action);
        case REMOVE_FROM_CART:
            return remove(state, action);
        case INCREASE_ITEM:
            return increaseDecrease(state, action, 1);
        case DECREASE_ITEM:
            return increaseDecrease(state, action, -1);
        default:
            return state;
    }
    return state
}

export default cartItemsReducer;