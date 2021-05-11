import { BUY, REMOVE } from '../Types/productType';

const initialState = {
  
  cart: [],
  
   
};

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case BUY: 
        return {
          ...state, 
          cart: [...state.cart, action.payload]
        }
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

      default:
            return state;
      };
};

export default productReducer;