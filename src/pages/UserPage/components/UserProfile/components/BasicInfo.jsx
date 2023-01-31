import styled from 'styled-components';
import Interest from '../../../../../components/Interest/Interest';

const BasicInfo = ({ data }) => {
  return (
    <ProfileSum>
      <Text bold="bold">{data?.name}</Text>
      <Text size="0.8em">{data?.email}</Text>
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
