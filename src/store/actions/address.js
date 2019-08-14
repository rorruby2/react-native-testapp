import {ADD_ADDRESS, FETCH_START, FETCH_FAILED, FETCH_SUCCESS, FETCH_ADDRESS} from './ConstantFiles/address';
import axios from 'axios'
 
//Add Address
export const addAddress = (data) => {
    return {
        type: ADD_ADDRESS,
        payload: data,
    };
};

//API Fetch Start
const start=(value)=>{
    return{
        type:FETCH_START,
        payload:value
    }
}
  
//failuire Method
const failure=(error)=>{
    return{
        type:FETCH_FAILED,
        payload:error
    }
}
  
//Success Method
export const success=(data)=>{
    return {
        type: FETCH_ADDRESS,
        payload: data,
    };
};
  
//Fetch Apparel
export const fetchAddressFromApi = () => {
    return dispatch => { 
        // runing first start
        dispatch(start(true));
        axios.get('https://reactnative-240707.firebaseio.com/Address.json')
        .then(res => {
            const response = res.data.Address;
            const arr=[];
            for(let key in response){
                arr.push({
                // id:key,
                ...response[key]
               })
            }
            dispatch(success(arr));
            dispatch(start(false));
        })
        .catch(err=>{
            console.log(err)
            dispatch(failure(err))
        });
    }
};
