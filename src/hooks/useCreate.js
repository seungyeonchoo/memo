import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Http from '../services/Http';
import { goalInputChange, todoInputChange } from '../store/slices/inputSlice';
import { createGoalToggleChange } from '../store/slices/toggleSlice';
import { initialGoal, initialTodo } from '../utils/initialInputs';

const useCreate = item => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { input, toggle } = useSelector(state => state);
  const { goalInput, todoInput } = input;

  const Items = {
    goals: {
      input: goalInput,
      init: goalInputChange,
      initial: initialGoal,
    },
    todos: {
      input: { ...todoInput, goalId: toggle.detailToggle.goal },
      init: todoInputChange,
      initial: initialTodo,
    },
    // memos: {
    //   input: { ...memoInput, goalId: toggle.detailToggle.goal },
    //   init: memoInputChange,
    //   initial: initialMemo,
    // },
  };

  const curr_item = Items[item];

  const post_item = new Http(item).post;
  const { mutate } = useMutation(post_item);
  const handleCreate = () => {
    if (curr_item.input) {
      mutate(curr_item.input, {
        onSuccess: () => {
          item === 'goals' && dispatch(createGoalToggleChange());
          dispatch(curr_item.init(curr_item.initial));
          queryClient.invalidateQueries(item);
          queryClient.invalidateQueries('users');
          if (item === 'todos' || item === 'memos') queryClient.invalidateQueries('goals');
        },
      });
    }
  };

  return { handleCreate };
};

export default useCreate;