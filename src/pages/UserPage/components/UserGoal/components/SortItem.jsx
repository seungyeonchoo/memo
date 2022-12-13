import styled from 'styled-components';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import useParam from '../../../../../hooks/useParam';

const SortItem = () => {
  const { sortParams, handleSortParam } = useParam();
  const { _sort, _order } = sortParams;
  return (
    <ItemWrapper>
      <FilterButton name="date" onClick={handleSortParam}>
        등록일
        {_sort === 'date' && _order === 'desc' && <FaLongArrowAltDown />}
        {_sort === 'date' && _order === 'asc' && <FaLongArrowAltUp />}
      </FilterButton>
      <FilterButton>
        마감기한
        {_sort === 'due_date' && _order === 'desc' && <FaLongArrowAltDown />}
        {_sort === 'due_date' && _order === 'asc' && <FaLongArrowAltUp />}
      </FilterButton>
    </ItemWrapper>
  );
};

export default SortItem;

const ItemWrapper = styled.div`
  display: flex;
`;

export const FilterButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
