import styled from 'styled-components';

const InterestItem = ({ interest }) => {
  return <Item>{interest}</Item>;
};

export default InterestItem;

const Item = styled.li`
  border: 1px solid #9e9e9e;
  width: fit-content;
  background-color: #9e9e9e;
  color: white;
  padding: 3px;
  font-size: 0.8rem;
  border-radius: 5px;
  && {
    margin-right: 2px;
  }
`;
