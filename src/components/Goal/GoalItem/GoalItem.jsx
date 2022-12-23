import styled from 'styled-components';
import useFetch from '../../../hooks/useFetch';
import useToggle from '../../../hooks/useToggle';
import ItemButton from './components/ItemButton';
import ItemStatus from './components/ItemStatus';
import ItemText from './components/ItemText';

const GoalItem = ({ item }) => {
  const { refetch } = useFetch('todos');
  const { handleToggle: handleDetailToggle } = useToggle('detail', item);

  const color = item?.is_complete ? '#cfd8dc' : '#eceff1';

  return (
    <Item bg={color} onClick={handleDetailToggle}>
      <ItemStatus item={item} />
      <ItemText item={item} />
      <ItemButton item={item} />
    </Item>
  );
};

export default GoalItem;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 410px;
  padding: 10px;
  border: 1px solid black;
  background-color: ${props => props.bg};
  && {
    margin-bottom: 0.5em;
  }
`;
