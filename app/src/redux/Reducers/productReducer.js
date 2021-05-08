import { SAVE, PRODUCT, BUY } from '../Types/productType';

const initialState = {
    buyProduct: [],
    saveProduct: [],
    productCart: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE: 
      return {
        ...state, 
        saveProduct: action.payload
      }
      case BUY: 
      return {
        ...state, 
        buyProduct: action.payload
      }
      case PRODUCT: 
      return {
        ...state, 
        productCart: action.payload
      }
    default:
          return state;
    };
};

export default productReducer;