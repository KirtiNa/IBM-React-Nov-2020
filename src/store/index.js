
import { createStore, combineReducers, applyMiddleware } from 'redux';

import productsReducer from '../reducers/productsReducer';
import categoriesReducer from '../reducers/categoriesReducer';
const rootReducer = combineReducers({
    products : productsReducer,
    categories : categoriesReducer
});

//const store = createStore(productsReducer);
//const store = createStore(categoriesReducer);
function logger(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.log('Before -> ', store.getState());
            console.log(action);
            next(action);
            console.log("After -> ", store.getState());
            console.groupEnd();
        }
    }
}


const store = createStore(rootReducer, applyMiddleware(logger));

//important : the following line has to REMOVED when the application is deployed for production
window['store'] = store;

// store state = { products : [], categories : []}
export default store; 
