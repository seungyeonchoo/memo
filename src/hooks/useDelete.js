import { useMutation, useQueryClient } from 'react-query';
import Http from '../services/Http';

const useDelete = (item, id) => {
  const queryClient = useQueryClient();

  const deleteGoal = new Http(`${item}/${Number(id)}`).delete;
  const { mutate } = useMutation(deleteGoal);

  const handleDelete = e => {
    e.stopPropagation();
    mutate(Number(id), {
      onSuccess: () => {
        queryClient.invalidateQueries(item);
        if (item === 'todos' || item === 'memos') queryClient.invalidateQueries('goals');
      },
    });
  };

  return { handleDelete };
};

export default useDelete;
