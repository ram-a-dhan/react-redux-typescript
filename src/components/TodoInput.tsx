import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoAction';

// interface inputType {
//     one: string,
//     two: string,
// }

const TodoInput = () => {
  const [input, setInput] = useState<string>('');
  // const [input, setInput] = useState<inputType>({
  //   one: '',
  //   two: '',
  // });

  const dispatch = useDispatch();

  const handleTodoInput = (event:ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = event.target;
    setInput(event.target.value);
    // setInput((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
  }

  const handleAddTodo = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.length === 0 || input.length > 50) {
      alert('To-do item must neither be empty nor exceeds 50 characters!');
    } else {
      dispatch(addTodo(input));
      setInput('');
    }
  }

  return (
    <form
      onSubmit={handleAddTodo}
      className="TodoInput input-group mb-3"
    >
      <input
        type="text"
        name="input"
        value={input}
        onChange={handleTodoInput}
        placeholder="Add new to-do"
        className="form-control"
      />
      {/* <input
        type="text"
        name="two"
        value={input.two}
        onChange={handleTodoInput}
        placeholder="Add new to-do"
        className="form-control"
      /> */}
      <div className="input-group-append">
        <button
          type="submit"
          // onClick={handleAddTodo}
          className="btn btn-secondary"
        >
          ✚
        </button>
      </div>
    </form>
  )
}

export default TodoInput;
