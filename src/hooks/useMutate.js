import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Http from '../services/Http';
import StorageUtils from '../utils/StorageUtils';

const useMutate = (url, method, inputValue, ...rest) => {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  const mutateData = new Http(url)[method];
  const { mutate, data } = useMutation(mutateData);

  const handleMutation = e => {
    e.stopPropagation();
    mutate(inputValue, {
      onSuccess: data => {
        queryClient.invalidateQueries();
        [...rest].forEach(el => el(e));

        if (url === 'signin') {
          StorageUtils.setToken(data.accessToken);
          StorageUtils.setId(data.user.id);
          nav(`/main`);
        }
      },
    });
  };

  return { handleMutation, data };
};

export default useMutate;
