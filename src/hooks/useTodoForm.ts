import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoAction";

const useTodoForm = () => {
  const [limit] = useState<number>(50);
  const [input, setInput] = useState<string>('');

  const dispatch = useDispatch();

  const handleTodoChange = (event:ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }
  
  const handleTodoSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.length === 0 || input.length > limit) {
      alert('To-do item must neither be empty nor exceeds 50 characters!');
    } else {
      dispatch(addTodo(input));
      setInput('');
    }
  }

  return {
    limit,
    input,
    handleTodoChange,
    handleTodoSubmit,
  }
}

export default useTodoForm;