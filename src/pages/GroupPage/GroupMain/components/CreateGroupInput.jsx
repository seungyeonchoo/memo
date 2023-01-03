import Input, { AreaInput } from '../../../../components/Common/Input';
import useInput from '../../../../hooks/useInput';

const CreateGroupInput = () => {
  const { groupInput, handleInput: handleGroupInput } = useInput('groups');
  return (
    <>
      <Input
        label="그룹명"
        size="large"
        name="name"
        value={groupInput.name}
        onChange={handleGroupInput}
      />
      <AreaInput
        label="그룹소개"
        size="large"
        name="description"
        value={groupInput.description}
        onChange={handleGroupInput}
      />
    </>
  );
};

export default CreateGroupInput;
