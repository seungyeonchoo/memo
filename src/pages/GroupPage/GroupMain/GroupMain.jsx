import styled from 'styled-components';
import Container from '../../../components/Common/Container';
import useFetch from '../../../hooks/useFetch';
import CreateGroup from './components/CreateGroupInput';
import GroupList from './components/GroupList';

const GroupMain = () => {
  const { data } = useFetch(`groups`, null, ['groups']);
  return (
    <GroupContainer>
      <Container>
        <CreateGroup />
        <GroupList group={data} />
      </Container>
    </GroupContainer>
  );
};

export default GroupMain;

const GroupContainer = styled.main`
  display: flex;
  justify-content: space-evenly;
  min-height: 70vh;
  margin: 3em 0;
`;
