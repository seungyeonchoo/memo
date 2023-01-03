import styled from 'styled-components';
import { Button } from '../../Common/Button';
import Input from '../../Common/Input';

const SearchInput = () => {
  return (
    <Wrapper>
      <Input size="large" />
      <Button size="medium" text="검색" />
    </Wrapper>
  );
};

export default SearchInput;

const Wrapper = styled.div`
  display: flex;
`;
