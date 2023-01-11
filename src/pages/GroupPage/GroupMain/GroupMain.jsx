import { Button } from '../../../components/Common/Button';
import Container from '../../../components/Common/Container';
import useToggle from '../../../hooks/useToggle';
import CreateGroup from './components/CreateGroupInput';
import GroupList from './components/GroupList';

const GroupMain = ({ group }) => {
  const { toggle, handleToggle } = useToggle();
  return (
    <Container>
      {toggle ? (
        <CreateGroup onClick={handleToggle} />
      ) : (
        <Button size="large" text="create new group" onClick={handleToggle} />
      )}

      <GroupList group={group} />
    </Container>
  );
};

export default GroupMain;
