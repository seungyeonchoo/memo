import { Button } from '../../../../components/Common/Button';
import Input, { AreaInput } from '../../../../components/Common/Input';
import useInput from '../../../../hooks/useInput';
import useMutate from '../../../../hooks/useMutate';
import InputUtils from '../../../../utils/InputUtils';

const CreateGroup = () => {
  const { inputValue, handleInput, initInput } = useInput(InputUtils.initailGroup);
  const { handleMutation } = useMutate('groups', 'post', inputValue, initInput);
  // 그룹 생성 이후에
  // 그룹장 = user_id
  // users에 user_id 추가
  // user.groups에 group 추가

  return (
    <>
      <Input
        label="그룹명"
        size="large"
        name="name"
        value={inputValue.name}
        onChange={handleInput}
      />
      <AreaInput
        label="그룹소개"
        size="large"
        name="description"
        value={inputValue.description}
        onChange={handleInput}
      />
      <Button size="medium" text="Create" onClick={handleMutation} />
    </>
  );
};

export default CreateGroup;
