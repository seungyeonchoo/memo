import styled from 'styled-components';

const ItemText = ({ item }) => {
  return (
    <TextWrapper>
      <Text>Due to {item.due_date}</Text>
      <Text>{item.goal_name}</Text>
    </TextWrapper>
  );
};

export default ItemText;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p``;
