import styled from 'styled-components';
import useMutate from '../../../../hooks/useMutate';

const DiaryContent = ({ currDiary }) => {
  const { handleMutation: deleteContents } = useMutate(`/diaries/${currDiary?.id}`, 'delete');
  return (
    <>
      <Item>{currDiary?.contents}</Item>
      <ButtonWrapper>
        {/* <Button>수정</Button> */}
        <Button onClick={deleteContents}>삭제</Button>
      </ButtonWrapper>
    </>
  );
};

export default DiaryContent;

const Item = styled.div`
  height: 85%;
  width: 100%;
  padding: 1rem;
  line-height: 1.2rem;
  font-size: 0.8em;
  overflow: scroll;
  overflow-wrap: break-word;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Button = styled.button`
  border: 1px solid #666;
  font-size: 0.6em;
  font-weight: bold;
  background-color: inherit;
  margin-top: 1em;
  padding: 0.5em;
  width: 20%;
  cursor: pointer;

  &:hover {
    background-color: #ffcdd2;
    border: 1px solid #ffcdd2;
  }
`;
