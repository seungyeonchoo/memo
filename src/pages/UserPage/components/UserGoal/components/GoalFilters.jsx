import styled from 'styled-components';
import useToggle from '../../../../../hooks/useToggle';
import FilterIcon from './FilterIcon';
import FilterItem from './FilterItem';
import SortItem from './SortItem';

const GoalFilters = () => {
  const { sortToggle, filterToggle } = useToggle();
  return (
    <Box>
      <FilterIcon />
      {sortToggle && <SortItem />}
      {filterToggle && <FilterItem />}
    </Box>
  );
};

export default GoalFilters;

const Box = styled.section`
  width: 410px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0.5em 0;
  padding: 0 0.8em;
`;
