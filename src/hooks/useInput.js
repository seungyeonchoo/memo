import { useDispatch, useSelector } from 'react-redux';
import {
  goalInputChange,
  memoInputChange,
  signinChange,
  signupChange,
  todoInputChange,
} from '../store/slices/inputSlice';

const useInput = item => {
  const dispatch = useDispatch();
  const { toggle, input } = useSelector(state => state);
  const { signin, signup, goalInput, todoInput, memoInput } = input;
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
    memos: {
      input: { ...memoInput, goalId: toggle.detailToggle.goal },
      action: memoInputChange,
    },
  };

  const curr_item = Items[item];

  const handleInput = e => {
    const { name, value } = e.target;
    dispatch(curr_item.action({ ...curr_item.input, [name]: value }));
  };

  return { signin, signup, goalInput, todoInput, memoInput, isValid, handleInput };
};

export default useInput;
