import { useState } from 'react';

const useToggle2 = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = e => {
    e.stopPropagation();
    setToggle(!toggle);
  };

  return [toggle, handleToggle];
};

export default useToggle2;
