//import React from "react";

const Dropdown = (props) => {
  const handleChange = (e) => {
    props.setSelectedCity(e.target.value);
  };
  return (
    <div>
      <label>Select a city: </label>
      <select onChange={handleChange}>
        <option value="harrow">Harrow</option>
        <option value="heathrow">Heathrow</option>
        <option value="stratford">Stratford</option>
      </select>
    </div>
  );
};
export default Dropdown;
