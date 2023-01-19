import DateUtils from './DateUtils';
import { UserStorage, user_id } from './Storage';

class InputUtils {
  // initialInputs
  static initialSignin = { email: '', password: '' };
  static initialSignup = { email: '', password: '', password_confirm: '', name: '' };
  static initailGroup = {
    name: '',
    description: '',
    is_public: true,
    users: [user_id],
    admin: user_id,
  };
  static initialGoal = {
    due_date: '',
    goal_name: '',
    description: '',
    userId: Number(user_id),
    date: DateUtils.convert(new Date()),
    is_public: false,
    is_complete: false,
    repeat: '',
    done: [],
  };

  static initailDiary = {
    date: '',
    contents: '',
    userId: Number(user_id),
  };

  static initialGroupGoal = {
    due_date: '',
    goal_name: '',
    description: '',
    groupId: '',
    date: new Date(),
    is_public: false,
    is_complete: false,
  };

  static signIn = input => {
    const email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g;
    const password = /^.{8,}$/g;
    return email.test(input?.email) && password.test(input?.password);
  };

  static signUp = input => {
    const email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g;
    const password = /^.{8,}$/g;
    return (
      email.test(input?.email) &&
      password.test(input?.password) &&
      input.password === input?.password_confirm
    );
  };
}

export default InputUtils;
