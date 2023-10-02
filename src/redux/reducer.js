import {v4 as uuidv4} from 'uuid';

// 초기 State 값
export const INITIAL_STATE = {
  todos : [
    {
      id : uuidv4(), 
      todo:'Redux 정복하기', 
    },
    {
      id : uuidv4(), 
      todo:'성공적인 스터디 이루기',
    },
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
        todos : state.todos.filter((item) => item.id !== action.content)
      };

    // TODO: Update


    // TODO: Complete

    default : 
      return state;
  }

}