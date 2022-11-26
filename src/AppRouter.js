import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './pages/MainPage/MainPage';

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/main" element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
