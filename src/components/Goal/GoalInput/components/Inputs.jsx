import styled from 'styled-components';
import useInput from '../../../../hooks/useInput';
import Input, { AreaInput } from '../../../Common/Input';

const Inputs = () => {
  const { goalInput, handleInput } = useInput('goals');
  return (
    <InputWrapper>
      <Input
        label="마감기한"
        type="date"
        size="large"
        name="due_date"
        value={goalInput.due_date}
        onChange={handleInput}
      />
      <Input
        label="목표명"
        type="text"
        size="large"
        name="goal_name"
        placeholder="목표명을 입력해주세요."
        value={goalInput.goal_name}
        onChange={handleInput}
      />
      <AreaInput
        label="상세목표"
        size="large"
        name="description"
        placeholder="목표에 대한 설명을 입력해주세요."
        value={goalInput.description}
        onChange={handleInput}
      />
    </InputWrapper>
  );
};

export default Inputs;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
