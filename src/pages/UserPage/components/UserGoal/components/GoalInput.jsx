import useGoal from '../../../../../hooks/useGoal';

const GoalInput = () => {
  const { handleGoalInput } = useGoal();
  return (
    <>
      <label>
        마감기한
        <input type="date" name="due_date" onChange={handleGoalInput} />
      </label>
      <label>
        목표명
        <input type="text" name="goal_name" onChange={handleGoalInput} />
      </label>
      <label>
        상세목표
        <textarea name="description" onChange={handleGoalInput} />
      </label>
    </>
  );
};

export default GoalInput;
