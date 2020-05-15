import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchData } from "../store/actions";

import Smurf from "./Smurf.js";
import Form from "./Form.js";

function Smurfs({ isFetching, isPosting, smurfData, fetchData }) {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="smurfs">
      <h2>Smurf it up</h2>
      {isFetching && <h2>Fetching Smurf Data...</h2>}
      {isPosting && <h2>Posting New Smurf...</h2>}
      {!isFetching &&
        !isPosting &&
        smurfData &&
        smurfData.map((item) => {
          return <Smurf key={item.id} item={item} />;
        })}
      <Form />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.smurfs.isFetching,
    isPosting: state.smurfs.isPosting,
    smurfData: state.smurfs.smurfData,
  };
};

export default connect(mapStateToProps, { fetchData })(Smurfs);
