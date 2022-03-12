


import Reducer from './Reducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const RootReducer = combineReducers({

    myCounter: Reducer

})

export default RootReducer