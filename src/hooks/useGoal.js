import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Http from '../services/Http';
import { goalInputChange } from '../store/slices/inputSlice';
import { addGoalChange } from '../store/slices/toggleSlice';
import { UserStorage } from '../utils/Storage';

const useGoal = goal_id => {
  const dispatch = useDispatch();
  const user_id = Number(new UserStorage().getId());
  const { goalInput } = useSelector(state => state.input);

  // handle goal input

  const handleGoalInput = e => {
    const { name, value } = e.target;
    dispatch(goalInputChange({ ...goalInput, [name]: value, userId: user_id }));
  };

  // mutation server state
  // 1. add new user goal
  const postGoal = new Http('goals').post;
  const { mutate: createGoal } = useMutation(postGoal);
  const createNewGoal = () => {
    createGoal(goalInput, {
      onSuccess: () => {
        dispatch(addGoalChange());
      },
    });
  };
  // 2. update is_complete of goal
  const patchIsComplete = new Http(`goals/${Number(goal_id)}`).patch;
  const { mutate: updateIsComplete } = useMutation(patchIsComplete);
  const completeGoal = () => {
    updateIsComplete({ is_complete: true });
  };

  // 3. delete goals
  const deleteGoal = new Http(`goals/${Number(goal_id)}`).delete;
  const { mutate: removeGoal } = useMutation(deleteGoal);
  const handleDelete = () => {
    removeGoal(Number(goal_id));
  };

  return { createNewGoal, completeGoal, handleGoalInput, handleDelete };
};

export default useGoal;
