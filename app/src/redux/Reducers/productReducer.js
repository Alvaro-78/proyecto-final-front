import { SHOW, BUY } from '../Types/productType';

const initialState = {

  getProduct: []
   
};

const productReducer = (state = initialState, action) => {

    switch (action.type) {
      case SHOW: 
      return {
        ...state, 
        getProduct: action.payload
      }
      case BUY: 
      return {
        ...state, 
        getProduct: action.payload
      }
    default:
          return state;
    };
};

export default productReducer;