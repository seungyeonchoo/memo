class ParamUtils {
  static initialGoalParams = {
    _sort: 'due_date',
    _order: 'asc',
    userId: '',
    is_complete: null,
    is_public: null,
    _embed: 'todos',
  };
  static initialUserParams = { _embed: 'goals' };
  static initialTodoParams = { _embed: 'comments' };
  static initialGroupParams = { _embed: 'groupGoals' };
}

export default ParamUtils;
