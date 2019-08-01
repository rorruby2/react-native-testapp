import {FETCH_ELECTRONICS, FETCH_FAILED, FETCH_START, FETCH_SUCCESS} from './ConstantFiles/electronics';
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
        type: FETCH_ELECTRONICS,
        payload: data,
    };
};

const getElectronicCategory = () => {
    return axios.get('https://reactnative-240707.firebaseio.com/Category.json')
     .then(res => {
         var category = res.data.categories.find(({name}) => name==='Electronics');
         return category.id;
 
     })
 }; 
 
//Fetch Apparel
export const fetchElectronicsFromApi = () => {
    return dispatch => { 
        // runing first start
        dispatch(start(true));
        getElectronicCategory()
        .then(id=>{ axios.get('https://reactnative-240707.firebaseio.com/Items.json')
            .then(res => {
                const response = res.data.Items.filter((item) => item.category_id == id );
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
        })
        .catch(err=>{
            console.log(err)
            dispatch(failure(err))
        });
    }
}; 