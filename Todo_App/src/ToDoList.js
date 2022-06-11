import React from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import { useState } from "react";

function ToDoList() {
  const [ToDos, setToDos] = useState([]);

  const add = (ToDoObj) => {
    setToDos((ToDos) => [...ToDos, ToDoObj]);
  };

  const ToDoComponents = ToDos.map((todos) => (
    <ToDo task={todos.task} id={todos.id} key={todos.id} />
  ));

  return (
    <div>
      <ToDoForm makeToDo={add} />
      {ToDoComponents}
    </div>
  );
}

export default ToDoList;
