import styled from 'styled-components';
import { user_id } from '../../../../utils/Storage';
import GroupItem from './GroupItem';

const GroupList = ({ group }) => {
  return (
    <ListWrapper>
      {group
        ?.filter(el => el.users?.includes(user_id))
        .map(el => (
          <GroupItem key={el.id} group={el} />
        ))}
    </ListWrapper>
  );
};

export default GroupList;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 25rem;
  height: 30vh;
`;
