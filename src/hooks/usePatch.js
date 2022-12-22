import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Http from '../services/Http';
import { editGoalToggleChange } from '../store/slices/toggleSlice';

const usePatch = item => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { goalInput } = useSelector(state => state.input);
  const Items = {
    goals: {
      id: goalInput.id,
      input: goalInput,
      init: editGoalToggleChange,
    },
  };

  const curr_item = Items[item];

  const patchUpdates = new Http(`goals/${curr_item.id}`).patch;
  const { mutate } = useMutation(patchUpdates);
  const handleUpdates = () => {
    mutate(curr_item.input, {
      onSuccess: () => {
        dispatch(curr_item.init());
        queryClient.invalidateQueries(item);
        // queryClient.invalidateQueries('user');
      },
    });
  };

  return { handleUpdates };
};

export default usePatch;
