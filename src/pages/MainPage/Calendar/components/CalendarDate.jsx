import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useFetch from '../../../../hooks/useFetch';
import useInput from '../../../../hooks/useInput';
import { dateInfoUpdate } from '../../../../store/slices/inputSlice';
import DateUtils from '../../../../utils/DateUtils';
import GoalUtils from '../../../../utils/GoalUtils';
import { user_id } from '../../../../utils/Storage';
import DateStatus from './DateStatus';

const CalendarDate = ({ date, name, idx, month, week }) => {
  const { userParams } = useSelector(state => state.param);
  const isThisMonth = new Date(name).getMonth() + 1 !== month;
  const color = isThisMonth ? 'grey' : idx === 0 || idx === 6 ? 'red' : 'black';
  const { setGlobalInput } = useInput({ date: name, week: week }, dateInfoUpdate);
  const { data } = useFetch(`users/${user_id}`, userParams, ['users', { id: user_id }]);

  useEffect(() => {
    if (name === DateUtils.convert(new Date())) setGlobalInput();
  }, []);

  return (
    <TableDate name={name} color={color} onClick={setGlobalInput}>
      <div>{name === DateUtils.convert(new Date()) ? '*' + date : date}</div>
      <DateStatus goals={GoalUtils.filterGoalsOfDate(data?.goals, name)} name={name} week={week} />
    </TableDate>
  );
};

export default CalendarDate;

const TableDate = styled.th`
  width: calc(100% / 7);
  color: ${props => props.color};
`;
