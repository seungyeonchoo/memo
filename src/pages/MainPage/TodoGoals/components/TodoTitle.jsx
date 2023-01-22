import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TodoTitle = ({ toggle, handleToggle, handleCalendarToggle, calendarToggle }) => {
  const { dateInfo } = useSelector(state => state.input);

  return (
    <Text border={window.visualViewport.width > 800}>
      <h1 onClick={handleCalendarToggle}>{dateInfo.date}</h1>
      {!calendarToggle && <button onClick={handleToggle}>{toggle ? '투두' : '다이어리'}</button>}
    </Text>
  );
};
export default TodoTitle;

const Text = styled.div`
  width: 100%;
  padding: 1rem 0 1rem 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: ${props => (props.border ? '1px solid #666' : 'none')};
`;
