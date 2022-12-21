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
    switch (item) {
      case 'goals':
        dispatch(goalInputChange(initialGoal));
        dispatch(curr_item());
        break;

      case 'edit':
        !editGoalToggle ? dispatch(goalInputChange(goal)) : dispatch(goalInputChange(initialGoal));
        dispatch(curr_item());
        break;

      case 'detail':
        dispatch(curr_item(goal.id));
        break;

      default:
        dispatch(curr_item());
        break;
    }
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
