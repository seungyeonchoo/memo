import styled from 'styled-components';
import useToggle from '../../../../hooks/useToggle';
import DateUtils from '../../../../utils/DateUtils';
import MonthList from './MonthList';

const CalendarTitle = ({ year, month, handleMonth }) => {
  const { toggle, handleToggle } = useToggle();
  return (
    <>
      <Title>
        <span onClick={() => DateUtils.handleToPrev(year, month, handleMonth)}>prev</span>
        <div onClick={handleToggle}>{`${year}-${month < 10 ? `0${month}` : month}`}</div>
        <span onClick={() => DateUtils.handleToNext(year, month, handleMonth)}>next</span>
      </Title>
      {toggle && <MonthList handleMonth={handleMonth.setMonth} />}
    </>
  );
};

export default CalendarTitle;

const Title = styled.div`
  display: flex;
`;
