import { useDispatch, useSelector } from 'react-redux';
import {
  goalInputChange,
  initialSignin,
  initialSignup,
  signinChange,
  signupChange,
} from '../store/slices/inputSlice';
import {
  authToggleChange,
  commentToggleChange,
  createGoalToggleChange,
  detailToggleChange,
  editGoalToggleChange,
  filterToggleChange,
  profileToggleChange,
  sideToggleChange,
  sortToggleChange,
} from '../store/slices/toggleSlice';
import { initialGoal } from '../utils/initialInputs';
import useFetch from './useFetch';

const useToggle = (item, goal, profile) => {
  const dispatch = useDispatch();
  const {
    createGoalToggle,
    authToggle,
    editGoalToggle,
    sortToggle,
    filterToggle,
    detailToggle,
    commentToggle,
    sideToggle,
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
    side: sideToggleChange,
  };

  const curr_item = Items[item];

  const handleToggle = e => {
    e.stopPropagation();
    if (item === 'goals') dispatch(goalInputChange(initialGoal));
    if (item === 'edit') dispatch(goalInputChange(!editGoalToggle ? goal : initialGoal));
    if (item === 'auth') {
      dispatch(signinChange(initialSignin));
      dispatch(signupChange(initialSignup));
    }
    dispatch(curr_item(goal ? goal.id : profile || null));
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
    sideToggle,
  };
};

export default useToggle;

// profileToggleChange: (state, action) => {
//   state.profileToggle = { ...initialProfileToggle, ...action.payload };
// },
