import { Button } from '../../../../components/Common/Button';
import useCreate from '../../../../hooks/useCreate';
import CreateGroupInput from './CreateGroupInput';

const CreateGroup = () => {
  const { handleCreate: handleCreateGroup } = useCreate('groups');
  return (
    <>
      <CreateGroupInput />
      <Button size="medium" text="Create" onClick={handleCreateGroup} />
    </>
  );
};

export default CreateGroup;
