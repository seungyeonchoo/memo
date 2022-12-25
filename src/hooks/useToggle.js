import { useDispatch, useSelector } from 'react-redux';
import { goalInputChange } from '../store/slices/inputSlice';
import {
  authToggleChange,
  commentToggleChange,
  createGoalToggleChange,
  detailToggleChange,
  editGoalToggleChange,
  filterToggleChange,
  profileToggleChange,
  sortToggleChange,
} from '../store/slices/toggleSlice';
import { initialGoal } from '../utils/initialInputs';
import useFetch from './useFetch';

const useToggle = (item, goal, profile) => {
  const dispatch = useDispatch();
  const { refetch } = useFetch('todos');
  const {
    createGoalToggle,
    authToggle,
    editGoalToggle,
    sortToggle,
    filterToggle,
    detailToggle,
    commentToggle,
  } = useSelector(state => state.toggle);

  const Items = {
    auth: authToggleChange,
    goals: createGoalToggleChange,
    sort: sortToggleChange,
    edit: editGoalToggleChange,
    filter: filterToggleChange,
    detail: detailToggleChange,
    profile: profileToggleChange,
    comments: commentToggleChange,
  };

  const curr_item = Items[item];

  const handleToggle = e => {
    e.stopPropagation();
    if (item === 'goals') dispatch(goalInputChange(initialGoal));
    if (item === 'edit') dispatch(goalInputChange(!editGoalToggle ? goal : initialGoal));
    dispatch(curr_item(item === 'detail' ? goal.id : profile || null));
    // if (item === 'detail') refetch();
  };

  return {
    createGoalToggle,
    authToggle,
    editGoalToggle,
    sortToggle,
    filterToggle,
    detailToggle,
    handleToggle,
    commentToggle,
  };
};

export default useToggle;

// profileToggleChange: (state, action) => {
//   state.profileToggle = { ...initialProfileToggle, ...action.payload };
// },
