/**
 * entry file for the reducers
 * @file index.js
 */
 import { combineReducers } from 'redux';

 import resultReducer from './resultReducer';
 
 const rootReducer = combineReducers({
   result: resultReducer,
 });
 
 export default rootReducer;