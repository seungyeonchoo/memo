import styled from 'styled-components';
import Interest from '../../Interest/Interest';

const BasicInfo = ({ data }) => {
  return (
    <ProfileSum>
      <Text>{data?.name}</Text>
      <Text>{data?.email}</Text>
      <Interest interest={data?.interest} />
    </ProfileSum>
  );
};

export default BasicInfo;

const ProfileSum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Text = styled.h1`
  && {
    margin-bottom: 1rem;
  }
`;
