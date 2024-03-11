import {combineReducers} from 'redux'
import counterReducer from './Reducers';

const myReducer = combineReducers({
    counter: counterReducer
})

export default myReducer;


