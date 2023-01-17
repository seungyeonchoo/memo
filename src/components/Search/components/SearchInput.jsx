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
  const { inputValue, handleInput } = useInput({ name_like: '' });
  // limit로 5 ~ 10개의 결과만 보여주고 더보기 클릭하면 상세 검색 화면으로 이동할 수 있게
  const { userParams } = useSelector(state => state.param);
  useDebounce(inputValue, userParamsChange);
  const { data } = useFetch('users', userParams, ['users', { name_like: userParams.name_like }]);
  return (
    <SearchContainer>
      <Wrapper>
        <Input size="large" name="name_like" value={inputValue.name_like} onChange={handleInput} />
      </Wrapper>
      {inputValue.name_like && <AutoComplete data={data} />}
    </SearchContainer>
  );
};

export default SearchInput;

const Wrapper = styled.div`
  display: flex;
`;

const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
