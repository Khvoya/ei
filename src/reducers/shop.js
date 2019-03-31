import { FIREBASE_GET_SHOP } from "actionCreators/actionTypes";

const initialState = {
  status: "pending",
  shop: []
};
export const shop = (state = initialState, action) => {
  const type = action.type;
  switch (type) {
    case FIREBASE_GET_SHOP:
      return {
        ...state,
        status: "pending"
      };
    case `${FIREBASE_GET_SHOP}_FULFILLED`:
      return {
        ...state,
        status: "fulfilled",
        shop: action.payload.map(shop => shop.item)
      };
    default: {
      return {
        ...state
      };
    }
  }
};
