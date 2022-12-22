import { useDispatch, useSelector } from 'react-redux';
import { goalInputChange } from '../store/slices/inputSlice';
import {
  authToggleChange,
  createGoalToggleChange,
  detailToggleChange,
  editGoalToggleChange,
  filterToggleChange,
  sortToggleChange,
} from '../store/slices/toggleSlice';
import { initialGoal } from '../utils/initialInputs';

const useToggle = (item, goal) => {
  const dispatch = useDispatch();
  const { createGoalToggle, authToggle, editGoalToggle, sortToggle, filterToggle, detailToggle } =
    useSelector(state => state.toggle);

  const Items = {
    auth: authToggleChange,
    goals: createGoalToggleChange,
    sort: sortToggleChange,
    edit: editGoalToggleChange,
    filter: filterToggleChange,
    detail: detailToggleChange,
  };

  const curr_item = Items[item];

  const handleToggle = () => {
    if (item === 'goals') dispatch(goalInputChange(initialGoal));
    if (item === 'edit') dispatch(goalInputChange(!editGoalToggle ? goal : initialGoal));
    dispatch(curr_item(item === 'detail' ? goal.id : null));
  };

  return {
    createGoalToggle,
    authToggle,
    editGoalToggle,
    sortToggle,
    filterToggle,
    detailToggle,
    handleToggle,
  };
};

export default useToggle;
