import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Http from '../services/Http';
import { editGoalToggleChange } from '../store/slices/toggleSlice';

const usePatch = (item, todo) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { goalInput } = useSelector(state => state.input);
  const Items = {
    goals: {
      id: goalInput.id,
      input: goalInput,
      init: editGoalToggleChange,
    },
    todos: {
      id: todo?.id,
      input: { comment_toggle: !todo?.comment_toggle },
      init: null,
    },
  };

  const curr_item = Items[item];

  const patchUpdates = new Http(`${item}/${curr_item.id}`).patch;
  const { mutate } = useMutation(patchUpdates);
  const handleUpdates = () => {
    mutate(curr_item.input, {
      onSuccess: () => {
        if (item === 'goals') dispatch(curr_item.init());
        queryClient.invalidateQueries(item);
        if (item === 'todos') queryClient.invalidateQueries('goals');
      },
    });
  };

  return { handleUpdates };
};

export default usePatch;
