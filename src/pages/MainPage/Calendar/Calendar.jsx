import { useState } from 'react';
import styled from 'styled-components';
import CalendarTitle from './components/CalendarTitle';
import CalendarTable from './components/CalendarTable';
import DateUtils from '../../../utils/DateUtils';

const Calendar = ({ setToggle, calendarToggle }) => {
  const thisYear = new Date().getFullYear();
  const thisMonth = new Date().getMonth() + 1;
  const [year, setYear] = useState(thisYear);
  const [month, setMonth] = useState(thisMonth);
  const handleDate = { setYear, setMonth };
  return (
    <Container>
      {window.innerWidth < 800 && (
        <HiddenButton onClick={() => DateUtils.handleToPrev(year, month, handleDate)} />
      )}
      <Box margin={window.innerWidth < 800}>
        <CalendarTitle
          year={year}
          month={month}
          handleMonth={handleDate}
          setToggle={setToggle}
          calendarToggle={calendarToggle}
        />
        <CalendarTable year={year} month={month} handleMonth={handleDate} setToggle={setToggle} />
      </Box>
      {window.innerWidth < 800 && (
        <HiddenButton onClick={() => DateUtils.handleToNext(year, month, handleDate)} />
      )}
    </Container>
  );
};

export default Calendar;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 450px;
  height: 100%;
  margin: ${props => (props.margin ? '0' : '0 4rem')};
  /* border-bottom: 1px solid #666; */
`;

const HiddenButton = styled.button`
  width: 20vw;
  background-color: inherit;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #f3f2f2;
  }
`;

const Container = styled.section`
  display: flex;
`;
