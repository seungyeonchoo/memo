const TodoTitle = ({ goal }) => {
  return (
    <>
      <div>{goal?.goal_name}</div>
      <p>{goal?.description}</p>
    </>
  );
};

export default TodoTitle;
