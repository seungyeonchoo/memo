import styled from 'styled-components';
import { DEFAULT_PROFILE_IMG } from '../../../../utils/constant';

const ProfileImg = ({ user }) => {
  return (
    <ImgBox>
      <Img src={user?.img || DEFAULT_PROFILE_IMG} alt="user" />
    </ImgBox>
  );
};

export default ProfileImg;

const ImgBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

const Img = styled.img`
  width: 60px;
`;