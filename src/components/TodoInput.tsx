import React from 'react';
import useTodoForm from '../hooks/useTodoForm';

const TodoInput = () => {
  const {
    limit,
    input,
    handleTodoChange,
    handleTodoSubmit,
  } = useTodoForm();

  return (
    <form
      onSubmit={handleTodoSubmit}
      className="TodoInput mb-3"
    >
      <div className="input-group">
        <input
          type="text"
          name="input"
          value={input}
          onChange={handleTodoChange}
          placeholder="Add new to-do"
          className="form-control"
        />
        <div className="input-group-append">
          <button
            type="submit"
            className="btn btn-secondary"
          >
            ✚
          </button>
        </div>
      </div>
      <small
        className={
          input.length <= limit ?
          'text-light' : 'text-danger'
        }
      >
        {input.length}/{limit} characters
      </small>
    </form>
  )
}

export default TodoInput;
