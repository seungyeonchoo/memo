import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Http from '../services/Http';
import { goalInputChange } from '../store/slices/inputSlice';
import { addGoalChange } from '../store/slices/toggleSlice';

const useGoal = () => {
  const dispatch = useDispatch();
  const { goalInput } = useSelector(state => state.input);

  // handle goal input

  const handleGoalInput = e => {
    const { name, value } = e.target;
    dispatch(goalInputChange({ ...goalInput, [name]: value }));
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
  const patchIsComplete = new Http('goals/1').patch;
  const { mutate: updateIsComplete } = useMutation(patchIsComplete);
  const completeGoal = () => {
    updateIsComplete({ is_complete: true });
  };

  return { createNewGoal, completeGoal, handleGoalInput };
};

export default useGoal;
