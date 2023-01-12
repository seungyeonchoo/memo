import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { user_id } from '../../../../utils/Storage';

const GroupItem = ({ group }) => {
  const nav = useNavigate();
  return (
    <Item onClick={() => nav(`/groups/${group.id}`)}>
      <div>
        {group?.admin === user_id && '*'}
        {group?.name}
      </div>
      <div>{group?.users.length}</div>
    </Item>
  );
};

export default GroupItem;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;
