import useUser from '../../../../../hooks/useUser';

const GoalInput = () => {
  const { handleInputChange } = useUser();
  return (
    <>
      <label>
        마감기한
        <input type="date" name="due_date" onChange={handleInputChange} />
      </label>
      <label>
        목표명
        <input type="text" name="goal_name" onChange={handleInputChange} />
      </label>
      <label>
        상세목표
        <textarea name="description" onChange={handleInputChange} />
      </label>
    </>
  );
};

export default GoalInput;
