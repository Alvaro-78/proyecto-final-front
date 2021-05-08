import {combineReducers} from 'redux';
import customerReducer from './customerReducer';
import adminReducer from './adminReducer';
import cartReducer from './cartReducer';
import productReducer from './productReducer'


const rootReducer = combineReducers({
  customerReducer,
  adminReducer,
  cartReducer,
  productReducer
});

export default rootReducer;