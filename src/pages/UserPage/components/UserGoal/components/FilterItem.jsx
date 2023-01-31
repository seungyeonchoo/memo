import styled from 'styled-components';
import useParam from '../../../../../hooks/useParam';
import { FilterButton } from './SortItem';

const FilterItem = () => {
  const { handleFilterParam } = useParam();
  return (
    <ItemWrapper>
      <FilterButton name="is_complete" onClick={handleFilterParam}>
        완료여부
      </FilterButton>
      <FilterButton name="is_public" onClick={handleFilterParam}>
        공개여부
      </FilterButton>
    </ItemWrapper>
  );
};

export default FilterItem;

const ItemWrapper = styled.div`
  display: flex;
`;
