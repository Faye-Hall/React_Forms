import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function ToDoForm({ makeToDo }) {
  const [formData, setFormData] = useState({ task: "", id: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const handleSumbit = (e) => {
    e.preventDefault();

    makeToDo({ ...formData, id: uuid() });
    setFormData({ task: "" });
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <label htmlFor="task">Task: </label>
        <input
          id="task"
          name="task"
          type="text"
          placeholder="Write ToDo"
          value={formData.task}
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
      <br></br>
    </div>
  );
}

export default ToDoForm;
