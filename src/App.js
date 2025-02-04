import { Route, Routes } from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Bookings from './components/pages/Bookings';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import NotFound from './components/pages/NotFound';
import UnderConstruction from './components/pages/UnderConstruction';
import AboutUs from './components/pages/About/AboutUs';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={pages.home.path} element={<Home />} />
        <Route path={pages.about.path} element={<AboutUs />} />
        <Route path={pages.menu.path} element={<UnderConstruction />} />
        <Route path={pages.bookings.path} element={<Bookings />} />
        <Route path={pages.confirmedBooking.path} element={<ConfirmedBooking />} />
        <Route path={pages.orderOnline.path} element={<UnderConstruction />} />
        <Route path={pages.login.path} element={<UnderConstruction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
