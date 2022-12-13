import styled from 'styled-components';
import { FilterButton } from './SortItem';

const FilterItem = () => {
  return (
    <ItemWrapper>
      <FilterButton>완료여부</FilterButton>
      <FilterButton>공개여부</FilterButton>
    </ItemWrapper>
  );
};

export default FilterItem;

const ItemWrapper = styled.div`
  display: flex;
`;
