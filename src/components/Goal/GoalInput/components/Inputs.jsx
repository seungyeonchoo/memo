import { useSelector } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import { goalInputChange } from '../../../../store/slices/inputSlice';
import Input, { AreaInput } from '../../../Common/Input';

const Inputs = () => {
  const { goalInput } = useSelector(state => state.input);
  const { handleGlobalInput: handleGoalInput } = useInput(goalInput, goalInputChange);

  return (
    <>
      <select name="repeat" onChange={handleGoalInput} required>
        <option>선택</option>
        <option>Daily</option>
        <option>Weekly</option>
      </select>
      <Input
        label="마감기한"
        type="date"
        size="large"
        name="due_date"
        value={goalInput.due_date}
        onChange={handleGoalInput}
      />
      <Input
        label="목표명"
        type="text"
        size="large"
        name="goal_name"
        placeholder="목표명을 입력해주세요."
        value={goalInput.goal_name}
        onChange={handleGoalInput}
      />
      <AreaInput
        label="상세목표"
        size="large"
        name="description"
        placeholder="목표에 대한 설명을 입력해주세요."
        value={goalInput.description}
        onChange={handleGoalInput}
      />
    </>
  );
};

export default Inputs;
