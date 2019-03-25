import {FIREBASE_GET_IMAGE_REFS} from "../actionCreators/actionTypes";

const initialState = {
  status: 'pending',
  urls: [],
};
export const photos = (state = initialState, action) => {
  const type = action.type;
  switch(type){
    case FIREBASE_GET_IMAGE_REFS:
      return {
        ...state,
        status: 'pending',
      };
    case `${FIREBASE_GET_IMAGE_REFS}_FULFILLED`:
      return {
        ...state,
        status: 'fulfiled',
        urls: action.payload
      }
  }
  return state;
};
