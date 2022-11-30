import styled from 'styled-components';
import { DEFAULT_PROFILE_IMG } from '../../../../../utils/constant';

const ProfileImg = ({ data }) => {
  return (
    <ImgBox>
      <Img src={data?.img || DEFAULT_PROFILE_IMG} alt="user" />
      <Button>이미지 설정</Button>
    </ImgBox>
  );
};

export default ProfileImg;

const ImgBox = styled.section`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 100px;
  border-radius: 50%;
`;
const Button = styled.button``;
