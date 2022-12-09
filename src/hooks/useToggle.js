import { useDispatch, useSelector } from 'react-redux';
import { goalInputChange, initialGoal } from '../store/slices/inputSlice';
import {
  authToggleChange,
  createGoalToggleChange,
  editGoalToggleChange,
} from '../store/slices/toggleSlice';

const useToggle = goal => {
  const dispatch = useDispatch();
  const { createGoalToggle, authToggle, editGoalToggle } = useSelector(state => state.toggle);

  // handle login and signup
  const handleAuthToggle = () => {
    dispatch(authToggleChange());
  };

  // handle add goal toggle
  const handleCreateGoalToggle = () => {
    dispatch(goalInputChange(initialGoal));
    dispatch(createGoalToggleChange());
  };

  // handle edit goal toggle
  const handleEditGoalToggle = () => {
    !editGoalToggle ? dispatch(goalInputChange(goal)) : dispatch(goalInputChange(initialGoal));
    dispatch(editGoalToggleChange());
  };
  return {
    createGoalToggle,
    authToggle,
    editGoalToggle,
    handleAuthToggle,
    handleCreateGoalToggle,
    handleEditGoalToggle,
  };
};

export default useToggle;
