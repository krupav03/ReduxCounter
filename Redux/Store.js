import { legacy_createStore as createStore} from 'redux'
import myReducer from './combineReducer';

const store = createStore(myReducer)
export default store;
