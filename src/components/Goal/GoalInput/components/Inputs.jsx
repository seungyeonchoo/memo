import useInput from '../../../../hooks/useInput';
import Input from '../../../Common/Input';

const Inputs = () => {
  const { goalInput, handleInput } = useInput('goals');
  return (
    <>
      <Input
        label="마감기한"
        type="date"
        value={goalInput.due_date}
        name="due_date"
        onChange={handleInput}
      />
      <Input
        label="목표명"
        type="text"
        value={goalInput.goal_name}
        name="goal_name"
        onChange={handleInput}
      />
      <Input
        label="상세목표"
        type="textarea"
        value={goalInput.description}
        name="description"
        onChange={handleInput}
      />
    </>
  );
};

export default Inputs;
