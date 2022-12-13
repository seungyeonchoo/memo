import { useDispatch, useSelector } from 'react-redux';
import { goalInputChange, initialGoal } from '../store/slices/inputSlice';
import {
  authToggleChange,
  createGoalToggleChange,
  editGoalToggleChange,
  filterToggleChange,
  sortToggleChange,
} from '../store/slices/toggleSlice';

const useToggle = goal => {
  const dispatch = useDispatch();
  const { createGoalToggle, authToggle, editGoalToggle, sortToggle, filterToggle } = useSelector(
    state => state.toggle
  );

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

  // handle sort and filter toggle

  const handleSortToggle = () => {
    dispatch(sortToggleChange());
  };

  const handleFilterToggle = () => {
    dispatch(filterToggleChange());
  };

  return {
    createGoalToggle,
    authToggle,
    editGoalToggle,
    sortToggle,
    filterToggle,
    handleAuthToggle,
    handleCreateGoalToggle,
    handleEditGoalToggle,
    handleSortToggle,
    handleFilterToggle,
  };
};

export default useToggle;
