import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import GroupPage from './pages/GroupPage/GroupPage';
import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/main" element={<MainPage />} /> */}
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/groups" element={<GroupPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
