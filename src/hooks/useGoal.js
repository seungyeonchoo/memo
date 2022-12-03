import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Http from '../services/Http';
import { addGoalChange } from '../store/slices/toggleSlice';

const useGoal = () => {
  const goalPost = new Http('goals');
  const dispatch = useDispatch();
  const { goalInput } = useSelector(state => state.input);

  // mutation server state
  // 1. add new user goal
  const { mutate: createGoal } = useMutation(goalPost.post);
  const createNewGoal = () => {
    createGoal(goalInput, {
      onSuccess: () => {
        dispatch(addGoalChange());
      },
    });
  };
  // 2. update is_complete of goal
  const { mutate: updateIsComplete } = useMutation(goalPost.patch);
  const completeGoal = () => {
    updateIsComplete(1, { is_complete: true });
  };

  return { createNewGoal, completeGoal };
};

export default useGoal;
