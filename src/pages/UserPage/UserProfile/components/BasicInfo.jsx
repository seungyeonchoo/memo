import styled from 'styled-components';

const BasicInfo = ({ user }) => {
  return (
    <ProfileSum>
      <Text bold="bold">{user?.name}</Text>
      <Text size="0.8em">{user?.email}</Text>
      {/* <Interest interest={data?.interest} /> */}
    </ProfileSum>
  );
};

export default BasicInfo;

const ProfileSum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const Text = styled.h1`
  font-size: ${prop => prop.size};
  font-weight: ${prop => prop.bold};
  && {
    margin-bottom: 1rem;
  }
`;
