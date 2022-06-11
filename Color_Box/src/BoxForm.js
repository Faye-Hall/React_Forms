import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function BoxForm({ makeBox }) {
  const [formData, setFormData] = useState({
    color: "#33FFBD",
    height: 50,
    width: 50,
    id: "",
  });
  const handleChange = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    const { name, value } = e.target;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeBox({ ...formData, id: uuid() });
    setFormData({ color: "#33FFBD", height: 50, width: 50, id: "" });
  };
  return (
    <form id="form" onSubmit={handleSubmit}>
      <label htmlFor="color">Color: </label>
      <input
        name="color"
        id="color"
        type="color"
        value={formData.color}
        onChange={handleChange}
      ></input>
      <label htmlFor="height">Height: </label>
      <input
        name="height"
        id="height"
        type="number"
        value={formData.height}
        onChange={handleChange}
      ></input>
      <label htmlFor="width">Width: </label>
      <input
        name="width"
        id="width"
        type="number"
        value={formData.width}
        onChange={handleChange}
      ></input>

      <div> {}</div>
      <button>Submit</button>
    </form>
  );
}

export default BoxForm;
