import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TodoTitle = ({ toggle, handleToggle, handleCalendarToggle, calendarToggle }) => {
  const { dateInfo } = useSelector(state => state.input);

  return (
    <Text border={window.visualViewport.width > 800}>
      <div onClick={handleCalendarToggle}>
        {calendarToggle ? dateInfo.date.slice(0, 7) : dateInfo.date}
        {/* 년-월만 보여주고 calendar의 year & month 를 업데이트 */}
      </div>
      {!calendarToggle && (
        <div>
          <Button onClick={handleToggle} disabled={!toggle}>
            투두
          </Button>
          <Button onClick={handleToggle} disabled={toggle}>
            다이어리
          </Button>
        </div>
      )}
    </Text>
  );
};
export default TodoTitle;

const Text = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 0 1rem 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: ${props => (props.border ? '1px solid #666' : 'none')};
`;

const Button = styled.button`
  border: none;
  width: 50%;
  margin: 0.5em 0;
  padding: 0.3em 1em;
`;
