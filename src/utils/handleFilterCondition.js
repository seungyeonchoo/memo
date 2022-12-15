const handleFilterCondition = curr_state => {
  if (curr_state === null) return true;
  if (curr_state === true) return false;
  else return null;
};

export default handleFilterCondition;
