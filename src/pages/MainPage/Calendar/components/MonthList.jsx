import styled from 'styled-components';

const MonthList = ({ handleMonth }) => {
  return (
    <List>
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
    </List>
  );
};

export default MonthList;

const List = styled.table`
  display: flex;
  justify-content: center;
  height: 200px;
  width: 300px;
  background-color: #fff;
  top: 13rem;
  z-index: 1;
`;

const Item = styled.th`
  display: flex;
`;
