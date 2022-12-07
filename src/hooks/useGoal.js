import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Http from '../services/Http';
import { goalInputChange } from '../store/slices/inputSlice';
import { createGoalToggleChange } from '../store/slices/toggleSlice';
import { UserStorage } from '../utils/Storage';

const useGoal = goal_id => {
  const dispatch = useDispatch();
  const user_id = Number(new UserStorage().getId());
  const { goalInput } = useSelector(state => state.input);

  // handle goal input
  const isValid = goalInput.due_date && goalInput.goal_name && goalInput.description;
  const handleGoalInput = e => {
    const { name, value } = e.target;
    dispatch(goalInputChange({ ...goalInput, [name]: value, userId: user_id }));
  };

  // mutation server state

  // 1. add new user goal
  const goal_post = new Http('goals').post;
  const { mutate: create_goal } = useMutation(goal_post);

  const handleCreateGoal = () => {
    create_goal(goalInput, {
      onSuccess: () => {
        dispatch(createGoalToggleChange());
      },
    });
  };

  // 2. update is_complete of goal
  const patchIsComplete = new Http(`goals/${Number(goal_id)}`).patch;
  const { mutate: complete_goal } = useMutation(patchIsComplete);
  const handleIsComplete = () => {
    complete_goal({ is_complete: true });
  };

  // 3. delete goals
  const deleteGoal = new Http(`goals/${Number(goal_id)}`).delete;
  const { mutate: removeGoal } = useMutation(deleteGoal);
  const handleDelete = () => {
    removeGoal(Number(goal_id));
  };

  return { isValid, handleCreateGoal, handleIsComplete, handleGoalInput, handleDelete };
};

export default useGoal;
