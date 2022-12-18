import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Http from '../services/Http';
import { initialTodo, todoInputChange } from '../store/slices/inputSlice';

const useDetail = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { toggle, input } = useSelector(state => state);
  const { goal, _toggle } = toggle.detailToggle;

  // hadle todo Input

  const handleTodoInput = e => {
    const { name, value } = e.target;
    dispatch(todoInputChange({ ...input.todoInput, [name]: value }));
  };

  // add todo
  const todo_post = new Http(`todos`).post;
  const { mutate: create_post } = useMutation(todo_post);
  const handleCreateTodo = () => {
    if (input.todoInput) {
      const default_input = { ...input.todoInput, goalId: goal.id, is_complete: false };
      create_post(default_input, {
        onSuccess: () => {
          dispatch(todoInputChange(initialTodo));
          queryClient.invalidateQueries('goals');
        },
      });
    }
  };

  return { _toggle, goal, handleTodoInput, handleCreateTodo, input };
};

export default useDetail;
