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
  /* background-color: #fff; */
  top: 3.1em;
  width: 20rem;
  position: absolute;
  padding: 0.5em;
  background-color: #fff;
  z-index: 10;
  border: 1px solid #666;
`;
