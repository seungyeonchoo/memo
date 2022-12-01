import { useMutation, useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Http from '../services/Http';
import { goalInputChange } from '../store/slices/inputSlice';
import { addGoalChange } from '../store/slices/toggleSlice';
import useToggle from './useToggle';

const useUser = (queryId, userId) => {
  // fetch user data
  const userFetch = new Http(userId ? `users/${userId}` : 'users');
  const { data } = useQuery(['User', queryId], () => userFetch.get());

  // handle goal input change
  const dispatch = useDispatch();
  const { goalInput } = useSelector(state => state.input);

  const handleInputChange = e => {
    const { name, value } = e.target;
    dispatch(goalInputChange({ ...goalInput, [name]: value }));
  };

  // mutation server state
  // 1. add new user goal
  const goalPost = new Http('goals');
  const { mutate } = useMutation(goalPost.post);
  const addUserGoal = () => {
    mutate(goalInput, {
      onSuccess: () => {
        dispatch(addGoalChange());
      },
    });
  };

  return { data, handleInputChange, addUserGoal };
};

export default useUser;
