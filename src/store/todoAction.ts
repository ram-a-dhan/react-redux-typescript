export const addTodo = (text:string):TodoAction => {
  return {
    type: 'ADD_TODO',
    payload: text,
  }
}

export const editTodo = (id:number):TodoAction => {
  return {
    type: 'EDIT_TODO',
    payload: id,
  }
}

export const deleteTodo = (id:number):TodoAction => {
  return {
    type: 'DELETE_TODO',
    payload: id,
  }
}