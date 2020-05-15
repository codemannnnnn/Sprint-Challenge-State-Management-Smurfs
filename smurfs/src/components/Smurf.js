import React from "react";

import { connect } from "react-redux";

const Smurf = (item) => {
  return (
    <div>
      <h3>Name: {item.name}</h3>
      <h3>Age: {item.age}</h3>
      <h3>Height: {item.height}</h3>
    </div>
  );
};

export default connect()(Smurf);
