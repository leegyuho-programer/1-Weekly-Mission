import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AddLink from '../AddLink/AddLink';

function Layout() {
  return (
    <>
      <Header />
      <AddLink />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
