const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const DELETE_TODO = 'DELETE_TODO';

export interface AddTodoAction {
  type: typeof ADD_TODO,
  payload: string,
}

export interface EditTodoAction {
  type: typeof EDIT_TODO,
  payload: number,
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO,
  payload: number,
}

export type TodoAction = 
    AddTodoAction
  | EditTodoAction
  | DeleteTodoAction
;