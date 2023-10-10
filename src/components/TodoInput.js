import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { useDispatch, useStore } from "react-redux";

import * as m from "../styles/MainStyle"
import { AddTodo } from "../redux/action";


const TodoInput = () => {
  const [toDoText, setToDoText] = useState("");
  const dispatch = useDispatch();

  const handleTodoSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      todo : toDoText,
      id : uuidv4(),
      isDone : false,
    };
    dispatch(AddTodo(newTodo));
    setToDoText('');
  };



  return (
    <m.InputContainer className="todoInput">
        <input 
          type="text"
          onChange={(e) => {
            setToDoText(e.target.value);
          }}
          value={toDoText}
          placeholder="할 일을 입력하세요 :)"
        />
        <button onClick={(e) => {
          handleTodoSubmit(e);
          setToDoText("");
        }}>ADD</button>
      </m.InputContainer>
  )
}

export default TodoInput;