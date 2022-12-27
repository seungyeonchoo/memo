const calcDiffDay = due_date => {
  const dueDate = new Date(due_date);
  const currDate = new Date();
  const diffDate = Math.ceil((dueDate - currDate) / (1000 * 60 * 60 * 24));

  return diffDate === 0 ? `D-Day` : diffDate > 0 ? `D-${diffDate}` : `D+${diffDate * -1}`;
};

export default calcDiffDay;

export const calcDifferent = due_date => {
  const dueDate = new Date(due_date);
  const currDate = new Date();
  return Math.ceil((dueDate - currDate) / (1000 * 60 * 60 * 24));
};
