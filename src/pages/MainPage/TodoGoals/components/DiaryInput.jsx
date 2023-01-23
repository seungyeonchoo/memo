import styled from 'styled-components';
import useFetch from '../../../../hooks/useFetch';
import useInput from '../../../../hooks/useInput';
import useMutate from '../../../../hooks/useMutate';
import InputUtils from '../../../../utils/InputUtils';
import { user_id } from '../../../../utils/Storage';
import DiaryContent from './DiaryContent';

const DiaryInput = ({ input, param }) => {
  const { inputValue, handleInput, initInput } = useInput(InputUtils.initailDiary);
  const diaryInput = { ...inputValue, date: input.date };
  const userParams = { ...param, _embed: 'diaries' };
  const queryKey = ['users', { id: user_id, _embed: 'diaries' }];
  const { handleMutation } = useMutate('/diaries', 'post', diaryInput, initInput);
  const { data } = useFetch(`users/${user_id}`, userParams, queryKey);

  const curr = data?.diaries.filter(el => el.date === input.date)[0];

  if (curr) return <DiaryContent currDiary={curr} />;

  return (
    <>
      <TextArea name="contents" onChange={handleInput} value={inputValue.contents} />
      <ButtonWrapper>
        <Button onClick={handleMutation}>저장</Button>
      </ButtonWrapper>
    </>
  );
};

export default DiaryInput;

const TextArea = styled.textarea`
  height: 85%;
  width: 100%;
  border: none;
  resize: none;
  padding: 1rem;
  line-height: 1.2rem;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: 1px solid #666;
  background-color: inherit;
  padding: 0.5em;
  width: 20%;
  cursor: pointer;

  &:hover {
    background-color: #ffcdd2;
    border: 1px solid #ffcdd2;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
