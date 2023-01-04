import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import Http from '../services/Http';

const useInput2 = (url, method, initialInput, ...rest) => {
  const queryClient = useQueryClient();
  const [inputValue, setInputValue] = useState(initialInput);

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const mutateData = new Http(url)[method]; // post || patch
  const { mutate } = useMutation(mutateData);

  const handleMutation = () => {
    mutate(inputValue, {
      onSuccess: () => {
        queryClient.invalidateQueries();
        setInputValue(initialInput);
        [...rest].forEach(el => el());
      },
    });
  };

  return { inputValue, handleInput, handleMutation };
};

export default useInput2;
