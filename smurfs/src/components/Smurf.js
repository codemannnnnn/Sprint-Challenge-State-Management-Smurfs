import React from "react";
import { connect } from "react-redux";

function Smurf({ item }) {
  return (
    <div className="item">
      <h3>Name - {item.name}</h3>
      <p>Age - {item.age}</p>
      <p>Height - {item.height}cm</p>
    </div>
  );
}

export default connect()(Smurf);
