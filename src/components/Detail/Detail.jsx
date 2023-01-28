import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';
import { detailToggleChange } from '../../store/slices/toggleSlice';
import DateUtils from '../../utils/DateUtils';
import GoalInfo from './components/GoaInfo';
import GoalFulfill from './components/GoalFulfill';

const Detail = () => {
  const { input, param } = useSelector(state => state);
  const goalId = input.goalInput.id;
  const { data: goal } = useFetch(`goals/${goalId}`, param.goalParams, ['goals', { id: goalId }]);
  const { handleGlobalToggle } = useToggle(detailToggleChange);
  const dateList = DateUtils.getDateList(goal?.date, goal?.due_date, goal?.repeat);

  return (
    <DetailContainer>
      <TitleText>{goal?.goal_name}</TitleText>
      <GoalInfo goal={goal} />
      <GoalFulfill list={dateList} goal={goal} />
      <button onClick={handleGlobalToggle}>X</button>
    </DetailContainer>
  );
};

export default Detail;

const TitleText = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  margin: 0.5em 0;
`;

const DetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 500px;
  margin: 0 4rem;
  background-color: #fff;
  z-index: 1;
`;
