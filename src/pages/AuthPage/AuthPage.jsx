import AuthButton from './components/AuthButton';
import AuthTitle from './components/AuthTitle';

const AuthPage = () => {
  return (
    <>
      <AuthTitle type="login" />
      <AuthButton>로그인</AuthButton>
    </>
  );
};

export default AuthPage;
