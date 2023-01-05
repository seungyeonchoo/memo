import { useState } from 'react';

const useInput2 = (initialInput, ...rest) => {
  const [inputValue, setInputValue] = useState(initialInput);

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const initInput = () => {
    setInputValue(initialInput);
  };
  return { inputValue, handleInput, initInput };
};

export default useInput2;
