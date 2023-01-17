import styled from 'styled-components';

const ProfileImg = ({ user }) => {
  return (
    <ImgBox>
      <Img src={user?.img || null} alt="user" />
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
