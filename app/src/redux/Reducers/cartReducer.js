import { SHOW, CART, REMOVE} from '../Types/cartType';

const initialState = {
 
    cartProduct: []
    
};

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW: 
        return {
          ...state, 
          cartProduct: [...state.cartProduct, action.payload]
        }
        case CART: 
        return {
          ...state, 
          cartProduct: action.payload
        }
        case REMOVE: 
        const numIndex = parseInt(action.payload)
        return {
            ...state,
            cartProduct: [
                ...state.cartProduct.slice(0, numIndex),
                ...state.cartProduct.slice(numIndex + 1)
            ]
        }  
  

        default:
            return state;
  
    };

}

export default cartReducer;