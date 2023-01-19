import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useFetch from '../../../../hooks/useFetch';
import useInput from '../../../../hooks/useInput';
import useMutate from '../../../../hooks/useMutate';
import InputUtils from '../../../../utils/InputUtils';
import { user_id } from '../../../../utils/Storage';

const Diary = () => {
  const { input, param } = useSelector(state => state);
  const { inputValue, handleInput, initInput } = useInput(InputUtils.initailDiary);
  const { handleMutation } = useMutate(
    '/diaries',
    'post',
    { ...inputValue, date: input.dateInfo.date, id: `${input.dateInfo.date}_${user_id}` },
    initInput
  );
  const { data } = useFetch(`users/${user_id}`, { ...param.userParams, _embed: 'diaries' }, [
    'users',
    { id: user_id, _embed: 'diaries' },
  ]);

  const currDiary = data?.diaries.filter(el => el.date === input.dateInfo.date)[0];
  console.log(currDiary);
  return (
    <>
      <Box>
        <SubTitle>
          {input.dateInfo.date} ({input.dateInfo.week.slice(-5)})
        </SubTitle>
        {currDiary ? (
          <div>{currDiary.contents}</div>
        ) : (
          <>
            <TextArea name="contents" onChange={handleInput} value={inputValue.contents} />
            <button onClick={handleMutation}>저장</button>
          </>
        )}
      </Box>
    </>
  );
};

export default Diary;

const Box = styled.div`
  padding: 1rem 0;
  width: 100%;
  height: 80%;
`;

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

const SubTitle = styled.h2`
  font-weight: bold;
  font-size: 0.8em;
  /* font-style: italic; */
  margin-bottom: 0.2rem;
`;
