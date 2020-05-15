import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchData } from "../store/actions";

import Smurf from "./Smurf";
import Form from "./Form";

const Smurfs = ({ isFetching, pullsData, isPosting, error }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div>
        <h2>Smurf Info</h2>
        {isFetching && <h3>Fetching Data</h3>}
        {isPosting && <h3>Posting Your Smurf</h3>}
        {!isFetching &&
          !isPosting &&
          pullsData &&
          pullsData.map((item) => {
            return <Smurf key={item.id} item={item} />;
          })}

        <Form />
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.smurfR.isFetching,
    isPosting: state.smurfR.isPosting,
    pullsData: state.smurfR.pullsData,
  };
};

export default connect(mapStateToProps, { fetchData })(Smurfs);
