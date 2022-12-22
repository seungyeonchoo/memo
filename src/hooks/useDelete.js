import { useMutation, useQueryClient } from 'react-query';
import Http from '../services/Http';

const useDelete = (item, id) => {
  const queryClient = useQueryClient();

  const deleteGoal = new Http(`${item}/${Number(id)}`).delete;
  const { mutate } = useMutation(deleteGoal);

  const handleDelete = () => {
    mutate(Number(id), {
      onSuccess: () => {
        queryClient.invalidateQueries(item);
      },
    });
  };

  return { handleDelete };
};

export default useDelete;
