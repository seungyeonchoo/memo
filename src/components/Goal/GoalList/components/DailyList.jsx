import GoalItem from '../../GoalItem/GoalItem';

const DailyList = ({ goals }) => {
  return (
    <>
      {goals?.map(el => (
        <GoalItem key={el.id} goal={el} />
      ))}
    </>
  );
};

export default DailyList;
