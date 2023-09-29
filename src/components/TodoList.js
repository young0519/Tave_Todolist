import { useSelector } from "react-redux";
import * as t from "../styles/TodoStyle"
import TodoItem from "../components/TodoItem"


function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <t.TodoListContainer>
      {todos
        .map((todo) => {
          return (
            <TodoItem key={todo.id} item={todo}/>
          );
        })}
    </t.TodoListContainer>
  );
}

export default TodoList;