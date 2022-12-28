import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import styled from 'styled-components';
import useDelete from '../../../../hooks/useDelete';
import useToggle from '../../../../hooks/useToggle';

const ItemButton = ({ item }) => {
  const { handleToggle, editGoalToggle, createGoalToggle } = useToggle('edit', item);
  const { handleDelete } = useDelete('goals', item.id);

  return (
    <ButtonWrapper>
      <Button onClick={handleToggle} disabled={editGoalToggle || createGoalToggle}>
        <AiFillEdit />
      </Button>
      <Button onClick={handleDelete}>
        <AiFillDelete />
      </Button>
    </ButtonWrapper>
  );
};

export default ItemButton;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
