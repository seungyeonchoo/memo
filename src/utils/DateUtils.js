class DateUtils {
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

  static getDates = (year, month) => {
    const startDay = new Date(year, month - 1, 1).getDay();
    const startDate = new Date(year, month - 1, 1).getDate();
    const endDate = new Date(year, month, 0).getDate();
    const endDay = new Date(year, month, 0).getDay();

    const prevEndDate = new Date(year, month - 1, 0).getDate();
    const nextStartDay = new Date(year, month, 1).getDay();

    const weeks = Math.ceil((endDate - startDay) / 7);
    const dates = Array.from({ length: endDate - startDate + 1 }, (_, i) => i + 1);
    const prev = Array.from({ length: startDay }, (_, i) => prevEndDate - startDay + 1 + i);
    const next = endDay !== 6 ? Array.from({ length: 6 - nextStartDay + 1 }, (_, i) => i + 1) : [];

    const result = [...prev, ...dates, ...next];
    return { result, weeks };
  };

  static generateCalendar = (result, weeks) => {
    let ans = [];
    let curr = [];
    console.log(result);

    for (let date of result) {
      curr.push(date);
      if (curr.length === 7) {
        ans.push(curr);
        curr = [];
        console.log(ans);
      }
    }

    if (ans.length !== weeks) ans.push(curr);

    return ans;
  };
}

export default DateUtils;
