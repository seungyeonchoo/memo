import styled from 'styled-components';

const MonthList = ({ handleMonth }) => {
  return (
    <table>
      <MonthContainer>
        <Row>
          <Item onClick={() => handleMonth(1)}>JAN</Item>
          <Item onClick={() => handleMonth(2)}>FEB</Item>
          <Item onClick={() => handleMonth(3)}>MAR</Item>
        </Row>
        <Row>
          <Item onClick={() => handleMonth(4)}>APR</Item>
          <Item onClick={() => handleMonth(5)}>MAY</Item>
          <Item onClick={() => handleMonth(6)}>JUN</Item>
        </Row>
        <Row>
          <Item onClick={() => handleMonth(7)}>JUL</Item>
          <Item onClick={() => handleMonth(8)}>AUG</Item>
          <Item onClick={() => handleMonth(9)}>SEP</Item>
        </Row>
        <Row>
          <Item onClick={() => handleMonth(10)}>OCT</Item>
          <Item onClick={() => handleMonth(11)}>NOV</Item>
          <Item onClick={() => handleMonth(12)}>DEC</Item>
        </Row>
      </MonthContainer>
    </table>
  );
};

export default MonthList;

const MonthContainer = styled.table`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  width: 250px;
  background-color: #ffcdd2;
  /* top: 10.5rem; */
  /* left: 6.5rem; */
  /* margin: auto; */
  z-index: 1;
  box-shadow: 1px 1px 1px #666;
  padding: 1em;
  border-radius: 10px;
`;

const Row = styled.tr`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Item = styled.th`
  cursor: pointer;
  font-size: 0.8em;
  width: 20%;

  &:hover {
    font-weight: bold;
  }
`;
