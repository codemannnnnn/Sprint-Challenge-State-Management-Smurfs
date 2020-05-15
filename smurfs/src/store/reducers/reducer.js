import { FETCH_DATA_START, FETCH_DATA_INFO, POST_DATA_INFO } from "../actions";

const initialState = {
  isFetching: false,
  info: null,
  post: null,
  error: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_DATA_INFO:
      return {
        ...state,
        isFetching: false,
        info: action.payload,
      };

    case POST_DATA_INFO:
      return {
        ...state,
        post: action.payload,
      };

    default:
      return state;
  }
};
