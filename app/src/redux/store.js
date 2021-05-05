import {applyMiddleware, createStore} from 'redux';
import {save, load} from 'redux-localstorage-simple';
import rootReducer from './Reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(
    save({state:["dataCustomer"]})
)(createStore);

const store = createStoreWithMiddleware(
  rootReducer,
  load({
    preloadState : {
        dataCustomer : '',
        states: ["dataCustomer"]
    },
  }),
  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
      trace: true,
  }) 

);

export default store;