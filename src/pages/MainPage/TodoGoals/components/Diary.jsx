import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useFetch from '../../../../hooks/useFetch';
import { user_id } from '../../../../utils/Storage';
import DiaryContent from './DiaryContent';
import DiaryInput from './DiaryInput';
// import DiaryContent from './DiaryInput';

const Diary = () => {
  const { input, param } = useSelector(state => state);
  const userParams = { ...param, _embed: 'diaries' };
  const queryKey = ['users', { id: user_id, _embed: 'diaries' }];
  const { data } = useFetch(`users/${user_id}`, userParams, queryKey);
  const curr = data?.diaries.filter(el => el.date === input.date)[0];

  return (
    <Box>
      <SubTitle>
        {input.dateInfo.date} ({input.dateInfo.week.slice(-5)})
      </SubTitle>
      <DiaryInput input={input.dateInfo} param={param.userParams} />
    </Box>
  );
};

export default Diary;

const Box = styled.div`
  padding: 1rem 0;
  width: 100%;
  height: 80%;
`;

const SubTitle = styled.h2`
  font-weight: bold;
  font-size: 0.8em;
  /* font-style: italic; */
  margin-bottom: 0.2rem;
`;
