import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import GroupMain from './GroupMain/GroupMain';

const GroupPage = () => {
  //   const { userParams } = useSelector(state => state.param);
  const { data } = useFetch(`groups`, null, ['groups']);
  return (
    <GroupContainer>
      <GroupMain group={data} />
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
