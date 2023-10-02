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


// 완료 Action