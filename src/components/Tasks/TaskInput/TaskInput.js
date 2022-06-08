import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");

  const taskInputChangeHandler = (event) => {
    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault(); 

    props.onAddTask(inputText);



    setInputText("")

  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Задачи</label>
        <input type="text" value={inputText} onChange={taskInputChangeHandler} />
      </div>
      <Button type="submit" >Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
