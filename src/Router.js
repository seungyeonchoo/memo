import AuthPage from './pages/AuthPage/AuthPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRouter from './AppRouter';

const Router = () => {
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
