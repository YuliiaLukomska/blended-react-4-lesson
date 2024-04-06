import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodo } from 'reduxTodo/operations';

export const Form = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const todo = { text: query };
    dispatch(addTodo(todo));
    setQuery('');
  };
  const handleChange = e => {
    setQuery(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        onChange={handleChange}
        value={query}
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
