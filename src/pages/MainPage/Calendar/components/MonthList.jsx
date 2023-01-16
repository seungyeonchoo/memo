const MonthList = ({ handleMonth }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th onClick={() => handleMonth(1)}>Jan</th>
          <th onClick={() => handleMonth(2)}>Feb</th>
          <th onClick={() => handleMonth(3)}>Mar</th>
        </tr>
        <tr>
          <th onClick={() => handleMonth(4)}>Apr</th>
          <th onClick={() => handleMonth(5)}>May</th>
          <th onClick={() => handleMonth(6)}>Jun</th>
        </tr>
        <tr>
          <th onClick={() => handleMonth(7)}>Jul</th>
          <th onClick={() => handleMonth(8)}>Aug</th>
          <th onClick={() => handleMonth(9)}>Sep</th>
        </tr>
        <tr>
          <th onClick={() => handleMonth(10)}>Oct</th>
          <th onClick={() => handleMonth(11)}>Nov</th>
          <th onClick={() => handleMonth(12)}>Dec</th>
        </tr>
      </tbody>
    </table>
  );
};

export default MonthList;
