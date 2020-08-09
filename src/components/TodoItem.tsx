import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, deleteTodo } from '../store/todoAction';

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleEditTodo = (event:MouseEvent<HTMLButtonElement | MouseEvent>) => {
    event.preventDefault();
    dispatch(editTodo(todo.id));
  }

  const handleDeleteTodo = (event:MouseEvent<HTMLButtonElement | MouseEvent>) => {
    event.preventDefault();
    let deleteThis = window.confirm('Delete this to-do item?');
    if (deleteThis) dispatch(deleteTodo(todo.id));
  }

  return (
    <tr className="TodoItem">
      {/* <td className="text-light align-middle" style={{ fontSize: '1.75rem' }}>
        [{ todo.completed ? '✔' : '✗' }]
      </td> */}
      <td
        className={
          "text-left px-2 align-middle w-100 "
          + (todo.completed ? 'text-secondary' : 'text-light')
        }
        style={{
          textDecoration:
            todo.completed ? 'line-through' : 'none'
        }}
      >
        { todo.text }
      </td>
      <td className="py-1 text-light align-middle">
        <div className="btn-group">
          <button
            onClick={handleEditTodo}
            className="btn btn-outline-secondary"
          >
            { todo.completed ? '☑' : '☐' }
          </button>
          <button
            onClick={handleDeleteTodo}
            className="btn btn-outline-secondary"
          >
            ✖
          </button>
        </div>
      </td>
    </tr>
  )
}

export default TodoItem;