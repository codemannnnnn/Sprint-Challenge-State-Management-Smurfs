import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  POST_DATA_START,
  POST_DATA_SUCCESS,
} from "../actions";

export const initialState = {
  isFetching: false,
  isPosting: false,
  smurfData: null,
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
        smurfData: action.payload,
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
        smurfData: action.payload,
      };

    default:
      return state;
  }
};
