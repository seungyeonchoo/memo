import styled from 'styled-components';

const ProfileButton = () => {
  return (
    <ButtonWrapper>
      <button>알림</button>
      <button>쪽지</button>
      <button>임박</button>
    </ButtonWrapper>
  );
};

export default ProfileButton;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
