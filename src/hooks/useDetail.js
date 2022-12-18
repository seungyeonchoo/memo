import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Http from '../services/Http';
import {
  initialMemo,
  initialTodo,
  memoInputChange,
  todoInputChange,
} from '../store/slices/inputSlice';

const useDetail = goal_id => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { input } = useSelector(state => state);

  // hadle todo and memo Input

  const handleTodoInput = e => {
    const { name, value } = e.target;
    dispatch(todoInputChange({ ...input.todoInput, [name]: value }));
  };

  const handleMemoInput = e => {
    const { name, value } = e.target;
    dispatch(memoInputChange({ ...input.memoInput, [name]: value }));
  };

  // fetch todo and memo data
  const fetchGoalTodos = new Http('todos');
  const fetchGoalMemos = new Http('memos');

  const { data: todoData, refetch: refetchTodos } = useQuery(['todos', { goalId: goal_id }], () =>
    fetchGoalTodos.get({ goalId: goal_id })
  );

  const { data: memoData, refetch: refetchMemos } = useQuery(['memos', { goalId: goal_id }], () =>
    fetchGoalMemos.get({ goalId: goal_id })
  );

  // add todo and memo
  const todo_post = new Http(`todos`).post;
  const memo_post = new Http(`memos`).post;

  const { mutate: create_todo } = useMutation(todo_post);
  const { mutate: create_memo } = useMutation(memo_post);

  const handleCreateTodo = () => {
    if (input.todoInput) {
      const default_input = { ...input.todoInput, goalId: goal_id, is_complete: false };
      create_todo(default_input, {
        onSuccess: () => {
          dispatch(todoInputChange(initialTodo));
          queryClient.invalidateQueries('todos');
        },
      });
    }
  };

  const handleCreateMemo = () => {
    if (input.memoInput) {
      const default_input = { ...input.memoInput, goalId: goal_id, date: new Date() };
      create_memo(default_input, {
        onSuccess: () => {
          dispatch(memoInputChange(initialMemo));
          queryClient.invalidateQueries('memos');
        },
      });
    }
  };

  return {
    input,
    todoData,
    memoData,
    handleTodoInput,
    handleMemoInput,
    handleCreateTodo,
    handleCreateMemo,
  };
};

export default useDetail;
