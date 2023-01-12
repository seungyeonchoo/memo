import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Goal from '../../components/Goal/Goal';
import useFetch from '../../hooks/useFetch';
import ParamUtils from '../../utils/ParamUtils';
import GroupMain from './GroupMain/GroupMain';

const GroupPage = () => {
  const { id } = useParams();
  const { data: group } = useFetch(`groups/${id}`, ParamUtils.initialGroupParams, [
    'groups',
    { id: id },
  ]);
  //   const { userParams } = useSelector(state => state.param);

  return (
    <GroupContainer>
      <Goal data={group} type="groups" />
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
