import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Footer from './footer';
import Header from './header';
import './Layout.scss';

const Layout = () => {
  return (
    <div className='app-layout'>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
