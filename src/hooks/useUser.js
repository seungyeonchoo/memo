import { useQuery } from 'react-query';
import Http from '../services/Http';

const useUser = user_id => {
  // fetch user data
  const fetchUserData = new Http(`users/${user_id}`);
  const { data: userData, refetch: refetchUser } = useQuery(['user', user_id], () =>
    fetchUserData.get({ _embed: 'goals' })
  );

  return { userData, refetchUser };
};

export default useUser;