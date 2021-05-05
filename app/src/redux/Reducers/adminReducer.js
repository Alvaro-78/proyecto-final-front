import {ADMINLOGIN, ADMINLOGOUT} from '../Types/adminType';

const initialState = {
  admin : {},
  token : "" 
};


const adminReducer = (state = initialState, action) => {

    switch(action.type){
  
      case ADMINLOGIN : 
        return{
          ...state,
          admin : action.payload.admin,
          token : action.payload.token
        };
  
      case ADMINLOGOUT :
        return {
          ...state,
          admin : initialState
        };
  
      default : 
        return state
  
    };
  };
  
  
  export default adminReducer;