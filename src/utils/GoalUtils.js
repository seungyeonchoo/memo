import DateUtils from './DateUtils';

class GoalUtils {
  static isComplete = goal => {
    const completeItems = goal?.todos?.filter(todo => todo.is_complete);
    return !goal?.is_complete && completeItems?.length === goal?.todos.length ? true : false;
  };

  static isApproaching = user => {
    return user?.goals
      .filter(el => DateUtils.diff(el.due_date) < 3 && el.is_complete === false)
      .sort((a, b) => DateUtils.diffDate(a.due_date) - DateUtils.diffDate(b.due_date));
  };

  static sortItems = goals => {
    return goals?.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));
  };
}

export default GoalUtils;
