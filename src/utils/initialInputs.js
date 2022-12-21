import { UserStorage } from './Storage';

export const initialTodo = {
  todo: '',
  is_complete: false,
  goalId: '',
};
export const initialMemo = {
  memo: '',
  date: new Date(),
  goalId: '',
};
export const initialGoal = {
  due_date: '',
  goal_name: '',
  description: '',
  userId: Number(new UserStorage().getId()),
  date: new Date(),
  is_public: false,
  is_complete: false,
};
