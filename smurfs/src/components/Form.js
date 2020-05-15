import React, { useState } from "react";
import { connect } from "react-redux";

import { postData } from "../store/actions";

const initialForm = {
  name: "",
  age: "",
  height: "",
};

function Form({ postData }) {
  const [smurfForm, setSmurfForm] = useState(initialForm);

  const onSubmit = (event) => {
    event.preventDefault();
    postData(smurfForm);

    setSmurfForm(initialForm);
  };

  const changeOn = (event) => {
    setSmurfForm({
      ...smurfForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit} className="smurf-form">
      <h3>New Smurf</h3>
      <input
        value={smurfForm.name}
        onChange={changeOn}
        type="text"
        name="name"
        placeholder="Smurf Name"
      />
      <input
        value={smurfForm.age}
        onChange={changeOn}
        type="text"
        name="age"
        placeholder="Smurf Age"
      />
      <input
        value={smurfForm.height}
        onChange={changeOn}
        type="text"
        name="height"
        placeholder="Smurf Height"
      />
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}

export default connect(null, { postData })(Form);
