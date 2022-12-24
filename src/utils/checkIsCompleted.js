const checkIsCompleted = goal => {
  const completedTodos = goal?.todos?.filter(todo => todo.is_complete);

  return !goal?.is_complete && completedTodos?.length === goal?.todos?.length ? true : false;
};

export default checkIsCompleted;
