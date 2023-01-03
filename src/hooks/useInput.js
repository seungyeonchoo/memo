import { useDispatch, useSelector } from 'react-redux';
import {
  commentInputChange,
  goalInputChange,
  groupInputChange,
  signinChange,
  signupChange,
  todoInputChange,
} from '../store/slices/inputSlice';

const useInput = (item, id) => {
  const dispatch = useDispatch();
  const { toggle, input } = useSelector(state => state);
  const { signin, signup, goalInput, todoInput, commentInput, groupInput } = input;
  const isValid = goalInput.due_date && goalInput.goal_name && goalInput.description;

  const Items = {
    auth: {
      input: toggle.authToggle ? signup : signin,
      action: toggle.authToggle ? signupChange : signinChange,
    },
    goals: {
      input: goalInput,
      action: goalInputChange,
    },
    todos: {
      input: { ...todoInput, goalId: toggle.detailToggle.goal },
      action: todoInputChange,
    },
    comments: {
      input: { ...commentInput, todoId: id },
      action: commentInputChange,
    },
    groups: {
      input: groupInput,
      action: groupInputChange,
    },
  };

  const curr_item = Items[item];

  const handleInput = e => {
    const { name, value } = e.target;
    dispatch(curr_item.action({ ...curr_item.input, [name]: value }));
  };

  return { signin, signup, goalInput, todoInput, commentInput, isValid, handleInput, groupInput };
};

export default useInput;
