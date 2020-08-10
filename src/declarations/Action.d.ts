interface AddTodoAction {
  type: 'ADD_TODO',
  payload: string,
}

interface EditTodoAction {
  type: 'EDIT_TODO',
  payload: number,
}

interface DeleteTodoAction {
  type: 'DELETE_TODO',
  payload: number,
}

type TodoAction = 
    AddTodoAction
  | EditTodoAction
  | DeleteTodoAction
;