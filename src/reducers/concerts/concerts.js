import { FIREBASE_GET_CONCERTS } from "actionCreators/actionTypes";

const initialState = {
  status: "pending",
  concerts: []
};
export const concerts = (state = initialState, action) => {
  const type = action.type;
  switch (type) {
    case FIREBASE_GET_CONCERTS:
      return {
        ...state,
        status: "pending"
      };
    case `${FIREBASE_GET_CONCERTS}_FULFILLED`:
      return {
        ...state,
        status: "fulfilled",
        concerts: action.payload.map(concert => concert.event)
      };
    default: {
      return {
        state
      };
    }
  }
};
