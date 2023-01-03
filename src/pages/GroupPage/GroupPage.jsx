import styled from 'styled-components';
import GroupMain from './GroupMain/GroupMain';

const GroupPage = () => {
  return (
    <GroupContainer>
      <GroupMain />
    </GroupContainer>
  );
};

export default GroupPage;

const GroupContainer = styled.main`
  display: flex;
  justify-content: space-evenly;
  min-height: 70vh;
  margin: 3em 0;
`;
