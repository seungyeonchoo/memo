import Input, { AreaInput } from '../../../Common/Input';

const Inputs = ({ input, handleInput }) => {
  return (
    <>
      <Input
        label="마감기한"
        type="date"
        size="large"
        name="due_date"
        value={input.due_date}
        onChange={handleInput}
      />
      <Input
        label="목표명"
        type="text"
        size="large"
        name="goal_name"
        placeholder="목표명을 입력해주세요."
        value={input.goal_name}
        onChange={handleInput}
      />
      <AreaInput
        label="상세목표"
        size="large"
        name="description"
        placeholder="목표에 대한 설명을 입력해주세요."
        value={input.description}
        onChange={handleInput}
      />
    </>
  );
};

export default Inputs;
