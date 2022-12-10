const calcDiffDay = due_date => {
  const dueDate = new Date(due_date);
  const currDate = new Date();
  const diffDate = (dueDate - currDate) / (1000 * 60 * 60 * 24);

  return Math.ceil(diffDate);
};

export default calcDiffDay;
