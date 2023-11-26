import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AddLink from './AddLink';

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
