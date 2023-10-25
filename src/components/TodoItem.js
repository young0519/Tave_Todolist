// 할 일 1개 단위
import * as t from "../styles/TodoStyle"
import { BiEdit } from 'react-icons/bi';
import { CgCheck, CgClose } from 'react-icons/cg';
import { AiFillCloud } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { CompleteTodo, DeleteTodo, UpdateTodo } from '../redux/action'
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";

import addTodoToFirebase from "../firebase/addTodoFirebase";
import updateTodoInFirebase from "../firebase/UpdateTodoFirebase";
import DeleteTodoFirebase from "../firebase/DeleteTodoFirebase";




const TodoItem = ({item, isDone, background, color}) => {
  const dispatch = useDispatch();
  const [newText, setNewText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [uid, setUid] = useState(null); 


  // 로그인 사용자의 정보 가져오기
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    });
  }, []);

  // Todo 삭제 함수
  const handleDeleteClick = () => {
    // console.log("삭제"); 
    dispatch(DeleteTodo(item.id));
    DeleteTodoFirebase(db, uid, item.id)
  };
  
  // Todo 수정하려는 함수
  const handleEditClick = () => {
    // console.log("수정"); 
    setIsEditing(true);
    setNewText(item.todo);
    
  };
  
  // Todo 완료 함수 
  const handleCheckClick = () => {
    // console.log("완료"); 
    dispatch(CompleteTodo(item.id));
    updateTodoInFirebase(db, uid, item.id, newText, !item.isDone);
  };

  //  Todo 수정 완료 함수
  const handleSaveClick = () => {
    if (newText.trim() !== "") {
      dispatch(UpdateTodo({
        id: item.id,
        todo: newText
      }));

      updateTodoInFirebase(db, uid, item.id, newText, item.isDone);

      setIsEditing(false);
    }
  };
  
  // Todo 수정 취소 함수
  const handleUndoClick = () => {
    setIsEditing(false);
  }

  return (
    <t.TodoItemContainer key={item.id} background={background} color={color}>
      <AiFillCloud className="icon"/>
      {!isEditing ? (
        <p>{item.todo}</p>
      ) : (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      )}  
      <t.TodoBtnContainer color={color} isDone={isDone}>
      {!isEditing && !isDone && (
        <>
          <BiEdit className="todoBtn" onClick={handleEditClick} />
          <CgClose className="todoBtn" onClick={handleDeleteClick} />
          <CgCheck className="todoBtn" onClick={handleCheckClick} />
        </>
      )}
      {isEditing && (
        <>
          <CgClose className="editBtn" onClick={handleUndoClick} />
          <CgCheck className="editBtn" onClick={handleSaveClick} />
        </>
      )}
      {isDone && (
        <>
          <CgClose className="todoBtn" onClick={handleDeleteClick} />
        </>
      )}
      </t.TodoBtnContainer>
    </t.TodoItemContainer>
  )
}

export default TodoItem;