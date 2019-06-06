import { FIREBASE_GET_WELCOME_BG } from "actionCreators/actionTypes";

const initialState = {
  status: 'pending',
  url: '',
};
export const welcome = (state = initialState, action) => {
  const type = action.type;
  switch(type){
    case FIREBASE_GET_WELCOME_BG:
      return {
        ...state,
        status: 'pending',
      };
    case `${FIREBASE_GET_WELCOME_BG}_FULFILLED`:
      return {
        ...state,
        status: "fulfilled",
        url: action.payload
      };
    default: {
      return {
        state,
      };
    }
  }
};
