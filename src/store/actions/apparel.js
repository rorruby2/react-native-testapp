import {FETCH_APPAREL, FETCH_FAILED, FETCH_START, FETCH_SUCCESS} from './ConstantFiles/apparel';
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
        type: FETCH_APPAREL,
        payload: data,
    };
};

const getFashionCategory = () => {
    return axios.get('https://reactnative-240707.firebaseio.com/Category.json')
    .then(res => {
        var category = res.data.categories.find(({name}) => name === 'Fashion');
        return category.id;
 
    })
}; 
 
//Fetch Apparel
export const fetchApparelFromApi = () => {
    return dispatch => { 
        // runing first start
        dispatch(start(true));
        getFashionCategory()
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