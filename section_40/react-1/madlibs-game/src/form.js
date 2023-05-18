import React, { useState } from "react";

function Form({ onSubmit }) {
  const [inputs, setInputs] = useState({
    noun: "",
    verb: "",
    adjective: "",
    color: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Noun:
        <input
          type="text"
          name="noun"
          value={inputs.noun}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Verb:
        <input
          type="text"
          name="verb"
          value={inputs.verb}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Adjective:
        <input
          type="text"
          name="adjective"
          value={inputs.adjective}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Color:
        <input
          type="text"
          name="color"
          value={inputs.color}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Create Story</button>
    </form>
  );
}

export default Form;