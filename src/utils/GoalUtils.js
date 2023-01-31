class GoalUtils {
  static isComplete = goal => {
    const completeItems = goal?.todos?.filter(todo => todo.is_complete);
    return !goal?.is_complete && completeItems?.length === goal?.todos.length ? true : false;
  };

  static sortItems = goals => {
    return goals?.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));
  };

  static filterGoalsOfDate = (goals, selectDate) => {
    return goals?.filter(
      el =>
        new Date(selectDate) >= new Date(el.date) && new Date(selectDate) <= new Date(el.due_date)
    );
  };
}

export default GoalUtils;
