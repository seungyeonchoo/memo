import styled from 'styled-components';
import UserItem from './UserItem';

const AutoComplete = ({ data }) => {
  return (
    <Wrapper>
      {data?.length < 1 ? (
        <div>검색 결과가 없습니다.</div>
      ) : (
        data?.map(user => <UserItem key={user.id} user={user} />)
      )}
    </Wrapper>
  );
};

export default AutoComplete;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  top: 4em;
  width: 20rem;
  position: absolute;
  padding: 0.5em;
  background-color: #e0e0e0;
  z-index: 10;
  border-radius: 10px;
`;
