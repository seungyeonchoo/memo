import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/main" element={<MainPage />} /> */}
        <Route path="/users/:id" element={<UserPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
