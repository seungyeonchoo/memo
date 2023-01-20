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
  const { data } = useFetch(`users/${user_id}`, userParams, [
    'users',
    { id: user_id, _embed: 'goals' },
  ]);

  useEffect(() => {
    const resizeWindow = () => setTimeout(() => setViewPort(window.visualViewport.width), 300);
    window.addEventListener('resize', resizeWindow);
    return () => clearTimeout(resizeWindow);
  }, [viewPort]);

  console.log(viewPort);

  return (
    <MainContainer>
      {window.visualViewport.width > 800 && <Calendar />}
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
