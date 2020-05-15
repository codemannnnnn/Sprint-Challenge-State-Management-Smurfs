import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_START });

    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const POST_DATA_START = "POST_DATA_START";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const postData = (smurf) => {
  return (dispatch) => {
    dispatch({ type: POST_DATA_START });

    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
