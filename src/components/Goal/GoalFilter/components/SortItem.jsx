import styled from 'styled-components';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import useParam from '../../../../hooks/useParam';

const SortItem = () => {
  const { sortParams, handleSortParam } = useParam();
  const { _sort, _order } = sortParams;
  return (
    <ItemWrapper>
      {/* <FilterButton type="checkbox" name="date" onClick={handleSortParam}>
        등록일내림차순
      </FilterButton>
      <FilterButton type="checkbox" name="date" onClick={handleSortParam}>
        등록일오름차순
      </FilterButton>
      <FilterButton type="checkbox" name="due_date" onClick={handleSortParam}>
        마감기한내림차순
      </FilterButton>
      <FilterButton type="checkbox" name="due_date" onClick={handleSortParam}>
        마감기한오름차순
      </FilterButton> */}
    </ItemWrapper>
  );
};

export default SortItem;

const ItemWrapper = styled.div`
  display: flex;
`;

export const FilterButton = styled.input`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
