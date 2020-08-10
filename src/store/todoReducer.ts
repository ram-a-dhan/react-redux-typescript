const initialState:Todo[] = [
  { id: 1, text: 'wake up' , completed: true },
  { id: 2, text: 'learn typescript' , completed: false },
  { id: 3, text: 'have emotional breakdown' , completed: true },
  { id: 4, text: 'sleep' , completed: false },
]

const todoReducer = (state:Todo[] = initialState, action:TodoAction) => {
  if (action.type === 'ADD_TODO') {
    let id:number|null = null;
    const todos = state;
    if (todos.length > 0) {
      id = todos[todos.length - 1].id + 1;
    } else {
      id = 1;
    }
    const newTodo:Todo = {
      id,
      text: action.payload,
      completed: false,
    };
    return [ ...state, newTodo ];

  } else if (action.type === 'EDIT_TODO') {
    let newState:Todo[] = state.map(todo => {
      if (todo.id === action.payload) todo.completed = !todo.completed;
      return todo;
    });
    return newState;

  } else if (action.type === 'DELETE_TODO') {
    let newState:Todo[] = state.filter(
      todo => todo.id !== action.payload
    );
    return newState;

  } else {
    return state;

  }
}

export default todoReducer;