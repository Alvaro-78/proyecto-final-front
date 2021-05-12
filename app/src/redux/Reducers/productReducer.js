import { BUY, REMOVE, ORDER } from '../Types/productType';

const initialState = {
  
  cart: [],
  
};

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case BUY: 
        return {
            ...state,
            cart : action.payload
        }
    
      case ORDER: 
      return {
          ...state,
          cart : action.payload
      }


      default:
            return state;
      };
};

export default productReducer;