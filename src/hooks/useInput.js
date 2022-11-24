import { useState } from 'react';

const useInput = () => {
  const [input, setInput] = useState();

  const handleInputChange = e => {
    const { name, value } = e.target;
    console.log({ [name]: value });
    // setInput({ ...input, [name]: value });
  };

  return { input, handleInputChange };
};

export default useInput;
