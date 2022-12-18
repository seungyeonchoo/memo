import { useDispatch, useSelector } from 'react-redux';
import { goalInputChange, initialGoal } from '../store/slices/inputSlice';
import {
  authToggleChange,
  createGoalToggleChange,
  detailToggleChange,
  editGoalToggleChange,
  filterToggleChange,
  sortToggleChange,
} from '../store/slices/toggleSlice';

const useToggle = goal => {
  const dispatch = useDispatch();
  const { createGoalToggle, authToggle, editGoalToggle, sortToggle, filterToggle, detailToggle } =
    useSelector(state => state.toggle);

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

  // handle goal detail toggle

  const handleDetailToggle = () => {
    dispatch(detailToggleChange(goal.id));
  };

  return {
    detailToggle,
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
    handleDetailToggle,
  };
};

export default useToggle;
