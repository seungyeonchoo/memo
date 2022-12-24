import styled from 'styled-components';
import useParam from '../../../../hooks/useParam';
import CheckBox from '../../../Common/CheckBox';

import { FilterButton } from './SortItem';

const FilterItem = () => {
  const { handleFilterParam } = useParam();
  return (
    <ItemWrapper>
      <CheckBox name="is_complete" text="완료" onChange={handleFilterParam} />
      <CheckBox name="is_public" text="공개" onChange={handleFilterParam} />
      {/* <FilterButton type="checkbox" name="is_complete" onClick={handleFilterParam}>
        전체
      </FilterButton>
      <FilterButton type="checkbox" name="is_complete" onClick={handleFilterParam}>
        완료
      </FilterButton>
      <FilterButton type="checkbox" name="is_complete" onClick={handleFilterParam}>
        미완료
      </FilterButton>
      <FilterButton type="checkbox" name="is_public" onClick={handleFilterParam}>
        전체
      </FilterButton>
      <FilterButton type="checkbox" name="is_public" onClick={handleFilterParam}>
        공개
      </FilterButton>
      <FilterButton type="checkbox" name="is_public" onClick={handleFilterParam}>
        비공개
      </FilterButton> */}
    </ItemWrapper>
  );
};

export default FilterItem;

const ItemWrapper = styled.div`
  display: flex;
`;
