// 할 일 1개 단위
import * as t from "../styles/TodoStyle"
import { BiEdit } from 'react-icons/bi';
import { CgCheck, CgClose } from 'react-icons/cg';
import { AiFillCloud } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { DeleteTodo, UpdateTodo } from '../redux/action'
import { useState } from "react";



const TodoItem = ({item}) => {
  const dispatch = useDispatch();
  const [newText, setNewText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteClick = () => {
    // console.log("삭제"); 
    dispatch(DeleteTodo(item.id))
  };
  
  const handleEditClick = () => {
    // console.log("수정"); 
    setIsEditing(true);
    setNewText(item.todo);
    
  };
  
  const handleCheckClick = (key) => {
    console.log("완료"); 
    console.log(item.id)  
  };

  const handleSaveClick = () => {
    if (newText.trim() !== "") {
      dispatch(UpdateTodo({
        id: item.id,
        todo: newText
      }));
      setIsEditing(false);
    }
  };
  
  const handleUndoClick = () => {
    setIsEditing(false);
  }




  return (
    <t.TodoItemContainer key={item.id}>
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
      <t.TodoBtnContainer>
      {!isEditing && (
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
      </t.TodoBtnContainer>
    </t.TodoItemContainer>
  )
}

export default TodoItem;