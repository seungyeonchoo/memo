import styled from 'styled-components';
import useToggle from '../../../../hooks/useToggle';
import DateUtils from '../../../../utils/DateUtils';
import MonthList from './MonthList';

const CalendarTitle = ({ year, month, handleMonth, setToggle, calendarToggle }) => {
  const { toggle, handleToggle } = useToggle();
  return (
    <>
      <Title calendar={calendarToggle}>
        {/* <Button onClick={() => DateUtils.handleToPrev(year, month, handleMonth)}>{'⇤'}</Button> */}
        <Button onClick={() => DateUtils.handleToPrev(year, month, handleMonth)}>←</Button>
        <Text onClick={calendarToggle ? setToggle : handleToggle}>{`${year}.${
          month < 10 ? `0${month}` : month
        }`}</Text>
        <Button onClick={() => DateUtils.handleToNext(year, month, handleMonth)}>→</Button>
        {/* <Button onClick={() => DateUtils.handleToNext(year, month, handleMonth)}>{'⇥'}</Button> */}
        {/* <Button>TODAY</Button> */}
      </Title>
      {toggle && <MonthList handleMonth={handleMonth.setMonth} />}
    </>
  );
};

export default CalendarTitle;

const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: ${props => (props.calendar ? '2em' : '0')};
`;

const Text = styled.span`
  width: 35%;
  padding: 0.5rem;
  margin: 0 2.5rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 1px #666;
  }
`;

const Button = styled.button`
  padding: 0 1rem;
  background-color: inherit;
  border: none;
  &:hover {
    box-shadow: 1px 1px 1px #666;
  }
`;
