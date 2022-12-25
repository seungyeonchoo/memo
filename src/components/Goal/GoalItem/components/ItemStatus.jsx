import styled from 'styled-components';
import calcDiffDay from '../../../../utils/calcDiffDay';

const ItemStatus = ({ item }) => {
  return (
    <StatusBox>
      <div>{item?.is_complete ? 'Clear' : calcDiffDay(item.due_date)}</div>
      <div>
        {item?.todos.filter(el => el.is_complete === true).length} of {item.todos.length}
      </div>
    </StatusBox>
  );
};

export default ItemStatus;

const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
