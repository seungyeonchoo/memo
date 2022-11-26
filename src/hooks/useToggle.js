import { useState } from 'react';

const useToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleIsToggled = e => {
    // e.preventDefault();
    setIsToggled(!isToggled);
  };

  return { isToggled, handleIsToggled };
};

export default useToggle;
