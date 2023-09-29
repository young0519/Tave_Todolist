// 할 일 1개 단위
import * as t from "../styles/TodoStyle"
import { BiEdit } from 'react-icons/bi';
import { CgCheck, CgClose } from 'react-icons/cg';
import { AiFillCloud } from 'react-icons/ai';

const TodoItem = ({item}) => {

  const handleEditClick = () => {
    console.log("수정"); // 수정 버튼 클릭 시 실행되는 동작
  };

  const handleCheckClick = (key) => {
    console.log("완료"); // 체크 버튼 클릭 시 실행되는 동작
    console.log(item.id)  // 
  };

  const handleDeleteClick = () => {
    console.log("삭제"); 
  };


  return (
    <t.TodoItemContainer key={item.id}>
      <AiFillCloud className="icon"/>
      <p>{item.todo}</p>
      <t.TodoBtnContainer>
        {/* <BiEdit className="todoBtn" onClick={handleEditClick} />  */}
        <CgClose className="todoBtn" onClick={handleDeleteClick} /> 
        <CgCheck className="todoBtn" onClick={handleCheckClick} /> 
      </t.TodoBtnContainer>
    </t.TodoItemContainer>
  )
}

export default TodoItem;