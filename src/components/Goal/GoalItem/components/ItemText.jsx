import styled from 'styled-components';

const ItemText = ({ item }) => {
  return (
    <TextWrapper>
      <Text>{item.due_date}까지</Text>
      <Text>{item.goal_name}</Text>
    </TextWrapper>
  );
};

export default ItemText;

const TextWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
`;

const Text = styled.p``;
