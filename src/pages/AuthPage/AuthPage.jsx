import AuthButton from './components/AuthButton';
import AuthRegister from './components/AuthRegister';
import AuthTitle from './components/AuthTitle';
import LoginInput from './components/LoginInput';
import RegisterInput from './components/RegisterInput';

const AuthPage = () => {
  return (
    <>
      <AuthTitle type="login" />
      <LoginInput />
      <RegisterInput />
      <AuthButton type="login" />
      <AuthRegister type="login" />
    </>
  );
};

export default AuthPage;
