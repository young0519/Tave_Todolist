import {v4 as uuidv4} from 'uuid';

// 초기 State 값
export const INITIAL_STATE = {
  todos : [
  ]
}

export const Reducer = (state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case 'ADD' : 
      return {
        ...state,
        todos : [...state.todos, action.content]
      };

    case 'DELETE' : 
      return {
        ...state,
        todos : state.todos.filter((item) => item.todoId !== action.content)
      };

    case 'UPDATE':
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.todoId === action.content.todoId) {
            return {
              ...item,
              todo: action.content.todo,
            };
          }
          return item;
        })
      };

    case 'COMPLETE' : 
      return {
        ...state,
        todos : state.todos.map((item) => {
          if (item.todoId === action.content) {
            return {
              ...item,
              isDone : !item.isDone
            }
          }
          else {
            return item;
          }
        })
      };

    case 'SET_DOCUMENTS':
      return {
        ...state,
        todos: action.payload
      };

    default : 
      return state;
  }

}