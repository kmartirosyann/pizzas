import { createStore ,compose,applyMiddleware} from 'redux';
import rootReducer from './redusers';
import thunk from 'redux-thunk';


const composeEnhancers =(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

   
window.store = store

// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

// import rootReducer from './reducers';

// const composeEnhancers =
//   (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

 export default store;