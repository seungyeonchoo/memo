import { useState } from 'react';

const useInput = (initialInput, ...rest) => {
  const [inputValue, setInputValue] = useState(initialInput);

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const initInput = () => {
    setInputValue(initialInput);
  };

  const handleSetInput = input => {
    setInputValue(input);
  };

  return { inputValue, handleInput, initInput, handleSetInput };
};

export default useInput;
