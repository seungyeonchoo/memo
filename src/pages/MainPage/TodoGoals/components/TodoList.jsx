import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GoalUtils from '../../../../utils/GoalUtils';
import TodoItem from './TodoItem';

const TodoList = ({ user, repeat }) => {
  const { dateInfo } = useSelector(state => state.input);
  const goals = GoalUtils.sortItems(user?.goals)?.filter(el => el.repeat === repeat);

  return (
    <Box>
      <div>{repeat === 'Daily' ? dateInfo.date : dateInfo.week.slice(-5)}</div>
      <ListWrapper>
        {GoalUtils.filterGoalsOfDate(goals, dateInfo.date)?.map(el => (
          <TodoItem goal={el} key={el.id} />
        ))}
      </ListWrapper>
    </Box>
  );
};

export default TodoList;

const Box = styled.div``;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;
