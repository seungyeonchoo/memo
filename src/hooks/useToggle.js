import { useDispatch, useSelector } from 'react-redux';
import { authToggleChange, createGoalToggleChange } from '../store/slices/toggleSlice';

const useToggle = () => {
  const dispatch = useDispatch();
  const { createGoalToggle, authToggle } = useSelector(state => state.toggle);

  // handle login and signup
  const handleAuthToggle = () => {
    dispatch(authToggleChange());
  };

  // handle add goal toggle
  const handleCreateGoalToggle = () => {
    dispatch(createGoalToggleChange());
  };

  return { createGoalToggle, authToggle, handleAuthToggle, handleCreateGoalToggle };
};

export default useToggle;
