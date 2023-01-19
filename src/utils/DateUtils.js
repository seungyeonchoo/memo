class DateUtils {
  static diffDate = (due_date, curr) => {
    const diff = curr ? new Date(due_date) - new Date(curr) : new Date(due_date) - new Date();
    const diffDate = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (curr) return diffDate === 0 ? `Start!` : `Day ${diffDate * -1}`;
    else return diffDate === 0 ? `D-Day` : diffDate > 0 ? `D-${diffDate}` : `D+${diffDate * -1}`;
  };

  // date_input : string
  static convert = date_input => {
    const year = new Date(date_input).getFullYear();
    const month = new Date(date_input).getMonth() + 1;
    const date = new Date(date_input).getDate();

    return `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
  };

  static getDates = (year, month) => {
    const startDay = new Date(year, month - 1, 1).getDay();
    const startDate = new Date(year, month - 1, 1).getDate();
    const nextStartDay = new Date(year, month, 1).getDay();

    const prevEndDate = new Date(year, month - 1, 0).getDate();
    const endDate = new Date(year, month, 0).getDate();
    const endDay = new Date(year, month, 0).getDay();

    const weeks = Math.ceil((endDate - startDay) / 7);
    const dates = Array.from({ length: endDate - startDate + 1 }, (_, i) => i + 1);
    const prev = Array.from({ length: startDay }, (_, i) => prevEndDate - startDay + 1 + i);
    const next = endDay !== 6 ? Array.from({ length: 6 - nextStartDay + 1 }, (_, i) => i + 1) : [];

    const result = [...prev, ...dates, ...next];

    return { result, weeks };
  };

  static generateCalendar = result => {
    let ans = [];
    let curr = [];

    for (let date of result) {
      curr.push(date);
      if (curr.length === 7) {
        ans.push(curr);
        curr = [];
      }
    }
    return ans;
  };

  static generateDateName = (idx, id, year, month, date, length) => {
    const startDay = new Date(year, month - 1, 1).getDay();
    const endDay = new Date(year, month, 0).getDay();
    let name = '';

    date = date < 10 ? `0${date}` : date;

    if (idx === 0 && id < startDay) {
      name =
        month === 1
          ? `${year - 1}-12-${date}`
          : `${year}-${month - 1 < 10 ? `0${month - 1}` : month - 1}-${date}`;
    } else if (idx === length && id > endDay) {
      name =
        month === 12
          ? `${year + 1}-01-${date}`
          : `${year}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${date}`;
    } else name = `${year}-${month < 10 ? `0${month}` : month}-${date}`;

    return name;
  };

  static handleToPrev = (year, month, handleMonth) => {
    if (month === 1) {
      handleMonth.setYear(year - 1);
      handleMonth.setMonth(12);
    } else {
      handleMonth.setMonth(month - 1);
    }
  };

  static handleToNext = (year, month, handleMonth) => {
    if (month === 12) {
      handleMonth.setYear(year + 1);
      handleMonth.setMonth(1);
    } else {
      handleMonth.setMonth(month + 1);
    }
  };

  static getDateList = (start, end, repeat) => {
    const ans = [];
    const s = new Date(start);
    const e = Math.min(new Date(end), new Date());
    const len = (e - s) / (1000 * 60 * 60 * 24);

    for (let i = 0; i <= len - 1; i++) {
      const date = this.convert(new Date(s.setDate(s.getDate() + 1)));
      if (repeat === 'Daily') ans.push(date);
      else if (repeat === 'Weekly' && !ans.includes(this.getWeekList(date))) {
        ans.push(this.getWeekList(date));
      }
    }
    return ans;
  };

  static getWeekList = date => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    const startDay = new Date(year, month).getDay();
    const currDate = new Date(date).getDate();
    let d = new Date(year, month);

    let week = 0;

    for (let i = 1; i <= currDate; i++) {
      d.setDate(i);
      if ((i === 1 && startDay !== 0) || d.getDay() === 0) week++;
    }

    return `${year}-${month < 10 ? `0${month + 1}` : month + 1} week${week}`;
  };
}

export default DateUtils;
