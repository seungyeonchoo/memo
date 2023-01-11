import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Goal from '../../components/Goal/Goal';
import useFetch from '../../hooks/useFetch';
import ParamUtils from '../../utils/ParamUtils';
import GroupMain from './GroupMain/GroupMain';

const GroupPage = () => {
  const { idx } = useParams();
  const { data: group } = useFetch(`users/${idx}`, ParamUtils.initialGroupParams, [
    'groups',
    { id: idx },
  ]);
  //   const { userParams } = useSelector(state => state.param);

  return (
    <GroupContainer>
      <Goal user={group} />
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
