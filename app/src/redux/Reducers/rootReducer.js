import {combineReducers} from 'redux';
import customerReducer from './customerReducer';
import adminReducer from './adminReducer';
import cartReducer from './cartReducer';


const rootReducer = combineReducers({
  customerReducer,
  adminReducer,
  cartReducer
});

export default rootReducer;