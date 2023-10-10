import { useSelector } from "react-redux";
import * as t from "../styles/TodoStyle"
import TodoItem from "../components/TodoItem"


function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <t.TodoListContainer>
      <t.TodoListBox>
          <h2>미완료 TODO - {todos.filter((item) => item.isDone === false).length}</h2>
        {todos
          .filter((item) => item.isDone === false)
          .map((todo) => {
            return (
              <TodoItem key={todo.id} item={todo}/>
            );
          })}
      </t.TodoListBox>
      <t.TodoFinshBox>
          <h2>완료 TODO - {todos.filter((item) => item.isDone === true).length}</h2>
        {todos
          .filter((item) => item.isDone === true)
          .map((todo) => {
            return (
              <TodoItem key={todo.id} item={todo} isDone={todo.isDone} background={"rgba(250, 173, 162, 0.5)"} color={"#E67278"}/>
            );
          })}
      </t.TodoFinshBox>
    </t.TodoListContainer>
  );
}

export default TodoList;