import styled from 'styled-components';
import useToggle from '../../../hooks/useToggle';
import Calendar from '../Calendar/Calendar';
import Diary from './components/Diary';
import TodoList from './components/TodoList';
import TodoTitle from './components/TodoTitle';

const TodoGoals = ({ data }) => {
  const { toggle: diaryToggle, handleToggle: handleDiaryToggle } = useToggle();
  const { toggle: calendarToggle, handleToggle: handleCalendarToggle } = useToggle();
  const vSize = window.visualViewport.width < 800;
  return (
    <Container border={calendarToggle}>
      <TodoTitle
        toggle={diaryToggle}
        handleToggle={handleDiaryToggle}
        calendarToggle={calendarToggle}
        handleCalendarToggle={vSize ? handleCalendarToggle : undefined}
      />
      {calendarToggle && vSize ? (
        <Calendar />
      ) : !diaryToggle ? (
        <>
          <TodoList user={data} repeat="Daily" />
          <TodoList user={data} repeat="Weekly" />
        </>
      ) : (
        <Diary />
      )}
      {/* {!diaryToggle ? (
        <>
          <TodoList user={data} repeat="Daily" />
          <TodoList user={data} repeat="Weekly" />
        </>
      ) : (
        <Diary />
      )} */}
    </Container>
  );
};

export default TodoGoals;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 500px;
  margin: 0 4rem;
  border-bottom: ${props => (!props.border ? '1px solid #666' : 'none')};
`;
