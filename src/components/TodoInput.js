import { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { useDispatch, useStore } from "react-redux";
import { auth, db } from "../firebase";

import * as m from "../styles/MainStyle"
import { AddTodo } from "../redux/action";
import addTodoToFirebase from "../firebase/addTodoFirebase";


const TodoInput = () => {
  const [toDoText, setToDoText] = useState("");
  const [uid, setUid] = useState(null); 
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    });
  }, []);

  const handleTodoSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      todo : toDoText,
      todoId : uuidv4(),
      isDone : false,
    };
    dispatch(AddTodo(newTodo));
    if (uid) { // uid가 있을 때만 addTodoToFirebase 함수 호출
      addTodoToFirebase(db, uid, newTodo.todoId, newTodo.todo, newTodo.isDone);
    }
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