import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Http from '../services/Http';
import { goalInputChange } from '../store/slices/inputSlice';
import { createGoalToggleChange, editGoalToggleChange } from '../store/slices/toggleSlice';
import { UserStorage } from '../utils/Storage';

const useGoal = goal_id => {
  const dispatch = useDispatch();
  const user_id = Number(new UserStorage().getId());
  const { goalInput } = useSelector(state => state.input);
  const queryClient = useQueryClient();

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
        queryClient.invalidateQueries('user');
      },
    });
  };

  // 2. update is_complete of goal
  const patchIsComplete = new Http(`goals/${Number(goal_id)}`).patch;
  const { mutate: complete_goal } = useMutation(patchIsComplete);
  const handleIsComplete = () => {
    complete_goal(
      { is_complete: true },
      {
        onSuccess: () => {
          queryClient.invalidateQueries('user');
        },
      }
    );
  };

  // 3. delete goals
  const deleteGoal = new Http(`goals/${Number(goal_id)}`).delete;
  const { mutate: removeGoal } = useMutation(deleteGoal);
  const handleDelete = () => {
    removeGoal(Number(goal_id), {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      },
    });
  };

  // 4. update goals
  const patchUpdates = new Http(`goals/${goalInput.id}`).patch;
  const { mutate: update_goal } = useMutation(patchUpdates);
  const handleUpdates = () => {
    update_goal(goalInput, {
      onSuccess: () => {
        dispatch(editGoalToggleChange());
        queryClient.invalidateQueries('user');
      },
    });
  };

  return {
    goalInput,
    isValid,
    handleCreateGoal,
    handleIsComplete,
    handleGoalInput,
    handleDelete,
    handleUpdates,
  };
};

export default useGoal;
