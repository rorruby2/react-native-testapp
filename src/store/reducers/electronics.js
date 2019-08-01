import {FETCH_START, FETCH_SUCCESS, FETCH_FAILED, FETCH_ELECTRONICS} from '../actions/ConstantFiles/electronics';
import {updateState} from '../../utility/updateState'

const initialState = {
    listData:null,
    loading: false,
    errors:null
}

const start =(state,action)=>updateState(state,{loading:action.payload});
const success = (state,action)=>updateState(state,{listData:action.payload})
const errors = (state,action)=>updateState(state,{listData:null,loading:false,errors:payload.error})

const electronicsItemReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return start(state,action);
        case FETCH_ELECTRONICS:
            return success(state,action);
        case FETCH_FAILED:
            return errors(state,action);
        default:
            return state;
    }

};

export default electronicsItemReducer;