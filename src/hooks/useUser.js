import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Http from '../services/Http';
import { goalInputChange } from '../store/slices/inputSlice';

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

  return { data, handleInputChange };
};

export default useUser;
