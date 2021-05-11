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
    
      case REMOVE: 
      const numIndex = parseInt(action.payload)
      return {
          ...state,
          cart: [
              ...state.cart.slice(0, numIndex),
              ...state.cart.slice(numIndex + 1)
          ]
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