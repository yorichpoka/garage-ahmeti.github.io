import HeaderModules from './HeaderModules';
import HeaderPhone from './HeaderPhone';
import HeaderTitle from './HeaderTitle';
import './Header.scss';

const Header = () => (
  <div className='app-header'>
    <HeaderPhone />
    <HeaderModules />
    <HeaderTitle />
  </div>
);

export default Header;

