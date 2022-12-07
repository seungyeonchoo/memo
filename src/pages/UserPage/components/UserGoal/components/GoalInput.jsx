import Input from '../../../../../components/Common/Input';
import useGoal from '../../../../../hooks/useGoal';

const GoalInput = () => {
  const { handleGoalInput } = useGoal();
  return (
    <>
      <Input label="마감기한" type="date" name="due_date" onChange={handleGoalInput} />
      <Input label="목표명" type="text" name="goal_name" onChange={handleGoalInput} />
      <Input label="상세목표" type="textarea" name="description" onChange={handleGoalInput} />
    </>
  );
};

export default GoalInput;
