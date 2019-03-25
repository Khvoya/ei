import {FIREBASE_GET_ABOUT_US} from "actionCreators/actionTypes";

const initialState = {
  status: 'pending',
  urls: [],
};
export const aboutUs = (state = initialState, action) => {
  const type = action.type;
  switch(type){
    case FIREBASE_GET_ABOUT_US:
      return {
        ...state,
        status: 'pending',
      };
    case `${FIREBASE_GET_ABOUT_US}_FULFILLED`:
      return {
        ...state,
        status: 'fulfiled',
        urls: action.payload
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
