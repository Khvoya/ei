import { SEND_ORDER_REQUEST_MAIL } from "actionCreators/actionTypes";

const initialState = {
  status: "pending",
};
export const sendEmail = (state = initialState, action) => {
  const type = action.type;
  switch (type) {
    case SEND_ORDER_REQUEST_MAIL:
      return {
        ...state,
        status: "pending"
      };
    case `${SEND_ORDER_REQUEST_MAIL}_FULFILLED`:
      return {
        ...state,
        status: "fulfilled",
      };
    default: {
      return {
        state
      };
    }
  }
};
