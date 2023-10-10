// 생성 Action 
export const AddTodo = (content) => {
  return {
    type : 'ADD',
    content
  }
}

// 삭제 Action
export const DeleteTodo = (content) => {
  return {
    type : 'DELETE',
    content 
  }
}


// 수정 Action 
export const UpdateTodo = (content) => {
  return {
    type : 'UPDATE',
    content
  }
}

// 완료 Action
export const CompleteTodo = (content) => {
  return {
    type : 'COMPLETE',
    content
  }
}