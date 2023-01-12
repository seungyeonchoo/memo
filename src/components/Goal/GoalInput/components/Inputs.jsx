import { useSelector } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import useParam from '../../../../hooks/useParam';
import { goalInputChange, groupGoalInputChange } from '../../../../store/slices/inputSlice';
import { user_id } from '../../../../utils/Storage';
import Input, { AreaInput } from '../../../Common/Input';

const Inputs = ({ type }) => {
  const { goalInput, groupGoalInput } = useSelector(state => state.input);
  const { handleGlobalInput: handleGoalInput } = useInput(goalInput, goalInputChange);
  const { handleGlobalInput: handleGroupGoal } = useInput(groupGoalInput, groupGoalInputChange);
  const handleInputChange = type === 'users' ? handleGoalInput : handleGroupGoal;
  const inputVal = type === 'users' ? goalInput : groupGoalInput;

  return (
    <>
      <Input
        label="마감기한"
        type="date"
        size="large"
        name="due_date"
        value={inputVal.due_date}
        onChange={handleInputChange}
      />
      <Input
        label="목표명"
        type="text"
        size="large"
        name="goal_name"
        placeholder="목표명을 입력해주세요."
        value={inputVal.goal_name}
        onChange={handleInputChange}
      />
      <AreaInput
        label="상세목표"
        size="large"
        name="description"
        placeholder="목표에 대한 설명을 입력해주세요."
        value={inputVal.description}
        onChange={handleInputChange}
      />
    </>
  );
};

export default Inputs;
