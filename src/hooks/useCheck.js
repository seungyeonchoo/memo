import { useMutation, useQueryClient } from 'react-query';
import Http from '../services/Http';

const useCheck = (item, id) => {
  const queryClient = useQueryClient();

  const patchIsComplete = new Http(`${item}/${Number(id)}`).patch;
  const { mutate } = useMutation(patchIsComplete);

  const handleIsComplete = e => {
    const { checked } = e.target;
    const isComplete = { is_complete: checked };

    mutate(isComplete, {
      onSuccess: () => {
        queryClient.invalidateQueries(item);
      },
    });
  };

  return { handleIsComplete };
};

export default useCheck;
