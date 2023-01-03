import Container from '../../../components/Common/Container';
import CreateGroup from './components/CreateGroup';
import GroupList from './components/GroupList';

const GroupMain = () => {
  return (
    <Container>
      <CreateGroup />
      <GroupList />
    </Container>
  );
};

export default GroupMain;
