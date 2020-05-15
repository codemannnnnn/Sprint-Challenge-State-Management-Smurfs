import React, { useState } from "react";
import { connect } from "react-redux";

import { postData } from "../store/actions";

const initialForm = {
  name: "",
  age: "",
  height: "",
};

function Form({ postData }) {
  const [smurfFormState, setSmurfFormState] = useState(initialForm);

  const onSubmit = (event) => {
    event.preventDefault();
    postData(smurfFormState);

    setSmurfFormState(initialForm);
  };

  const onChange = (event) => {
    setSmurfFormState({
      ...smurfFormState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit} className="smurf-form">
      <h3>New Smurf</h3>
      <input
        value={smurfFormState.name}
        onChange={onChange}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        value={smurfFormState.age}
        onChange={onChange}
        type="text"
        name="age"
        placeholder="Age"
      />
      <input
        value={smurfFormState.height}
        onChange={onChange}
        type="text"
        name="height"
        placeholder="Height"
      />
      <button onClick={onSubmit}>Add Smurf</button>
    </form>
  );
}

export default connect(null, { postData })(Form);
