import { useEffect } from 'react';
import { useQuery } from 'react-query';
import Http from '../services/Http';

const useUser = (queryId, userId) => {
  const url = userId ? `users/${userId}` : 'users';
  const queryKey = ['User', queryId];
  const userFetch = new Http(url);

  const { data } = useQuery(queryKey, () => userFetch.get());

  return { data };
};

export default useUser;
