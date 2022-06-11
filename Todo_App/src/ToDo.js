import React from "react";

function ToDo({ task = "", id = "" }) {
  const handleClick = (e) => {
    e.target.parentElement.remove();
  };

  return (
    <div>
      <input type="checkbox" id="task"></input>
      <label htmlFor="task">{task}</label>

      <button onClick={handleClick}>Remove</button>
    </div>
  );
}

export default ToDo;
