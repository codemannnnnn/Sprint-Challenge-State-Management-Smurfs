import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchData } from "../store/actions";

const Smurfs = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    // <main className="peg-heading">
    //   {props.isFetching && <h3>Fetching Data...</h3>}
    //   {props.info && (
    //     <div>
    //       <header className="header-peg">
    //         <h1>{props.info.name}</h1>
    //         <img src={props.info.image.small} />
    //       </header>
    //       <h2>Market Cap Rank: {props.info.market_cap_rank}</h2>
    //     </div>
    //   )}
    //   {props.market_data && props.info && (
    //     <div>
    //       <h3>BTC:(ath) {props.market_data.ath.btc}</h3>
    //       <h3>ETH:(ath) {props.market_data.ath.eth}</h3>
    //       <h5>Last Updated Timestamp: {props.info.last_updated}</h5>
    //     </div>
    //   )}
    // </main>

    <main>
      {props.isFetching && <h3>Fetching Data...</h3>}

      {props.info && (
        <div className="main-charac">
          <h1>Name: {props.info.name}</h1>
          <h3>Age: {props.info.age}</h3>
          <h3>Height: {props.info.height}</h3>
        </div>
      )}
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="name"
            className="add-btn"
          />
          <button onClick={props.post}>submit</button>
        </label>
      </form>
    </main>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isFetching: state.smurfR.isFetching,
    info: state.smurfR.info,
    post: state.smurfR.post,
  };
};

export default connect(mapStateToProps, { fetchData })(Smurfs);
