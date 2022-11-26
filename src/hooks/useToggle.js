import { useDispatch, useSelector } from 'react-redux';
import { authToggleChange } from '../store/slices/toggleSlice';

const useToggle = () => {
  const dispatch = useDispatch();
  const { authToggle } = useSelector(state => state.toggle);

  const handleAuthToggle = () => {
    dispatch(authToggleChange());
  };

  return { authToggle, handleAuthToggle };
};

export default useToggle;
