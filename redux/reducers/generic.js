import { HYDRATE } from "next-redux-wrapper";

const initialState = {};

const genericReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: // For SSR
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default genericReducer;
