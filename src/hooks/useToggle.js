import { useDispatch, useSelector } from 'react-redux';
import { addGoalChange, authToggleChange } from '../store/slices/toggleSlice';

const useToggle = () => {
  const dispatch = useDispatch();
  const { addGoal, authToggle } = useSelector(state => state.toggle);

  const handleAuthToggle = () => {
    dispatch(authToggleChange());
  };

  const handleAddGoal = () => {
    dispatch(addGoalChange());
  };

  return { addGoal, authToggle, handleAuthToggle, handleAddGoal };
};

export default useToggle;
