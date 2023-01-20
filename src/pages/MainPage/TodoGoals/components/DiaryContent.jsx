import styled from 'styled-components';
import useFetch from '../../../../hooks/useFetch';
import useInput from '../../../../hooks/useInput';
import useMutate from '../../../../hooks/useMutate';
import InputUtils from '../../../../utils/InputUtils';
import { user_id } from '../../../../utils/Storage';

const DiaryContent = ({ input, param }) => {
  const { inputValue, handleInput, initInput } = useInput(InputUtils.initailDiary);
  const diaryInput = { ...inputValue, date: input.date };
  const userParams = { ...param, _embed: 'diaries' };
  const queryKey = ['users', { id: user_id, _embed: 'diaries' }];
  const { handleMutation } = useMutate('/diaries', 'post', diaryInput, initInput);
  const { data } = useFetch(`users/${user_id}`, userParams, queryKey);

  const curr = data?.diaries.filter(el => el.date === input.date)[0];

  if (curr) return <div>{curr.contents}</div>;
  return (
    <>
      <TextArea name="contents" onChange={handleInput} value={inputValue.contents} />
      <button onClick={handleMutation}>저장</button>
    </>
  );
};

export default DiaryContent;

const TextArea = styled.textarea`
  height: 90%;
  width: 100%;
  border: none;
  resize: none;
  padding: 1rem;
  line-height: 1.2rem;

  &:focus {
    outline: none;
  }
`;
