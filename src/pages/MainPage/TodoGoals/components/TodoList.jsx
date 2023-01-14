import styled from 'styled-components';
import DateUtils from '../../../../utils/DateUtils';
import GoalUtils from '../../../../utils/GoalUtils';
import TodoItem from './TodoItem';

const TodoList = ({ user, repeat }) => {
  const today = DateUtils.convert(new Date());
  //   const thisWeek = DateUtils.convert()
  //   const checkIsDone = repeat === 'Daily' ? today ?
  const goals = GoalUtils.sortItems(user?.goals)?.filter(el => el.repeat === repeat);
  return (
    <Box>
      <div>{repeat}</div>
      <ListWrapper>
        {goals?.map(el => (
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
