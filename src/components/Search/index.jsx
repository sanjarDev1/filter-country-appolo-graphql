import React, { useState } from 'react';
import { useMainContext } from '../../context/Main';

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const [state, dispatch] = useMainContext();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'setValue',
      payload: input,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        placeholder='Search a country......'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
