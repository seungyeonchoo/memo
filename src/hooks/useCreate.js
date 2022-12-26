import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Http from '../services/Http';
import { commentInputChange, goalInputChange, todoInputChange } from '../store/slices/inputSlice';
import { createGoalToggleChange } from '../store/slices/toggleSlice';
import { initialComment, initialGoal, initialTodo } from '../utils/initialInputs';

const useCreate = (item, id) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { input, toggle } = useSelector(state => state);
  const { goalInput, todoInput, commentInput } = input;

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
    comments: {
      input: { ...commentInput, todoId: id },
      init: commentInputChange,
      initial: initialComment,
    },
  };

  const curr_item = Items[item];

  const post_item = new Http(item).post;
  const { mutate } = useMutation(post_item);
  const handleCreate = () => {
    mutate(curr_item.input, {
      onSuccess: () => {
        item === 'goals' && dispatch(createGoalToggleChange());
        dispatch(curr_item.init(curr_item.initial));
        queryClient.invalidateQueries(item);
        queryClient.invalidateQueries('users');
        if (item === 'todos') queryClient.invalidateQueries('goals');
        if (item === 'comments') queryClient.invalidateQueries('todos');
      },
    });
  };

  return { handleCreate };
};

export default useCreate;
