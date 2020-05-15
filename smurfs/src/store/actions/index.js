import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";

export const FETCH_DATA_INFO = "FETCH_DATA_INFO";

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_START });

    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log({ res });

        dispatch({ type: FETCH_DATA_INFO, payload: res.data[0] });
        // res.data are objects
      })
      .catch((err) => console.log(err));
  };
};

export const POST_DATA_START = "POST_DATA_START";
export const POST_DATA_INFO = "POST_DATA_INFO";

export const postData = () => {
  return (dispatch) => {
    dispatch({ type: POST_DATA_START });

    axios
      .post("http://localhost:3333/smurfs")
      .then((res) => {
        dispatch({ type: POST_DATA_INFO, payload: res.data[0] });
      })
      .catch((err) => console.log(err));
  };
};
