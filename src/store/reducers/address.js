import {FETCH_START, FETCH_SUCCESS, FETCH_FAILED, FETCH_ADDRESS, ADD_ADDRESS} from '../actions/ConstantFiles/address';
import {updateState} from '../../utility/updateState'

const initialState = {
    address: null,
    loading: false,
}

const start =(state, action)=>updateState(state, {loading: action.payload});
const success = (state, action)=>updateState(state, {address: action.payload})
const errors = (state, action)=>updateState(state, {address: null, loading: false, errors:payload.error})

// const add = (state, action) => updateState(state, {items: state.items.concat(action.payload)})

const apparelReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return start(state, action);
        case FETCH_ADDRESS:
            return success(state, action);
        case FETCH_FAILED:
            return errors(state, action);
        // case ADD_ADDRESS:
        //     return addEventListener(state, action)
        default:
            return state;
    }
};

export default apparelReducer;