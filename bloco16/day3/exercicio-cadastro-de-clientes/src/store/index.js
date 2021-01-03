import { createStore, combineReducers } from 'redux';
import loginReducer from '../reducers/loginReducer';
import registerReducer from '../reducers/registerReducer';

const rootReducer = combineReducers({ loginReducer, registerReducer });

const store = createStore(rootReducer);



export default store;