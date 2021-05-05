
import {LOGIN, LOGOUT, REGISTER} from '../Types/customerType';

const initialState = {
  customer : {},
  token : "" 
};


const customerReducer = (state = initialState, action) => {

  switch(action.type){

    case LOGIN : 
      return{
        ...state,
        customer : action.payload.customer,
        token : action.payload.token
      };

    case LOGOUT :
      return {
        ...state,
        customer : initialState
      };

      case REGISTER: 
      return {
        ...state, 
        user: action.payload
      };

    default : 
      return state

  };
};


export default customerReducer;