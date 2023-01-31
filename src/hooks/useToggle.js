import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useToggle = (action, ...rest) => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = e => {
    e.stopPropagation();
    setToggle(!toggle);
  };

  const handleGlobalToggle = e => {
    e.stopPropagation();
    [...rest].forEach(el => el());
    dispatch(action());
  };

  return { toggle, handleToggle, handleGlobalToggle };
};

export default useToggle;
