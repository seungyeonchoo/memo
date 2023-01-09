import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useDebounce from '../../../hooks/useDebounce';
import useFetch from '../../../hooks/useFetch';
import useInput from '../../../hooks/useInput';
import { userParamsChange } from '../../../store/slices/paramSlice';
import { Button } from '../../Common/Button';
import Input from '../../Common/Input';
import AutoComplete from './AutoComplete';

const SearchInput = () => {
  const { inputValue, handleInput } = useInput({ q: '' });
  const { userParams } = useSelector(state => state.param);
  useDebounce(inputValue, userParamsChange);
  const { data } = useFetch('users', userParams, ['users', { q: userParams.q }]);
  return (
    <>
      <Wrapper>
        <Input size="large" name="q" value={inputValue.q} onChange={handleInput} />
        <Button size="medium" text="검색" />
      </Wrapper>
      {inputValue.q && <AutoComplete data={data} />}
    </>
  );
};

export default SearchInput;

const Wrapper = styled.div`
  display: flex;
`;
