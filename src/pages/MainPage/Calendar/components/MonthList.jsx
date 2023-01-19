import styled from 'styled-components';

const MonthList = ({ handleMonth }) => {
  return (
    <List>
      <tbody>
        <Row>
          <Item onClick={() => handleMonth(1)}>Jan</Item>
          <Item onClick={() => handleMonth(2)}>Feb</Item>
          <Item onClick={() => handleMonth(3)}>Mar</Item>
        </Row>
        <Row>
          <Item onClick={() => handleMonth(4)}>Apr</Item>
          <Item onClick={() => handleMonth(5)}>May</Item>
          <Item onClick={() => handleMonth(6)}>Jun</Item>
        </Row>
        <Row>
          <Item onClick={() => handleMonth(7)}>Jul</Item>
          <Item onClick={() => handleMonth(8)}>Aug</Item>
          <Item onClick={() => handleMonth(9)}>Sep</Item>
        </Row>
        <Row>
          <Item onClick={() => handleMonth(10)}>Oct</Item>
          <Item onClick={() => handleMonth(11)}>Nov</Item>
          <Item onClick={() => handleMonth(12)}>Dec</Item>
        </Row>
      </tbody>
    </List>
  );
};

export default MonthList;

const List = styled.table`
  position: absolute;
  display: flex;
  height: 200px;
  width: 300px;
  background-color: #fff;
  top: 11.7rem;
  z-index: 1;
  border: 1px solid black;
`;
const Row = styled.tr`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Item = styled.th``;
