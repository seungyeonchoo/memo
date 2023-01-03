import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Http from '../services/Http';
import {
  commentInputChange,
  goalInputChange,
  groupInputChange,
  todoInputChange,
} from '../store/slices/inputSlice';
import { createGoalToggleChange } from '../store/slices/toggleSlice';
import InputUtils from '../utils/InputUtils';
import { user_id } from '../utils/Storage';

const useCreate = (item, id) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { input, toggle } = useSelector(state => state);
  const { groupInput, goalInput, todoInput, commentInput } = input;

  const Items = {
    goals: {
      input: goalInput,
      init: goalInputChange,
      initial: InputUtils.initialGoal,
    },
    todos: {
      input: { ...todoInput, goalId: toggle.detailToggle.goal },
      init: todoInputChange,
      initial: InputUtils.initialTodo,
    },
    comments: {
      input: { ...commentInput, todoId: id },
      init: commentInputChange,
      initial: InputUtils.initialComment,
    },
    groups: {
      input: { ...groupInput, user: [user_id] },
      init: groupInputChange,
      initial: InputUtils.initailGroup,
    },
  };

  const curr_item = Items[item];

  const post_item = new Http(item).post;
  const { mutate, data } = useMutation(post_item);
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

// 아이템이 그룹이면 user.groups에 patch로 새로운 그룹 아이디 추가
// group.user에는
