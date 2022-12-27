class CalcDate {
  static diffDate = due_date => {
    const diffDate = Math.ceil((new Date(due_date) - new Date()) / (1000 * 60 * 60 * 24));
    return diffDate === 0 ? `D-Day` : diffDate > 0 ? `D-${diffDate}` : `D+${diffDate * -1}`;
  };

  static diff = due_date => {
    return Math.ceil((new Date(due_date) - new Date()) / (1000 * 60 * 60 * 24));
  };

  // date_input : string
  static convert = date_input => {
    const year = new Date(date_input).getFullYear();
    const month = new Date(date_input).getMonth() + 1;
    const date = new Date(date_input).getDate();

    return `${year}.${month < 10 ? '0' + month : month}.${date < 10 ? '0' + date : date}`;
  };
}

export default CalcDate;
