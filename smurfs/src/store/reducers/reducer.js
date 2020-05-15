import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  POST_DATA_START,
  POST_DATA_SUCCESS,
} from "../actions";

const initialState = {
  isFetching: false,
  pullsData: false,
  isPosting: false,
  error: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pullsData: action.payload,
      };

    case POST_DATA_START:
      return {
        ...state,
        isPosting: true,
      };

    case POST_DATA_SUCCESS:
      return {
        ...state,
        isPosting: false,
        pullsData: action.payload,
      };

    default:
      return state;
  }
};
