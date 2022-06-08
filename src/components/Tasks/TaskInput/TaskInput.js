import React, { useState } from "react";
import styled from "styled-components";


import Button from "../../UI/Button/Button";
import "./TaskInput.css";


const FormControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  color: ${(props => props.invalid ? "red" : "black")};
  margin-bottom: 0.5rem;
  font-size:20px;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${(props => props.invalid ? "red" : "#ccc")};
  background:  ${(props => props.invalid ? "rgb(199, 141, 141)" : "transparent")};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #c8e1e4;
  border-color: #00358b;
}

&.invalid label {
  color: red;
}
`
const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");
  const [isInputValid, setIsInputValid] = useState(true)

  const taskInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsInputValid(true)
    }

    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (inputText.trim().length === 0) {
      setIsInputValid(false)
      return;
    }
    props.onAddTask(inputText);
    setInputText("")
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isInputValid && 'invalid'}> */}
      <FormControl invalid={!isInputValid}>
        <label>Задачи</label>
        <input type="text" value={inputText} onChange={taskInputChangeHandler} />
      </FormControl>
      <Button type="submit" >Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;

// <div className={`form-control ${!isInputValid ? 'invalid' : ''}`}>
//         <label>Задачи</label>
//         <input type="text" value={inputText} onChange={taskInputChangeHandler} />

//          <label style={{ color: !isInputValid ? 'red' : 'black' }}>Задачи</label> 
//         <input style={{ borderColor: !isInputValid ? 'red' : 'black', backgroundColor: !isInputValid ? 'salmon' : 'transparent' }} type="text" value={inputText} onChange={taskInputChangeHandler} />

//       </div>