import { useMutation, useQueryClient } from 'react-query';
import Http from '../services/Http';

const useGoal = goal_id => {
  const queryClient = useQueryClient();

  // 2. update is_complete of goal
  const patchIsComplete = new Http(`goals/${Number(goal_id)}`).patch;
  const { mutate: complete_goal } = useMutation(patchIsComplete);
  const handleIsComplete = e => {
    const { checked } = e.target;

    if (checked) {
      complete_goal(
        { is_complete: true },
        {
          onSuccess: () => {
            queryClient.invalidateQueries('goals');
            queryClient.invalidateQueries('user');
          },
        }
      );
    } else {
      complete_goal(
        { is_complete: false },
        {
          onSuccess: () => {
            queryClient.invalidateQueries('goals');
            queryClient.invalidateQueries('user');
          },
        }
      );
    }
  };

  // 3. delete goals
  const deleteGoal = new Http(`goals/${Number(goal_id)}`).delete;
  const { mutate: removeGoal } = useMutation(deleteGoal);
  const handleDelete = () => {
    removeGoal(Number(goal_id), {
      onSuccess: () => {
        queryClient.invalidateQueries('goals');
        queryClient.invalidateQueries('user');
      },
    });
  };

  return {
    handleIsComplete,
    handleDelete,
  };
};

export default useGoal;
