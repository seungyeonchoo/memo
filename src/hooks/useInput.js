import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useInput = (input, action, ...rest) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(input);

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleGlobalInput = e => {
    const { name, value } = e.target;
    dispatch(action({ ...input, [name]: value }));
  };

  const setGlobalInput = () => {
    dispatch(action(input));
  };

  const initInput = () => {
    setInputValue(input);
  };

  return { inputValue, handleInput, initInput, handleGlobalInput, setGlobalInput };
};

export default useInput;
