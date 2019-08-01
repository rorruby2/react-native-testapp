import {FETCH_GROCERY, FETCH_FAILED, FETCH_START, FETCH_SUCCESS} from './ConstantFiles/grocery';
import axios from 'axios'

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
        type: FETCH_GROCERY,
        payload: data,
    };
};
 
const getGroceryCategory = () => {
   return axios.get('https://reactnative-240707.firebaseio.com/Category.json')
    .then(res => {
        var category = res.data.categories.find(({name}) => name==='Grocery');
        return category.id;

    })
}; 

//Fetch Apparel
export const fetchGroceryFromApi = () => {
    return dispatch => { 
        dispatch(start(true));
        getGroceryCategory()
        .then(id=>{ axios.get('https://reactnative-240707.firebaseio.com/Items.json')
            .then(res => {
                const response = res.data.Items.filter((item) => item.category_id == id );
                const arr=[];
                for(let key in response){
                    arr.push({
                    ...response[key]
                    })
                }
                dispatch(success(arr));
                dispatch(start(false));
            })
        })
        .catch(err=>{
            console.log(err)
            dispatch(failure(err))
        });
    }
};