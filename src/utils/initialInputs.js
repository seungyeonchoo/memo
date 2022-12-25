import { UserStorage, user_id } from './Storage';

export const initialTodo = {
  todo: '',
  is_complete: false,
  goalId: '',
  comment_toggle: false,
};
export const initialComment = {
  comment: '',
  //   userId: user_id,
  date: new Date(),
  todoId: '',
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
