import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import { user_id } from '../../utils/Storage';
import Calendar from './Calendar/Calendar';
import TodoGoals from './TodoGoals/TodoGoals';

const MainPage = () => {
  const [viewPort, setViewPort] = useState(window.visualViewport.height);
  const { userParams } = useSelector(state => state.param);
  const vSize = window.visualViewport.width > 800;
  const { data } = useFetch(`users/${user_id}`, userParams, [
    'users',
    { id: user_id, _embed: 'goals' },
  ]);

  useEffect(() => {
    window.addEventListener('resize', () => setViewPort(window.visualViewport.width));
    return () =>
      window.removeEventListener('resize', () => setViewPort(window.visualViewport.width));
  }, [vSize]);

  console.log(vSize);

  return (
    <MainContainer>
      {vSize && <Calendar />}
      <TodoGoals data={data} />
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.main`
  display: flex;
  justify-content: space-around;
  min-height: 70vh;
  margin: 3em 0;
`;
