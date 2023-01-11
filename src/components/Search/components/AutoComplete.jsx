import styled from 'styled-components';
import UserItem from './UserItem';

const AutoComplete = ({ data }) => {
  if (data?.length < 1) return <div>검색 결과가 없습니다.</div>;
  return (
    <Wrapper>
      {data?.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </Wrapper>
  );
};

export default AutoComplete;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 20rem;
`;
