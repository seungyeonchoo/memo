import AuthPage from './pages/AuthPage/AuthPage';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import AppRouter from './AppRouter';
import TokenStorage from './utils/Storage';

const Router = () => {
  const token = new TokenStorage().getToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!token ? <AuthPage /> : <Navigate replace to="/main" />} />
        <Route path="/*" element={token ? <AppRouter /> : <Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
