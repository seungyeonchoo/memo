import { useSelector } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import { goalInputChange } from '../../../../store/slices/inputSlice';
import Input, { AreaInput } from '../../../Common/Input';

const Inputs = () => {
  const { goalInput } = useSelector(state => state.input);
  const { handleGlobalInput } = useInput(goalInput, goalInputChange);

  return (
    <>
      <Input
        label="마감기한"
        type="date"
        size="large"
        name="due_date"
        value={goalInput.due_date}
        onChange={handleGlobalInput}
      />
      <Input
        label="목표명"
        type="text"
        size="large"
        name="goal_name"
        placeholder="목표명을 입력해주세요."
        value={goalInput.goal_name}
        onChange={handleGlobalInput}
      />
      <AreaInput
        label="상세목표"
        size="large"
        name="description"
        placeholder="목표에 대한 설명을 입력해주세요."
        value={goalInput.description}
        onChange={handleGlobalInput}
      />
    </>
  );
};

export default Inputs;
