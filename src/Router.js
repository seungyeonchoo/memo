import AuthPage from './pages/AuthPage/AuthPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppRouter from './AppRouter';
import TokenStorage, { user_id } from './utils/Storage';

const Router = () => {
  const token = new TokenStorage().getToken();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
