import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useInput = (input, action) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(input);

  // handle local input
  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const initInput = () => {
    setInputValue(input);
  };

  // handle global state
  const handleGlobalInput = e => {
    const { name, value } = e.target;
    dispatch(action({ ...input, [name]: value }));
  };

  const setGlobalInput = () => {
    dispatch(action(input));
  };

  return { inputValue, handleInput, initInput, handleGlobalInput, setGlobalInput };
};

export default useInput;
