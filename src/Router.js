import AuthPage from './pages/AuthPage/AuthPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppRouter from './AppRouter';
import TokenStorage, { user_id } from './utils/Storage';

const Router = () => {
  const token = new TokenStorage().getToken();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!token ? <AuthPage /> : <Navigate replace to={`/users/${user_id}`} />}
        />
        <Route path="/*" element={token ? <AppRouter /> : <Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
